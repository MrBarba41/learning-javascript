/* Tabla de multiplicar de un número introducido*/

'use strict'

let numero;
while (isNaN(numero)) {
    numero = parseInt(prompt("Introduzca un número para ver su tabla: "));
}

    for(let i = 1; i <= 10; i++){
        let tablas = numero*i;
        document.writeln(""+ numero + " x "+ i + " = "+ tablas +"<br>");
    }