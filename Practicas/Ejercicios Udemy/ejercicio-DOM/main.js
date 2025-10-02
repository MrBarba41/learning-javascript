'use strict'
window.addEventListener('load', () => {
    console.log("DOM cargado.");
    var datosUsuario = "";
    let form = document.querySelector("#formulario");
    var nombre = document.querySelector("#nombre");
    var apellido = document.querySelector("#apellido");
    var edad = document.querySelector('#edad');
    var mostrarDatos = document.querySelector("#mostrar");
    form.addEventListener('submit',() =>{
        console.log("Evento submit capturado");
        let edadnum = parseInt(edad.value);
        if(nombre.value.length <= 0){
            alert("Nombre invalido");
            return false;
        }
        else if(apellido.value.trim().length <= 0){
            alert("Apellido invalido");
            return false;
        }
        else if( edadnum <= 0 || isNaN(edadnum)){
            alert("Edad invalida");
            return false;
        }
        datosUsuario = [nombre.value,apellido.value,edad.value];
    })

    mostrarDatos.addEventListener("click",()=>{
        let box = document.querySelector("#box");
            box.style.border = "3px dashed black";
            box.style.backgroundColor = "yellow";
            box.style.padding = "10px";
            box.style.margin = "10px";
        for(let indice in datosUsuario){
            let parrafo = document.createElement("p");
            parrafo.append(datosUsuario[indice]);
            box.appendChild(parrafo);
        }
    });
});

