'use strict'

/*
Programar que pida 6 numeros por pantalla y los guarde en un array
Mostrar todos los elementos del array en el html y consola
Ordenar los elementos y mostrarlos
Invertir su orden y mostrarlo
Mostrar cuantos elementos tiene el array
Buscar un valor introducido por el usuario y que nos diga si existe y su posicion
*/

let valores = [""];
for(let i = 1; i <= 6; i++){
    valores.push(parseInt(prompt(`Introduzca valores para insertar al arreglo:`)));
    document.writeln(valores[i]);
    console.log(valores[i]);
}

document.writeln("<br><h2>Ordenar</h2>");

let ordenar = valores.sort();
for(let valor in valores){
    document.writeln(valor);
}

document.writeln("<br><h2>Reverso</h2>");

let reverse = valores.reverse();
valores.forEach(element => {
    document.writeln(element);
});

document.writeln("<br><h2>Cant Elementos</h2>");

let cantValores = valores.length;
document.writeln(cantValores);

document.writeln("<br><h2>Busqueda por Usuario</h2>");

let buscar = parseInt(prompt("Introduce un valor para buscar en el arreglo: "));

let buscarValor = valores.find(valor => valor == buscar);
let buscarIndex = valores.findIndex(valor => valor == buscar);
document.writeln("Valor encontrado: "+buscarValor);
document.writeln("Posición: "+buscarIndex);

