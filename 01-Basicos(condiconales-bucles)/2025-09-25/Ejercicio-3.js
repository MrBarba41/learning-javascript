/* Hacer un programa que muestre todos los números entre dos números introducidos por el usuario */

'use strict'

let numero1 = parseInt(prompt("Introduce el primer número:", 0));
let numero2 = parseInt(prompt("Introduce el segundo número:", 0));
let numero_mayor;
let numero_menor;

if(numero1 >= numero2){
    numero_mayor = numero1;
    numero_menor = numero2;
} else {
    numero_mayor = numero2;
    numero_menor = numero1;
}

    for(let i = numero_menor; i <= numero_mayor; i++){
        console.log(i);
        document.writeln(i+"<br>");
    }