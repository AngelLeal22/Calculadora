// creamos los selectores

const pantalla = document.querySelector(".pantalla")
const botones = document.querySelectorAll(".btn")


botones.forEach(boton =>{
    boton.addEventListener("click",()=>{
         
        const botonApretado = boton.textContent      //textContent se utiliza para obtener o establecer el contenido de texto de un elemento HTML, incluyendo todos sus nodos descendientes

        if (boton.id === "c") {   
            pantalla.textContent = "0";
            return;
        }

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === "1"  || pantalla.textContent === "Error") {
                
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1); //En JavaScript, el método slice() se utiliza para extraer una parte de un array o una cadena de texto y devolverla como un nuevo objeto, sin modificar el original
            }
            return;

            
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent)  //La función eval() evalúa una cadena como código JavaScript, lo que significa que convierte la cadena en instrucciones ejecutables y las ejecuta.

            } catch {
                pantalla.textContent="Error"
            }
            return;

        }
        if (pantalla.textContent === "0" ||pantalla.textContent === "error" ) {
            pantalla.textContent = botonApretado;
            
            
        } else{
            pantalla.textContent += botonApretado
        }

    });
});