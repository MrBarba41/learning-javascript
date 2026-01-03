'use strict'

let box = document.getElementById("box"); //.innerHTML; Para extraer el contenido HTML //Para IDs
let boxQ = document.quertSelector("#box2"); //Otra forma de conectarnos al HTML, con la diferencia de que hay que indicar si es una Id o Clase con su signo
console.log(box);

box.style.color = "red"; //Podemos cambiar estilos
box.innerHTML = "Super cambiaso"; //Y cambiar el contenido HTML

box.style.padding = "20px";
box.style.backgroundColor = "blue";

box.className = "cajaClase"; //Le damos una clase al elemento HTML

//Tomamos todos los elementos con esa etiqueta guardandolos en forma de array

let div = document.getElementsByTagName("div");

//Por clase

let classDiv = document.getElementsByClassName("classDiv");