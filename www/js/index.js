//http://servicio-ac.com/index.php/sistemas/servicio/actividades?d=1
$(document).ready(function(){
	//carga actividades al inicio
	refrescar_principal();

	//carga actividades al precionar actualizar
	$(document).on("click",".btn_actualizar",function(){	
		refrescar_principal();	
	})

	//ocultar otras actividades al dar click en una
	$(document).on("click",".heading_actividades",function(){
		$('.collapse.in').collapse('hide');
	})

	//cargar formulario de conclusion
	$(document).on("click",".btn_finalizar",function(){
		$("#modal_actividades").modal("show");
		$("#modal_actividades_body").html(loader());
		$.post("http://servicio-ac.com/index.php/sistemas/servicio/form_finalizar",{act:$(this).attr('id_actividad')},function(r){
			$("#modal_actividades_body").html(r);
		}) 
	})

	//envio de formulario al finalizar tarea
	$(document).on("click",".finalizar_actividad",function(){
		if(confirm("LA TAREA SERA MARCADA COMO FINALIZADA?")){
			var formulario=$("#formulario_finalizar_actividad").serialize();
			$("#modal_actividades_body").html(loader());
				$.post("http://servicio-ac.com/index.php/sistemas/sistemas/editar_actividad",formulario,function(r){
					$("#modal_actividades").modal("hide");
					refrescar_principal();
					alert("TAREA FINALIZADA");
				}) 
		}
	})

	//seleccionar todo el texto al presionar un input de numero
	$(document).on("click",".input_numero",function(){
		$(this).select();
	})
	//funccion que carga actividades
   	function refrescar_principal(){
   		$(".contenedor_principal").html(loader());
   		$.post("http://servicio-ac.com/index.php/sistemas/servicio/actividades?d=1",function(r){
			$(".contenedor_principal").html(r);
		}) 
   }

   //loader centrado
   function loader(){
		var loader="<div class='col col-lg-12 loader_ocu' style='margin-top:40%'>"+
		"<div class='spinner'>"+
		"<div class='rect1'>"+
		"</div><div class='rect2'>"+
		"</div><div class='rect3'>"+
		"</div><div class='rect4'>"+
		"</div><div class='rect5'>"+
		"</div></div></div>";
		return loader;
	}

})