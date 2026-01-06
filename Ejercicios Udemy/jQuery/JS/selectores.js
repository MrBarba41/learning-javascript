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