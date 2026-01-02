'use strict'

//Consiste en imprimir valores de variables directamente

let nombre = prompt("Ingresé su nombre: ");
let edad = prompt("Ingresé su edad: ");

let presentación = `<h1>Soy ${nombre} y tengo ${edad}</h1>`;

document.write(presentación);