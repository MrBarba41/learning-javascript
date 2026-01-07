'use strict'

localStorage.setItem("titulo","LocalStorage Prueba");

let usuario = {
    nombre: "Francisco",
    apellido: "Barba",
}

localStorage.setItem("user",JSON.stringify(usuario)); //Transformamos el json a string para que se guarden los datos correctamente

localStorage.getItem("user");
console.log(localStorage.getItem("user")); //No es el objeto, es solo el string

console.log(JSON.parse(localStorage.getItem("user"))); //Lo transforma en un objeto de nuevo

localStorage.removeItem("user"); //Elimina el valor indicado

localStorage.clear(); //Limpia todo el localstorage