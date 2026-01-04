'use strict'

/*
1-Formulario con campos Nombre, Apellidos y Edad.
2-Botón de enviar formulario: evento Submit.
3-Mostrar los datos por pantalla.
4-Tener un botón que al darle click nos muestra los datos actuales del formulario.
*/

let form = document.querySelector("#form");
let button = document.querySelector("#botonSubmit");
let divResultados = document.querySelector("#resultados");


button.addEventListener("click",()=>{
    divResultados.innerHTML = "";

    let parrafo = document.createElement("p");
    let nombres = document.getElementById("nombres").value.trim();
    let apellidos = document.getElementById("apellidos").value.trim();
    let edad = document.getElementById("edad").value.trim();

    let errores = [];
    let soloLetras = /^[A-Za-z\s]+$/;
    if(!nombres || !soloLetras.test(nombres)){
        errores.push("El nombre no cumple con las condiciones, vuelva a intentar");
    }
    
    if(!apellidos || !soloLetras.test(apellidos)){
        errores.push("El apellido no cumple con las condiciones, vuelva a intentar");
    }

    if(!edad || edad <= 0 || isNaN(Number(edad))){
        errores.push("La Edad no cumple con las condiciones, vuelva a intentar");
    }

    if(errores.length === 0){
        let datosUsuarios = [nombres,apellidos,edad];
        
        for (let date in datosUsuarios) {
            parrafo.append(datosUsuarios[date] + " ");
        }
        divResultados.append(parrafo);
    } else {
        errores.forEach(err => {
            const textoError = document.createElement("p");
            textoError.textContent = err;
            divResultados.append(textoError);
        });
    }

});


