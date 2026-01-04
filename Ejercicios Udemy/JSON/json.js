'use strict'

let peliculas =[
    {
        titulo:"Batman",
        genero:"Accion",
        origen:"EEUU",
    }
];

let form = document.querySelector("#form");
let button = document.querySelector("#submit");
let tablon = document.querySelector("#tablon");

button.addEventListener("click",()=>{
    let titulo = document.querySelector("#titulo").value.trim();
    let genero = document.querySelector("#genero").value.trim();
    let origen = document.querySelector("#origen").value.trim();
    
    peliculas.titulo.push(titulo);
    peliculas.genero.push(genero);
    peliculas.origen.push(origen);
    
    console.log(peliculas);
});