/* Programa que muestre los números divisores de un número introducido en un prompt */

'use strict'

let numero = 0;

 numero = parseInt(prompt("Introduce un número para saber sus divisores: "));

 for(let i = 0; i <= numero; i++){
    if(numero%i == 0){
        document.writeln(""+ i +" es divisor <br><br>");
    }
 }