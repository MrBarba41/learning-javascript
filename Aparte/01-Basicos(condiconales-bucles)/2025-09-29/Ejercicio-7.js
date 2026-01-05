/* Calculadora: Pida 2 números
    Si ponemos uno mal lo pida de nuevo
    Que muestra en la pagina en una alerta y por consola el resultado de sumar, restar, multiplicar y dividir los 2 numeros
*/

'use strict'

let numero1;
let numero2;

while(isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("Ingrese el primer número:"));
    numero2 = parseInt(prompt("Ingrese el segundo número:"));
    if(isNaN(numero1) || isNaN(numero2)){
        alert("Vuelva a ingresar los valores");
    }
}

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let multiplicacion = numero1 * numero2;
let division = numero1 / numero2;

document.writeln("  "+ numero1 +" + "+ numero2 +" = " + suma +"<br><br>");
document.writeln("  "+ numero1 +" - "+ numero2 +" = " + resta +"<br><br>");
document.writeln("  "+ numero1 +" x "+ numero2 +" = " + multiplicacion +"<br><br>");
document.writeln("  "+ numero1 +" / "+ numero2 +" = " + division +"<br><br>");