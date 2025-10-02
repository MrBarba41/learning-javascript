/* Programa que indique si un número es par o impar
    1. Ventana prompt
    2. Si el número no es valido que lo vuelva a solicitar
*/

'use strict'

let numero = 0;

do {

    numero = parseInt(prompt("Introduzca su número: "));
    if(isNaN(numero)) {
        alert("El valor introducido no es valido, vuelva a ingresar!");
    }

} while(isNaN(numero));

if (numero%2 == 0) {
    document.writeln("El número "+ numero +" es par");
} else {
        document.writeln("El número "+ numero +" es impar");
}