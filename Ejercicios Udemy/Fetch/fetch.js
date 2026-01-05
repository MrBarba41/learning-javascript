'use strict';

try{ //Para que el error se guarde en el cath en caso de haber
    let titulosMostrar = [];
    fetch("https://jsonplaceholder.typicode.com/todos") //Hacemos una petición a un servicio externo para usar sus datos
    .then(datos => datos.json()) //Transformamos esos datos en formato JSON para manipularlo
    .then(datos => { //los .then son las promesas, cunado lo anterior suceda va a proseguir
        titulosMostrar = datos; //Lo almacenamos en una variable
        console.log(titulosMostrar); //Lo mostramos para corroborar que la petición se cumplió correctamente
        titulosMostrar.map((peli, i)=>{
            let divTitulos = document.querySelector("#titulos");
            let parrafo = document.createElement("p");
            parrafo.innerText = i + " " + peli.title;
            divTitulos.append(parrafo);
        });
    })
}
catch(error){ //Para detectar errores
    console.log(error); 
}