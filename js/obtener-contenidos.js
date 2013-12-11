/*
******** Esta funcion recibe la url y la clase del contenedor de los links de las secciones 
******** para despues mostrarlos en el contendor que le corresponde dependiendo se su sección
*/
function obtenerContenido (url,target_div) {
	   var URL = url;
	   var valora = "";
	   var contenedor = target_div
	   jQuery.ajax({
		   url: URL,
		   dataType: 'json',
		   success: function(data2) {
			  if(data2.content != "") {
				  $(contenedor).empty();
				  $(contenedor).append(data2.post.content);
				  $("#zoom_01").elevateZoom({
					  zoomType: "inner",
					  cursor: "crosshair",
					  lensSize    : 200
					});			  
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}
function obtenerContenidoParticipacion (url,target_div) {
	   var URL = url;
	   var valora = "";
	   var contenedor = target_div
	   jQuery.ajax({
		   url: URL,
		   dataType: 'json',
		   success: function(data2) {
			  if(data2.content != "") {
				  $(contenedor).empty();
				  participacion = '<table class="tabla-participacion"> \
							<tr><td class="participacion-portada"><img src="' + data2.post.thumbnail +'"></td><td class="participacion-texto"> \
								'+ data2.post.content +'</td></tr> \
							<tr><td class="participacion-mapa"><a href="'+ data2.post.custom_fields.maps  +'"><img src="img/mapaf.jpg"></a></td><td class="participacion-texto participacion-redes"><span class="participacion-verde">Datos de contacto</span><br/>'+ data2.post.custom_fields.direccion +'<br/><a href="'+ data2.post.custom_fields.web +'">'+data2.post.custom_fields.web+'</a><br/><br/><a href="'+ data2.post.custom_fields.twitterp  +'"><img src="img/participacion-twitter.png"></a><a href="'+ data2.post.custom_fields.facebookp  +'"><img src="img/participacion-facebook.png"></a></td></tr> \
							<tr><td colspan="2"  class="participacion-texto participacion-iniciativas"><span class="participacion-verde">Iniciativas y proyectos</span>'+ data2.post.custom_fields.iniciativas +'</td></tr> \
						</table> \ ';
				  $(contenedor).append(participacion);		  
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}

function obtenerPrimerParticipacion (target_div,url) {
	   var URL = servidor_l + url;
	   var valora = "";
	   var contenedor = target_div
	   jQuery.ajax({
		   url: URL,
		   dataType: 'json',
		   success: function(data2) {
			  if(data2.posts[0].content != "") {
				  $(contenedor).empty();
				  participacion = '<table class="tabla-participacion"> \
							<tr><td class="participacion-portada"><img src="' + data2.posts[0].thumbnail +'"></td><td class="participacion-texto"> \
								'+ data2.posts[0].content +'</td></tr> \
							<tr><td class="participacion-mapa"><a href="'+ data2.posts[0].custom_fields.maps  +'"><img src="img/mapaf.jpg"></a></td><td class="participacion-texto participacion-redes"><span class="participacion-verde">Datos de contacto</span><br/>'+ data2.posts[0].custom_fields.direccion +'<br/><a href="'+ data2.posts[0].custom_fields.web +'">'+data2.posts[0].custom_fields.web+'</a><br/><br/><a href="'+ data2.posts[0].custom_fields.twitterp  +'"><img src="img/participacion-twitter.png"></a><a href="'+ data2.posts[0].custom_fields.facebookp  +'"><img src="img/participacion-facebook.png"></a></td></tr> \
							<tr><td colspan="2"  class="participacion-texto participacion-iniciativas"><span class="participacion-verde">Iniciativas y proyectos</span>'+ data2.posts[0].custom_fields.iniciativas +'</td></tr> \
						</table> \ ';
				  $(contenedor).append(participacion);		  
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}
/*
******** Esta funcion recibe la cantidad de post en la categoria y la categoria
******** para despues mostrarlos en el contendor que le corresponde dependiendo se su sección
*/
function Post (id,target_div,descr) {
	   var ID = id;
	   var valora = "";
	   var contenedor = target_div
	   jQuery.ajax({
		   url: obtener_post + ID,
		   dataType: 'json',
		   success: function(informacion) {
			  if(informacion.post.content != "") {
				  $(contenedor).empty();
				  $(contenedor).append('<div id="list-titulo" class="post">'+ descr +'</div>');
				  $(contenedor).append(informacion.post.content);				  
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}
function obtenerPost (id,target_div,descr,sin_titulo) {
	   var ID = id;
	   var valora = "";
	   var contenedor = target_div
	   jQuery.ajax({
		   url: post_categoria + ID,
		   dataType: 'json',
		   success: function(informacion) {
			  if(informacion.posts[0].content != "") {
				  $(contenedor).empty();
				  if(sin_titulo == 1) {
				  	$(contenedor).append('<div id="list-titulo" class="post">'+ descr +'</div>');
				  }
				  $(contenedor).append(informacion.posts[0].content);				  
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}

/*
******** Esta funcion recibe la cantidad de post en la categoria y la categoria
******** para despues mostrarlos en el contendor que le corresponde dependiendo se su sección
*/
var informacion_posts;
function obtenerPosts (id,target_div,descr) {
	   informacion_posts = "";
	   var ID = id;
	   var contenedor = target_div
	   jQuery.ajax({
		   url: posts_categoria + ID,
		   dataType: 'json',
		   success: function(informacion) {
			  if(informacion.count != "" || informacion.count != 0) {
				  $(contenedor).empty();
				  informacion_posts = '<div class="scroller"><br/><br/><div id="list-titulo">'+ descr +'<div class="buscar"><img src="img/buscar.png" class="imagen-buscar"></div></div><ul class="listado-representantes" id="scrollrep"  data-filter="true" data-role="listview" data-filter-placeholder="Buscar por Nombre, Partido Político o Entidad Federativa" data-theme="c">';
				  var portada;
				  var partido;
				  var estado;
				  
				  for(var i=0; i<informacion.count; i++) {
					    if(informacion.posts[i].custom_fields.web == "")
								web = '<img src="img/web.png" class="opacidad" />';
							else
								web = '<img src="img/web.png"/>';
						if(informacion.posts[i].custom_fields.correo == "")
								correo = '<img src="img/correo.png" class="opacidad" />';
							else
								correo = '<img src="img/correo.png" />';
						if(informacion.posts[i].custom_fields.facebook == "")
								facebook = '<img src="img/facebook.png" class="opacidad" />';
							else
								facebook = '<img src="img/facebook.png" />';
						if(informacion.posts[i].custom_fields.twitter == "")
								twitter = '<img src="img/twitter.png" class="opacidad" />';
							else
								twitter = '<img src="img/twitter.png" />';
						if(informacion.posts[i].custom_fields.youtube == "")
								youtube = '<img src="img/youtube.png" class="opacidad" />';
							else
								youtube = '<img src="img/youtube.png" />';
					  	portada = '<img src="img/sinfoto.png" />';
						partido = '<img src="img/partido.png" />';
						estado = '<img src="img/estados/lista_nacional.png" />';
						if(informacion.posts[i].thumbnail != '' && informacion.posts[i].thumbnail) {
							//portada = '<img src="' + informacion.posts[i].thumbnail +'" />';
							portada = '<img src="' + informacion.posts[i].thumbnail_images.thumbnail.url +'" />';
						}
						if(informacion.posts[i].custom_fields.partido != '') {
							partido = partidos(informacion.posts[i].custom_fields.partido);
						}
						if(informacion.posts[i].custom_fields.estado != '') {
							estado = estados(informacion.posts[i].custom_fields.estado);
							//estado = '<img src="' + informacion.posts[i].thumbnail +'" />';
						}
						informacion_posts += '<li class="listados fila-listado" data-filtertext="'+ informacion.posts[i].custom_fields.estado + ' ' + informacion.posts[i].custom_fields.partido + ' '  + informacion.posts[i].title +'"><div class="listado-personas"><div class="foto">'+ portada + '</div><div class="partido">' + partido + '</div><div class="nombre"><div class="nombre-candidato">' + informacion.posts[i].title +'</div></div><div class="estado">'+ estado +'</div><div class="web"><a href="' + informacion.posts[i].custom_fields.web +'">' + web + '</a>' + '</div><div class="correo"><a href="' + informacion.posts[i].custom_fields.correo +'" class="envio_correo">' + correo + '</a>' + '</div><div class="facebook"><a href="' + informacion.posts[i].custom_fields.facebook +'">' + facebook + '</a>' + '</div><div class="twitter"><a href="' + informacion.posts[i].custom_fields.twitter +'">' + twitter + '</a>' + '</div><div class="youtube"><a href="' + informacion.posts[i].custom_fields.youtube +'">' + youtube + '</a>' + '</div></div></li>';
					}//FOR
					informacion_posts += "</ul></div>";
				   $(contenedor).append(informacion_posts); 
				   $('.listado-representantes').listview().listview('refresh');
				   $.mobile.loading('hide');
					//onCompletion2();
					//setTimeout(function () {
						//scrollContent.refresh();
					//}, 0);
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}

function obtenerPost (id,target_div,descr) {
	   var ID = id;
	   var valora = "";
	   var contenedor = target_div
	   jQuery.ajax({
		   url: post_categoria + ID,
		   dataType: 'json',
		   success: function(informacion) {
			  if(informacion.posts[0].content != "") {
				  $(contenedor).empty();
				  $(contenedor).append('<div id="list-titulo" class="post">'+ descr +'</div>');
				  $(contenedor).append(informacion.posts[0].content);				  
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}

/*
******** Esta funcion recibe el nombre de la categoria, el contenedor y la descripción de la misma
******** para despues mostrarlos en el contendor que le corresponde dependiendo se su sección
*/
function camaraLocal (id,target_div,descr) {
	   if(descr == "") {
		   descr = "Tus diputados locales";
	   }
	   informacion_posts = "";
	   var ID = id;
	   var contenedor = target_div
	   jQuery.ajax({
		   url: camara_local + ID,
		   dataType: 'json',
		   success: function(informacion) {
			  if(informacion.count != "" || informacion.count != 0) {
				  $(contenedor).empty();
				  informacion_posts = '<br/><br/><div id="list-titulo">'+ descr +'<div class="buscar"><img src="img/buscar.png" class="imagen-buscar"></div></div><ul class="listado-representantes"  data-filter="true" data-role="listview" data-filter-placeholder="Buscar por Nombre o Partido Político" data-theme="c">';
				  var portada;
				  var partido;
				  var estado;
				  
				  for(var i=0; i<informacion.count; i++) {
					  	if(informacion.posts[i].custom_fields.web == "")
								web = '<img src="img/web.png" class="opacidad" />';
							else
								web = '<img src="img/web.png"/>';
						if(informacion.posts[i].custom_fields.correo == "")
								correo = '<img src="img/correo.png" class="opacidad" />';
							else
								correo = '<img src="img/correo.png" />';
						if(informacion.posts[i].custom_fields.facebook == "")
								facebook = '<img src="img/facebook.png" class="opacidad" />';
							else
								facebook = '<img src="img/facebook.png" />';
						if(informacion.posts[i].custom_fields.twitter == "")
								twitter = '<img src="img/twitter.png" class="opacidad" />';
							else
								twitter = '<img src="img/twitter.png" />';
						if(informacion.posts[i].custom_fields.youtube == "")
								youtube = '<img src="img/youtube.png" class="opacidad" />';
							else
								youtube = '<img src="img/youtube.png" />';
					  	portada = '<img src="img/sinfoto.png" />';
						partido = '<img src="img/partido.png" />';
						estado = '<img src="img/estados/estado.png" />';
						if(informacion.posts[i].thumbnail != '' && informacion.posts[i].thumbnail) {
							//portada = '<img src="' + informacion.posts[i].thumbnail +'" />';
							portada = '<img src="' + informacion.posts[i].thumbnail_images.thumbnail.url +'" />';
						}
						if(informacion.posts[i].custom_fields.partido != '') {
							partido = partidos(informacion.posts[i].custom_fields.partido);
						}
						if(informacion.posts[i].custom_fields.estado != '') {
							estado = estados(informacion.posts[i].custom_fields.estado);
							//estado = '<img src="' + informacion.posts[i].thumbnail +'" />';
						}
						informacion_posts += '<li class="listados fila-listado" data-filtertext="'+ informacion.posts[i].custom_fields.estado + ' ' + informacion.posts[i].custom_fields.partido + ' '  + informacion.posts[i].title +'"><div class="listado-personas"><div class="foto">'+ portada + '</div><div class="partido">' + partido + '</div><div class="nombre">' + informacion.posts[i].title +'</div><div class="estado">'+ estado +'</div><div class="web"><a href="' + informacion.posts[i].custom_fields.web +'">' + web + '</a>' + '</div><div class="correo"><a href="' + informacion.posts[i].custom_fields.correo +'" class="envio_correo">' + correo + '</a>' + '</div><div class="facebook"><a href="' + informacion.posts[i].custom_fields.facebook +'">' + facebook + '</a>' + '</div><div class="twitter"><a href="' + informacion.posts[i].custom_fields.twitter +'">' + twitter + '</a>' + '</div><div class="youtube"><a href="' + informacion.posts[i].custom_fields.youtube +'">' + youtube + '</a>' + '</div></div></li>';
					}//FOR
					informacion_posts += "</ul>";
				   $(contenedor).append(informacion_posts); 
				   $('.listado-representantes').listview().listview('refresh');
				   $.mobile.loading('hide');
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}

/*
******** Esta funcion recibe la url y la clase del contenedor de los links de las secciones 
******** para despues mostrarlos en el contendor que le corresponde dependiendo se su sección
*/
function obtenerContenidoYoutube (url,target_div) {
	   var URL = url;
	   var valora = "";
	   var contenedor = target_div
	   jQuery.ajax({
		   url: URL,
		   dataType: 'json',
		   success: function(data2) {
			  if(data2.content != "") {
				  $(contenedor).empty();
				  if(data2.post.custom_fields.video != '') {
				  	$(contenedor).append(data2.post.custom_fields.video);
				  }
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}

/*
******** Esta funcion recibe la url y la clase del contenedor de los links de la seccion leyes 
******** para despues mostrar las leyes en un iframe dentro del contenedor de comunicación
*/
function obtenerContenidoLeyes (url,target_div) {
	   var URL = url;
	   var valora = "";
	   var contenedor = target_div
	   jQuery.ajax({
		   url: URL,
		   dataType: 'json',
		   async:false,
		   success: function(data2) {
			  if(data2.content != "") {
				  var proceso;
				  $(contenedor).empty();
				  if(data2.post.custom_fields.ley != '') {
					  if(data2.post.title == 'En proceso') {
						  proceso = 1;
						  $(contenedor).append('<iframe src="' + data2.post.custom_fields.ley + '" frameborder="0" width="700px" height="840px" style="margin-left:20px; margin-top:-140px; position:relative;" scrolling="no" class="iframe2"></iframe>');
					  }
					  else {
					  	$(contenedor).append('<iframe src="' + data2.post.custom_fields.ley + '" frameborder="0" width="800px" height="600px" style="margin-left:-357px; margin-top:-184px; position:relative;" scrolling="yes" class="iframe"></iframe>');
					  }
					  //Esperamos a que se cargue el contenido del iframe y deshabilitamos los links
					  //para evitar que el usuario cargue algo que no. Ademas agregamos una separación
					  //a la tabla que tiene el listado de leyes
					  $("iframe").load(function() {
							$(".iframe").contents().find("a").each(function(index) {
								$(this).on("click", function(event) {
									event.preventDefault();
									event.stopPropagation();
									var pagina = 'http://www.diputados.gob.mx/LeyesBiblio/' + $(this).attr('href');
									window.open(pagina, '_blank', 'location=yes,closebuttoncaption=Cerrar ventana');
								});
							});
							$(".iframe2").contents().find("a").each(function(index) {
								$(this).on("click", function(event) {
									event.preventDefault();
									event.stopPropagation();
									var pagina = 'http://gaceta.diputados.gob.mx/' + $(this).attr('href');
									window.open(pagina, '_blank', 'location=yes,closebuttoncaption=Cerrar ventana');
								});
							});
							
							if(proceso == 1) {
								$(".iframe2").contents().find(".Container").css({
									"margin-top":'80px',
									"width":"600px",
									"height":"650px"
								})
							}
							else {
								$(".iframe").contents().find("table").each(function(index) {
									var ancho = $(this).attr("width")
									if(ancho == "752") {
										$(this).css({
											'padding-top':'30px',
											'font-size':function() {
												return parseInt($(this).css('font-size')) + 10 + 'px';
											}
										});
									}
								})
							}
						});   
				  }
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}

/*
******** Esta funcion recibe la url y la clase del contenedor de los links de la seccion ciudadano 
******** para despues mostrarlos en el contendor que le corresponde
*/
function obtenerContenidoTwitter (url,target_div) {
	   var URL = url;
	   var valora = "";
	   var contenedor = target_div
	   jQuery.ajax({
		   url: URL,
		   async:false,
		   dataType: 'json',
		   success: function(data2) {
			   //alert(data2.post.custom_fields.twitter);
			  if(data2.post.custom_fields.twitter != "") {
				  $(contenedor).empty();
				  $(contenedor).append(data2.post.custom_fields.twitter);				  
			  }
			  else {
				  navigator.notification.alert(
						'No se encontraron contenidos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);

			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}
/*
******** Esta funcion recibe la cantidad de post en la categoria y la categoria
******** para despues mostrarlos en el contendor que le corresponde dependiendo se su sección
*/
function primerEntrada (target_div,tipo,repres,presidente) {
	   if(presidente == 1) {
		   $("#mexico").addClass("ocultar-mapa-mexico");
	   }
	   var contenedor = target_div;
	   jQuery.ajax({
		   url: servidor_l + tipo,
		   dataType: 'json',
		   success: function(informacion) {
			  $(contenedor).empty();
			  if(repres == 1) {				  
				$(contenedor).append('<div id="list-titulo" class="post">'+ informacion.post.title +'</div>');
				$(contenedor).append(informacion.post.content);
			  }
			  else {
				$(contenedor).append(informacion.posts[0].content);
				$("#zoom_01").elevateZoom({
					  zoomType: "inner",
					  cursor: "crosshair",
					  lensSize    : 200
					});	
			  }
			  $.mobile.loading('hide');
			},
			error: function() {
				navigator.notification.alert(
						'Error al cargar los datos!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
			}
	   });
}