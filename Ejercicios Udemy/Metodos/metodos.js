'use strict'

let numero = 41;
let texto1= "  Hola soy Fran";
let texto2= "Soy deportista y programador.";

let numToString = numero.toString(); //Transforma a string
let textToUpperCase = texto1.toUpperCase(); //Transforma los caracteres a mayuscula
let textToLowerCase = texto2.toLowerCase(); //Transforma a minuscula

console.log(numToString);
console.log(textToUpperCase.length); //Contar cantidad de elementos (letras en string, valores de arrays, etc)
console.log(textToLowerCase);

let textoCompleto = texto1.concat(texto2);
console.log(textoCompleto);

let buscarIndex = texto1.indexOf('Fran'); //Encuentra la posición de la palabra
console.log(buscarIndex);
let buscarMatch = textoCompleto.match('Soy'); //Encuentra la posición de la palabra en forma de array, siendo util para buscar varias palabras
console.log(buscarMatch);

let buscarSubstr = textoCompleto.substr(5,10); //Extrae texto entre las posiciones señaladas
console.log(buscarSubstr);

let buscarInclude = textoCompleto.includes('programador'); //Devuelve true or false segun si encuentra la palabra solicitada
console.log(buscarInclude);

//Tenemos replace, splice, split y trim. Esté ultimo es el mas importante

let trimExample = texto1.trim(); //Elimina los espacios por delante y por detras del string
console.log(trimExample);
