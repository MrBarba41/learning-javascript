/*Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta introducir un número negativo y ahí mostrar el resultado */

'use strict'

let suma_total = 0;
let promedio = 0;
let contador = 0;
let numero = 0;

do {
    
    numero = parseInt(prompt("Ingrese un número:"));
    suma_total += numero;
    contador++;
    promedio = suma_total / contador;
    
} while(numero > 0);

alert("La suma total de los números introducidos es: "+ suma_total +" y el promedio es: "+ promedio +"");