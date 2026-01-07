$(document).ready(function () {
   let mostrar = $('#mostrar');
   let ocultar = $('#ocultar');
   let caja = $('#caja');
    ocultar.click(function() {
    //  caja.hide('normal');
        caja.fadeOut();
    });
    mostrar.click(function() {
    //  caja.show('normal');
        caja.fadeIn();
    });

    //Toggle
    $('#toggle').click(function(){
        caja.fadeToggle();
    });
});