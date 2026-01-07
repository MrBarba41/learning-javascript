$(document).ready(function() { 
    console.log("Jurasico");

    enlaceATexto();
    $('#addButton').click(function() { 
       $("#lista").prepend('<li><a href="'+$('#addInput').val()+'"></a></li>');
       $('#addInput').val('');    
       enlaceATexto();
    });

 });

 function enlaceATexto() {
        $('a').each(function(){
        let that = $(this);
        let enlace = that.attr('href');
        that.attr("target","_blank");
        that.text(enlace);
    });
   }