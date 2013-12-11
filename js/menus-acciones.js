var accesado_creditos = 0;
var accesado_bibliografia = 0;

/******************* PORTADA *****************/
$("#home").on("pageshow",function(e) {
	$('.camera_wrap').empty();
	insertarGaleria();
	$('.zoomContainer').remove();
	$("#fuente img").attr("src",'img/invisible.png');
});
$( '#comunicacion' ).live( 'pagebeforeshow',function(event){
	setTimeout(function(){
		$.mobile.loading('show');
	},1);
});

/******************* COMUNICACIÓN CON REPRESENTANTES *****************/
$("#comunicacion").on("pageshow",function(e) {
	$(".contenido-comunicacion").removeClass("gris-oscuro");
	$("#elegir-estado").addClass("ocultar-lista");
	$(function() {
		$("#estado").on('change',function() {
			miestado = $("select option:selected" ).val();
			var descrip = $(this).attr('data-descripcion');
			camaraLocal(miestado,".contenido-comunicacion","Tus diputados locales");	
		});
	})
	if(comunicacion_s != 1) {
		$('.menu_comunicacion').empty();
	}
	if(comunicacion_s != 1) {
		crearMenuComunicacion(".representantes","?json=get_category_index&parent=4");
		crearMenuComunicacionb(".poderes","?json=get_posts&post_type=poderes");
		crearMenuComunicacionc(".leyes","?json=get_posts&post_type=leyes");
		crearMenuComunicaciond(".partidos","?json=get_posts&post_type=partidos");
	}
	primerEntrada(".contenido-comunicacion","api/get_post/?id=120",1,1);
	setTimeout(function(){
		$.mobile.loading('hide');
	},1);
	$('.representantes .col-lis a').live("tap", function(e) {
			$("#elegir-estado").addClass("ocultar-lista");
			e.preventDefault();
			$.mobile.loading('show');
			//alert("mas");
			$(".contenido-comunicacion").removeClass("gris-oscuro");
			$("#mexico").addClass("ocultar-mapa-mexico");
			var cantidad = $(this).attr('data-cantidad');
			var cat_id = $(this).attr('data-categoria-id');
			var descrip = $(this).attr('data-descripcion');
			var camara_local = $(this).attr('data-local');
			if(cantidad == 1 && camara_local != 1) {
				var a = obtenerPost(cat_id,".contenido-comunicacion",descrip);
				var cantidad = 0;
				var cat_id = 0;
			}
			else if(cantidad == "-1") {
				Post(cat_id,".contenido-comunicacion",descrip);
			}
			else if(camara_local == 1) {
				
				camaraLocal("jalisco",".contenido-comunicacion",descrip);
				$("#elegir-estado").removeClass("ocultar-lista");
				$("#estado").html(estados_select).selectmenu("refresh");
				
			}
			else {
				$(".contenido-comunicacion").empty();
				var a = obtenerPosts(cat_id,".contenido-comunicacion",descrip);
				var cantidad = 0;
				var cat_id = 0;
			}
	})
	
	$('.buscar').live("tap",function(e) {
		e.preventDefault();
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
		var sicorreo  = ($(this).hasClass("envio_correo")) ? 1:0;
		if(candidatourl != '' && sicorreo == 0) {
			window.open(candidatourl, '_blank', 'location=yes,closebuttoncaption=Cerrar ventana');
		}
		else if(candidatourl != '' && sicorreo == 1) {
			e.preventDefault();
			navigator.notification.alert(
				candidatourl,  // mensaje
				alertDismissed,         // callback
				'Ciudadania',            // titulo
				'Ok'                  // Nombre del boton
			);
		}
		else {
			/*navigator.notification.alert(
				'Lo sentimos, no contamos con esa información del candidato!',  // mensaje
				alertDismissed,         // callback
				'Ciudadania',            // titulo
				'Ok'                  // Nombre del boton
			);*/
		}
	});
	$('.poderes a').live("tap", function(e) {
			$("#elegir-estado").addClass("ocultar-lista");
			e.preventDefault();
			$.mobile.loading('show');
			//alert("mas");
			var valor = $(this).attr('href');
			$(".contenido-comunicacion").addClass("gris-oscuro");
			$("#mexico").addClass("ocultar-mapa-mexico");
			var a = obtenerContenidoYoutube(valor,".contenido-comunicacion");
	}) 
	$('.leyes a').live("tap", function(e) {
			$("#elegir-estado").addClass("ocultar-lista");
			e.preventDefault();
			$.mobile.loading('show');
			var valor = $(this).attr('href');
			$(".contenido-comunicacion").removeClass("gris-oscuro");
			$("#mexico").addClass("ocultar-mapa-mexico");
			var a = obtenerContenidoLeyes(valor,".contenido-comunicacion");
	})
	$('.partidos a').live("tap", function(e) {
			$("#elegir-estado").addClass("ocultar-lista");
			e.preventDefault();
			$.mobile.loading('show');
			var valor = $(this).attr('href');
			$(".contenido-comunicacion").addClass("gris-oscuro");
			$("#mexico").addClass("ocultar-mapa-mexico");
			var a = obtenerContenidoYoutube(valor,".contenido-comunicacion");
	})
	$('.camera_wrap').empty();
	$('.zoomContainer').remove();
	$('.contenido-comunicacion a').live("tap", function(e) {
		e.preventDefault();
		var url_abrir = $(this).attr('href');
		if(url_abrir != '' && sicorreo == 0) {
			window.open(url_abrir, '_blank', 'location=yes,closebuttoncaption=Cerrar ventana');
		}
	}) 
	$('.contenido-comunicacion area').live("tap", function(e) {
		e.preventDefault();
		var url_abrir = $(this).attr('href');
		if(url_abrir != '') {
			window.open(url_abrir, '_blank', 'location=yes,closebuttoncaption=Cerrar ventana');
		}
	}) 
	$('.ui-collapsible-content li.col-lis').live("tap", function() {
		$('.ui-collapsible-content').find("li.col-lis").each(function(index) {
			$(this).removeClass('ui-btn-active');
		})
		$(this).addClass("ui-btn-active");
	})
	$('.representantes li div div a').live("tap", function(e) {
		fuente(4687);
	})
	$('.poderes a').live("tap", function(e) {
		fuente(4688);
	})
	$('.leyes a').live("tap", function(e) {
		fuente(4689);
	})
	$('.partidos a').live("tap", function(e) {
		fuente(4690);
	})
});

/******************* EQUIDAD *****************/
$("#equidad").on("pageshow",function(e) {
	$('.menu_equidad').empty(); 
	crearMenu(".menu_equidad","api/get_posts/?post_type=equidad");
	primerEntrada(".contenido-equidad","api/get_posts/?post_type=equidad&count=1");
	$('.menu_equidad a').live("tap", function(e) {
			e.preventDefault();
			$.mobile.loading('show');
			var valor = $(this).attr('href');
			var a = obtenerContenido(valor,".contenido-equidad");
	})
	fuente(4691);
	$('.menu_equidad li').live("tap", function(e) {
		e.preventDefault();
		$(".menu_equidad").find("li").each(function(index) {
			$(this).removeClass('ui-btn-active');
		})
		$(this).addClass("ui-btn-active");
	})
});

/******************* SOMOS *****************/
$("#somos").on("pageshow",function(e) {
	$('.menu_somos').empty();
	crearMenu(".menu_somos","api/get_posts/?post_type=somos");
	primerEntrada(".contenido-somos","api/get_posts/?post_type=somos&count=1");
	$('.menu_somos a').live("tap", function(e) {
			e.preventDefault();
			$.mobile.loading('show');
			var valor = $(this).attr('href');
			var a = obtenerContenido(valor,".contenido-somos");
	}) 
	fuente(4692);
	$('.menu_somos li').live("tap", function(e) {
		e.preventDefault();
		$(".menu_somos").find("li").each(function(index) {
			$(this).removeClass('ui-btn-active');
		})
		$(this).addClass("ui-btn-active");
	})
});

/******************* PARTICIPACIÓN *****************/
$("#participacion").on("pageshow",function(e) {
	$('.menu_participacion').empty();
	crearMenu(".menu_participacion","api/get_posts/?post_type=participacion");
	obtenerPrimerParticipacion(".contenido-participacion","api/get_posts/?post_type=participacion&count=1");
	$('.menu_participacion a').live("tap", function(e) {
			e.preventDefault();
			$.mobile.loading('show');
			var valor = $(this).attr('href');
			var a = obtenerContenidoParticipacion(valor,".contenido-participacion");
	})
	$('.tabla-participacion a').live("tap", function(e) {
			e.preventDefault();
			var pagina_destino = $(this).attr('href');
			if(pagina_destino != '') {
				window.open(pagina_destino, '_blank', 'location=yes,closebuttoncaption=Cerrar ventana');
			}
			else {
				navigator.notification.alert(
					'No logramos cargar el contenido',  // mensaje
					alertDismissed,         // callback
					'Ciudadania',            // titulo
					'Ok'                  // Nombre del boton
				);
			}
	}) 
	//Cargamos el tipo de fuente de información de esta sección
	fuente(4693);
	$('.menu_participacion li').live("tap", function(e) {
		e.preventDefault();
		$(".menu_participacion").find("li").each(function(index) {
			$(this).removeClass('ui-btn-active');
		})
		$(this).addClass("ui-btn-active");
	})
	 $('.zoomContainer').remove();
});
/******************* EL CIUDADANO EN LAS REDES SOCIALES *****************/
$("#ciudadano").on("pageshow",function(e) {
	$('.menu_ciudadano').empty();
	crearMenuCiudadano("#ciudadanos","api/get_posts/?post_type=ciudadano");
	$('#ciudadanos a').live("tap", function(e) {
			e.preventDefault();
			var urltwitter = $(this).attr('href');
			if(urltwitter != '') {
				window.open(urltwitter, '_blank', 'location=yes,closebuttoncaption=Cerrar ventana');
			}
			else {
				navigator.notification.alert(
					'No logramos cargar el contenido',  // mensaje
					alertDismissed,         // callback
					'Ciudadania',            // titulo
					'Ok'                  // Nombre del boton
				);
			}
	}) 
	fuente(4694);
	$('.zoomContainer').remove();
});
/******************* CREDITOS *****************/
$("#creditos").on("pageshow",function(e) {
	$('.camera_wrap').empty();
	$.mobile.loading('show');
   URLS = servidor_w + "page&id=327";
	   jQuery.ajax({
		   url: URLS,
		   dataType: 'json',
		   success: function(data) {
				$("#creditos .detalle-creditos").html(data.post.content);
			   $.mobile.loading('hide');
			},//SUCCESS
			error: function() {
				navigator.notification.alert(
					'No se logro cargar los contenidos!',  // mensaje
					alertDismissed,         // callback
					'Ciudadania',            // titulo
					'Ok'                  // Nombre del boton
				);	
			}//ERROR
	   });//AJAX	
	fuente(4697);
	$('.zoomContainer').remove();
});

/******************* REFERENCIAS *****************/
$("#referencias").on("pageshow",function(e) {
	$('.camera_wrap').empty();
	$.mobile.loading('show');
   URLS = servidor_w + "page&id=325";
	   jQuery.ajax({
		   url: URLS,
		   dataType: 'json',
		   success: function(data) {
				$("#referencias .referencias").html(data.post.content);
			   $.mobile.loading('hide');
			},//SUCCESS
			error: function() {
				navigator.notification.alert(
					'No se logro cargar los contenidos!',  // mensaje
					alertDismissed,         // callback
					'Ciudadania',            // titulo
					'Ok'                  // Nombre del boton
				);	
			}//ERROR
	   });//AJAX	
	$('.contenedor-referencias a').live("tap", function(e) {
			e.preventDefault();
			var url_ref = $(this).attr('href');
			if(url_ref != '') {
				window.open(url_ref, '_blank', 'location=yes,closebuttoncaption=Cerrar ventana');
			}
			else {
				
			}
	})
	fuente(4698);
	$('.zoomContainer').remove();
});

/******************* PRIVACIDAD *****************/
$("#privacidad").on("pageshow",function(e) {
	$('.camera_wrap').empty();
	$.mobile.loading('show');
	$('#privacidad .referencias a').live("tap", function(e) {
			e.preventDefault();
			var destinatario = $(this).attr("href");	
			//window.plugins.emailComposer.showEmailComposer("Contacto",null,destinatario,null,null,true,false);
			function showEmailComposer() {
                cordova.require('emailcomposer.EmailComposer').show({
                    to: 'to@example.com',
                    cc: 'cc@example.com',
                    bcc: 'bcc@example.com',
                    subject: 'Example email message',
                    body: '<h1>Hello, world!</h1>',
                    isHtml: true,
                    attachments: [
                        // attach a HTML file using a UTF-8 encoded string
                        {
                            mimeType: 'text/html',
                            encoding: 'UTF-8',
                            data: '<html><body><h1>Hello, World!</h1></body></html>',
                            name: 'demo.html'
                        },
                        // attach a base-64 encoding of http://incubator.apache.org/cordova/images/cordova_128.png
                        {
                            mimeType: 'image/png',
                            encoding: 'Base64',
                            data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB1WlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS4xLjIiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOkNvbXByZXNzaW9uPjE8L3RpZmY6Q29tcHJlc3Npb24+CiAgICAgICAgIDx0aWZmOlBob3RvbWV0cmljSW50ZXJwcmV0YXRpb24+MjwvdGlmZjpQaG90b21ldHJpY0ludGVycHJldGF0aW9uPgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4K5JKPKQAAAtpJREFUOBFNU0toE1EUPTOZTJI2qbG0qUnwg1IFtSBI967cCBHcSsGFgktdC125EvwVLKi0FApaCChuRMSFqAitCNrGJE1DadpSYz5OvpPJ5Od5007xwc1998475513743U6/Uk7K1Op6O0Wq2pdrvt597odrugh/A0hcdk+luhUKhgY0Ryf5HsmizLNz0eN9qtNvRGA8xBdTohyxJjQ8TrBEzaIOk/BQNk3+YHL1WAKiyguL1Wr1tK3C6XteeZ01SRFCSy+Nlb07zdG0umcPvOXTyde8lbZbjcbjyYnsG5CxG8fvsBBJKs+8wG2QouMvFOJB9Mz+JnLA6P24UBnxcNo4nk2jpiiVWEQ2G8j87ApSqo643rgUBg1lJgGMaUAK/EkyhVaxg7eQLhoUEoThX9JBk54MVh/wDSm1uYj75Bv9eHRqNxL5PJTFpF1DRN8fX3oVKp4GhwGB6/H50eoO3sIBgYRpdvr/v8cCeS8KgOFHNZZLNZlfVTLQWKoixDkuElyeLXJdT7vGiHw/j+7QdezC9gCw6MX76Ezx+/QJYkVKiShU6y0MuWAjKlzJYJp+JAIZdDJl+AT3ZgM7OJYqGA4Jkx/C5X4XEpvMSDaq0K0zRTAmcRkCnZZutEm4p6A3MPn8Ahel/SoJstbEVf4dNCFIPBQ/ByRqpU0Gw2UyzbhkVAOSkywuGQMT5+HgOsuEtRIJ06jl63B4nqmuzGwZEAnE7FIhCYSCRSsggIXmcnxLtw4+oViNluc4Q7HCbbi4ES34tayRoyHknTdgdpdHQ0S4KcUJBKrdXuP3q8XGZH/uTzyOXyKJXLeD4zF1uJr2ZFnfh26Lq+sU8gSZJaLpfTBmWyQLWlxaWczlpoWskk2GzyefH4r7+JRGKHZ4WS9MTEREUQWJPIpJv7Y7SztCM0EYvV3XX7I28w3qbFaBtUotsEKhN+2hCtjybmwwZzay07pzMSf+cSCcx/K8WXLZEV/swAAAAASUVORK5CYII=',
                            name: 'cordova.png'
                        },
                        // attach a file using a hypothetical file path
                        //,{ filePath: './path/to/your-file.jpg' }
                    ],
                    onSuccess: function (winParam) {
                        console.log('EmailComposer onSuccess - return code ' + winParam.toString());
                    },
                    onError: function (error) {
                        console.log('EmailComposer onError - ' + error.toString());
                    }
               });            
            };
			showEmailComposer();
	})
   URLS = servidor_w + "page&id=2387";
	   jQuery.ajax({
		   url: URLS,
		   dataType: 'json',
		   success: function(data) {
				$("#privacidad .referencias").html(data.post.content);
			   $.mobile.loading('hide');
			},//SUCCESS
			error: function() {
				navigator.notification.alert(
					'No se logro cargar los contenidos!',  // mensaje
					alertDismissed,         // callback
					'Ciudadania',            // titulo
					'Ok'                  // Nombre del boton
				);	
			}//ERROR
	   });//AJAX
	fuente(4696);	
	$('.zoomContainer').remove();
});

/******************* DECLARACIONES *****************/
$("#declaraciones").on("pageshow",function(e) {
	$('.camera_wrap').empty();
	$.mobile.loading('show');
   URLS = servidor_w + "page&id=2393";
	   jQuery.ajax({
		   url: URLS,
		   dataType: 'json',
		   success: function(data) {
				$("#declaraciones .referencias").html(data.post.content);
			   $.mobile.loading('hide');
			},//SUCCESS
			error: function() {
				navigator.notification.alert(
					'No se logro cargar los contenidos!',  // mensaje
					alertDismissed,         // callback
					'Ciudadania',            // titulo
					'Ok'                  // Nombre del boton
				);	
			}//ERROR
	   });//AJAX
	fuente(4695);	
	$('.zoomContainer').remove();
});

/******************* CONTENIDO *****************/
$("#contenido").on("pageshow",function(e) {
	$('.camera_wrap').empty();
	$.mobile.loading('show');
   URLS = servidor_w + "page&id=2391";
	   jQuery.ajax({
		   url: URLS,
		   dataType: 'json',
		   success: function(data) {
				$("#contenido .descripcion").html(data.post.content);
			   $.mobile.loading('hide');
			},//SUCCESS
			error: function() {
				navigator.notification.alert(
					'No se logro cargar los contenidos!',  // mensaje
					alertDismissed,         // callback
					'Ciudadania',            // titulo
					'Ok'                  // Nombre del boton
				);	
			}//ERROR
	   });//AJAX	
	fuente(4699);
	$('.zoomContainer').remove();
});
