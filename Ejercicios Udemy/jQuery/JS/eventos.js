$(document).ready(function(){
    console.log("Cargado pa");
});

let caja = $('#caja');

//MouseOver

caja.mouseover(function(){
    $(this).css("background-color","red");
    $(this).css("transition","0.3s");
});


//MouseOut

caja.mouseout(function(){
 $(this).css("background-color","green");
});


//Hover

caja.hover(function () {
    $(this).css("background-color","red");
    $(this).css("transition","0.3s");
}, function () {
        $(this).css("background-color","green");
    }
);

//Click

caja.click(function(){ 
    $(this).css("background-color","blue");
});

//DobleClick

caja.dblclick(function(){
    $(this).css("background-color","white");
});

//Focus

let input = $('#input');

input.focus(function(){ 
    $(this).css("border","2px solid blue");
});


//Blur

input.blur(function(){ 
    $(this).css("border","2px solid yellow");
});

//Mouse move

$(document).mousemove(function () { 
    let sigueme = $('#sigueme');
    sigueme.css("left",event.clientX);
    sigueme.css("top",event.clientY);
});
