'use strict';


    let num1 = parseInt(prompt("Introduce un numero: "));
    let num2 = parseInt(prompt("Introduce un numero: "));
    
 while (num1 <= 0 || num2 <= 0  || isNaN(num1)) {

    num1 = parseInt(prompt("Introduzca el primer numero de nuevo: "));
    num2 = parseInt(prompt("Introduzca el segundo numero de nuevo: "));

 }

if (num1 > num2) {
    alert("El numero " + num1 + " es mayor.");
}else if (num1 < num2){
    alert("El numero " + num2 + " es mayor.");
} else if (num1 == num2) {
    alert("Ambos numeros son iguales.");
} 
