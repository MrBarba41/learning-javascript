$(document).ready(()=>{
    console.log("Chetasico mi bro");
});

// Selector de Id

$("#rojo").css("background","red");
$("#amarillo").css("background","yellow"); 
$("#verde").css("background","green");

 //Selector de Clase

let parrafosSinBorde = $(".sinBorde");

$(".sinBorde").click(function(){
    console.log("Click dado");
    $(this).addClass('conBorde');
});

//Selector de Eriqueta

let parrafos = $("p");

//Selector de Atributo

$("[name='brrPatapim']").css("font-size","20px");

$('#caja').find('.resaltado').css('color','green'); //Gracias al .find podemos encontrar elementos dentro de otros, siendo mas especificos evitando tomar otros que no queremos modificar

let parent = $('#caja').parent().parent().find('#rojo'); //El parent nos permite seleccionar elementos "padre" o que están por encima del actual

console.log(parent);