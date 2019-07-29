$(document).ready(function() {
	 window.localStorage.clear();
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
			}else{
				//creacion de session en local
				var us = JSON.parse(r);
				window.localStorage.setItem("id_usuario", us.id_usuario);
				window.localStorage.setItem("nombre", us.nombre);
				window.localStorage.setItem("departamento", us.departamento);
				window.localStorage.setItem("tipo", us.tipo);
				window.localStorage.setItem("usuario", us.usuario);
				window.localStorage.setItem("clave", us.clave);
				window.location.replace("index.html"); 
			}
		})
	}
});