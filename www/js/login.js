$(document).ready(function() {

	//al presionar el boton
	$(document).on("click",".btn_entrar",function(){
		inicio_session();
	})

	//al activar formulario
	$("#form_login").submit(function(event) {
		event.preventDefault();
	});

	//function que realiza la validacion de usuario
	function inicio_session(){
		var usuario = $(".input_usuario").val();
		var clave = $(".input_clave").val()
		$.post("http://servicio-ac.com/index.php/sistemas/servicio/validar?usuario="+usuario+"&clave="+clave,function(r){
			if(r=='0'){ 
				alert("Usuario o Clave incorrectos!");window.location.replace("login.html"); 
			}
			if(r=='1'){
				window.localStorage.setItem("usuario", $(".input_usuario").val());
				window.localStorage.setItem("clave", $(".input_clave").val());
				window.location.replace("index.html"); 
			}
		})
	}
});