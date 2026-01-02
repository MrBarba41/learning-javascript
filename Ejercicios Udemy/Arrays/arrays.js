'use strict'

let frutas = ["Manzana","Banana","Coco","Pera","Frutilla"];

let cantidadElementos = frutas.length;
console.log(cantidadElementos);

document.writeln("<h2>Con For</h2>");
for(let i = 0; i < cantidadElementos; i++){
    document.write("<br>")
    document.write(frutas[i]);
}

document.writeln("<br>")
document.writeln("<h2>Con ForEach</h2>");


//En vez de usar un for podemos usar:

frutas.forEach((elemento, index, dato)=>{
    document.write("<br>"+elemento);
})

document.writeln("<br>")
document.writeln("<h2>Con For In</h2>");
//Tambien podemos usar el For In

for(let fruta in frutas){
    document.write("<br>"+frutas[fruta]);
}


//Agregar y eliminar elementos del array

frutas.push(); //Agrega al final

frutas.pop(); //Elimina el ultimo elemento

//Para ordenar el array usamos:

frutas.sort(); //Alfabetica y numericamente
frutas.reverse(); //Reverso

//Para encontrar elementos en el array podemos usar find o findIndex

let buscarFruta = frutas.find(fruta => fruta == "Manzana");
console.log(buscarFruta);

let buscarIndice = frutas.findIndex(fruta => fruta == "Manzana");
console.log(buscarIndice);

//Tambien existe .some que nos ayuda a comparar elementos de un array devolviendo true or false