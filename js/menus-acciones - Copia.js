//Script que se ejecutara cuando se acceda a la page #comunicacion	
$("#home").on("pageshow",function(e) {
	$('.camera_wrap').empty();
	insertarGaleria();
});
//Script que se ejecutara cuando se acceda a la page #comunicacion	
$("#comunicacion").on("pageshow",function(e) {
	if(comunicacion_s != 1) {
		$('.menu_comunicacion').empty();
	}
	//$('.contenido-comunicacion').empty(); 
	if(comunicacion_s != 1) {
		crearMenuComunicacion(".representantes","?json=get_category_index&parent=4");
		crearMenuComunicacionb(".poderes","?json=get_posts&post_type=poderes");
		crearMenuComunicacionc(".leyes","?json=get_posts&post_type=leyes");
		crearMenuComunicaciond(".partidos","?json=get_posts&post_type=partidos");
	}
	$('.representantes .col-lis a').on("tap", function(e) {
			e.preventDefault();
			$.mobile.loading('show');
			//alert("mas");
			var cantidad = $(this).attr('data-cantidad');
			var cat_id = $(this).attr('data-categoria-id');
			var descrip = $(this).attr('data-descripcion');
			if(cantidad == 1) {
				var a = obtenerPost(cat_id,".contenido-comunicacion",descrip);
				var cantidad = 0;
				var cat_id = 0;
			}
			else {
				var a = obtenerPosts(cat_id,".contenido-comunicacion",descrip);
				var cantidad = 0;
				var cat_id = 0;
			}
	})
	$('.buscar').on("tap",function() {
		if($('.ui-input-search').hasClass('mostrar-buscar')) {
			$('.ui-input-search').removeClass('mostrar-buscar');
		}
		else {
			$('.ui-input-search').addClass('mostrar-buscar');
		}
	})
	$('.fila-listado a').live("tap",function(e) {
		e.preventDefault();
		var candidatourl = $(this).attr('href');
		if(candidatourl != '') {
			window.open(candidatourl, '_blank', 'location=yes,closebuttoncaption=Cerrar ventana');
		}
		else {
			navigator.notification.alert(
				'Lo sentimos, con contamos con esa información del candidato!',  // mensaje
				alertDismissed,         // callback
				'Ciudadania',            // titulo
				'Ok'                  // Nombre del boton
			);
		}
	});
	$('.poderes a').live("tap", function(e) {
			e.preventDefault();
			$.mobile.loading('show');
			//alert("mas");
			var valor = $(this).attr('href');
			var a = obtenerContenidoYoutube(valor,".contenido-comunicacion");
	}) 
	$('.leyes a').live("tap", function(e) {
			e.preventDefault();
			$.mobile.loading('show');
			//alert("mas");
			var valor = $(this).attr('href');
			var a = obtenerContenidoLeyes(valor,".contenido-comunicacion");
	})
	$('.partidos a').live("tap", function(e) {
			e.preventDefault();
			$.mobile.loading('show');
			//alert("mas");
			var valor = $(this).attr('href');
			var a = obtenerContenidoYoutube(valor,".contenido-comunicacion");
	})
});

//Script que se ejecutara cuando se acceda a la page #equidad	
$("#equidad").on("pageshow",function(e) {
	$('.menu_equidad').empty(); 
	crearMenu(".menu_equidad","api/get_posts/?post_type=equidad");
	$('.menu_equidad a').live("tap", function(e) {
			e.preventDefault();
			$.mobile.loading('show');
			var valor = $(this).attr('href');
			//alert(valor);
			var a = obtenerContenido(valor,".contenido-equidad");
	}) 
});

//Script que se ejecutara cuando se acceda a la page #somos	
$("#somos").on("pageshow",function(e) {
	$('.menu_somos').empty();
	crearMenu(".menu_somos","api/get_posts/?post_type=somos");
	$('.menu_somos a').live("tap", function(e) {
			e.preventDefault();
			$.mobile.loading('show');
			//alert("mas");
			var valor = $(this).attr('href');
			var a = obtenerContenido(valor,".contenido-somos");
	}) 
	
});

//Script que se ejecutara cuando se acceda a la page #participacion
$("#participacion").on("pageshow",function(e) {
	$('.menu_participacion').empty();
	crearMenu(".menu_participacion","api/get_posts/?post_type=participacion");
	$('.menu_participacion a').live("tap", function(e) {
			e.preventDefault();
			$.mobile.loading('show');
			//alert("mas");
			var valor = $(this).attr('href');
			var a = obtenerContenido(valor,".contenido-participacion");
	})
	 
});
//Script que se ejecutara cuando se acceda a la page #ciudadano	
$("#ciudadano").on("pageshow",function(e) {
	$('.menu_ciudadano').empty();
	crearMenu(".menu_ciudadano","api/get_posts/?post_type=ciudadano");
	$('.menu_ciudadano a').live("tap", function(e) {
			e.preventDefault();
			$.mobile.loading('show');
			//alert("mas");
			var valor = $(this).attr('href');
			var a = obtenerContenidoTwitter(valor,".contenido-ciudadano");
	}) 
	
});