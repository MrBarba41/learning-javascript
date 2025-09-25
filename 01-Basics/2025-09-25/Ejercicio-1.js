/*Realizar un programa que compare dos números e indicar cual es mayor, cual es menor o si son iguales */

'use strict'
let numero1;
let numero2;

while(isNaN(numero1) || isNaN(numero2)){    
    numero1 = parseInt(prompt("Indique el primer número: "));
    numero2 = parseInt(prompt("Indique el segundo número: "));
}

    if(numero1 == numero2) {
        alert("Los números introducidos son iguales");
    }
    else if(numero1 > numero2){
        alert("El número "+ numero1 +" es mayor que "+ numero2 +"");
    } else {
        alert("El número "+ numero2 +" es mayor que "+ numero1 +"");
    }