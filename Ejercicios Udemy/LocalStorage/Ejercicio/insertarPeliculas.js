'use strict'

let form = document.querySelector("#form");

form.addEventListener("submit",()=>{
    
    let tituloPelicula = document.querySelector("#titulo").value.trim();
    if (tituloPelicula != null || tituloPelicula.length >= 0) {
        localStorage.setItem("titulo",tituloPelicula);
    }

    let ul = document.querySelector("ul");
    for (let titulos in localStorage) {

        if(typeof localStorage[titulos] === 'string'){
            let li = document.createElement("li");
            li.append(localStorage[titulos]);
            ul.append(li);
        }
    }
});

let formBorrar = document.querySelector("#formBorrar");

formBorrar.addEventListener("submit",()=>{
    console.log("Funca pa");
    let tituloBorrado = document.querySelector("#tituloBorrado").value;

            localStorage.removeItem(titulo);
    }   
);