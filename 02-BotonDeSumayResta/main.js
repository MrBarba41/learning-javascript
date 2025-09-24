'use strict';

window.addEventListener('load',()=>{
    let valorHTML = document.querySelector("#valor");
    let contador = parseInt(localStorage.getItem("contador")) || 0;
    valorHTML.textContent = contador; 
    let sumar = document.querySelector(".sum");
    let restar = document.querySelector(".rest");
    let reiniciar = document.querySelector(".reset");

    function modificarValor (){
        sumar.addEventListener("click",()=>{
            contador++;
            actualizarValorMostrado();
            localStorage.setItem("contador",contador);
        });
        restar.addEventListener("click",()=>{
            contador--;
            actualizarValorMostrado();
            localStorage.setItem("contador",contador);
        });
        reiniciar.addEventListener("click", ()=>{
            localStorage.removeItem("contador");
            if(localStorage.getItem("contador") == null) {contador = 0;}
            actualizarValorMostrado();
        });
    }

    function actualizarValorMostrado(){
        valorHTML.textContent = contador;
    }

    modificarValor();
});