//http://servicio-ac.com/index.php/sistemas/servicio/actividades?d=1
$(document).ready(function(){
   $.post("http://servicio-ac.com/index.php/sistemas/servicio/actividades?d=1",function(r){
    $(".contenedor_principal").html(r);
   }) 
})