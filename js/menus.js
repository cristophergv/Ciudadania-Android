/*
******** Esta funcion recibe la url y la clase del menu de los links de las secciones 
******** para despues mostrarlos en el contendor que le corresponde dependiendo se su sección
*/
function crearMenu (menus_sis, urls) {
		//$('.camera_wrap')
		//Hack para evitar el brinco en la galeria del home, al crear el menu de la sección
		//borramos la galeria de imagenes del home para mejorar la experiencia de usuario
		$('.camera_wrap').empty();
		$.mobile.loading('show');
		$('.camera_wrap').empty();
	   URLS = servidor_l + urls;
	   menur = menus_sis;
		   jQuery.ajax({
			   url: URLS,
			   dataType: 'json',
			   success: function(data) {
				   $(menur).append('<li> &nbsp;<br/> </li>');
				   for(var i=0; i<data.count; i++) {
					   if(i == 0) {
							$(menur).append('<li class="ui-btn-active "><a href="'+ servidor_w + data.posts[i].type + "&id=" + data.posts[i].id + '" class="negritas">' + data.posts[i].title + '</a></li>');
					   }
					   else {
						   $(menur).append('<li><a href="'+ servidor_w + data.posts[i].type + "&id=" + data.posts[i].id + '" class="negritas">' + data.posts[i].title + '</a></li>');
					   }
					}//FOR
				   $(menur).listview('refresh');
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
}
/*
******** Esta funcion crea el menu de la sección El ciudadano en las redes sociales 
******** recibe como parametros: #id(ubicación del conteido) - #url (de donde se jalan los contenidos)
*/
function crearMenuCiudadano (menus_sis, urls) {
		//$('.camera_wrap')
		//Hack para evitar el brinco en la galeria del home, al crear el menu de la sección
		//borramos la galeria de imagenes del home para mejorar la experiencia de usuario
		$.mobile.loading('show');
		$('.camera_wrap').empty();
	   URLS = servidor_l + urls;
	   menur = menus_sis;
		   jQuery.ajax({
			   url: URLS,
			   async:false,
			   dataType: 'json',
			   success: function(data) {
				   //$(menur).append('<');
				   $(menur).empty();
				   for(var i=0; i<data.count; i++) {
						$(menur).append('<article><a href="'+ data.posts[i].url + '"><img src="' + data.posts[i].thumbnail + '"><span>'+ data.posts[i].title +'</span></a></article>');
					}//FOR
				   
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
		$.mobile.loading('hide');
}
/*
******** Esta funcion recibe la url y la clase del menu de los links de las secciones 
******** para despues mostrarlos en el contendor que le corresponde dependiendo se su sección
*/
function crearMenuComunicacionb (menus_sis2, urls2) {
		//$('.camera_wrap')
		//Hack para evitar el brinco en la galeria del home, al crear el menu de la sección
		//borramos la galeria de imagenes del home para mejorar la experiencia de usuario
		$('.camera_wrap').empty();
		$.mobile.loading('show');
	   URLSS = servidor_l + urls2;
	   menurr = menus_sis2;
		   jQuery.ajax({
			   url: URLSS,
			   dataType: 'json',
			   success: function(data2) {
				   for(var i=0; i<data2.count; i++) {
						$(menurr).append('<li><a href="'+ servidor_w + data2.posts[i].type + "&id=" + data2.posts[i].id + '">' + data2.posts[i].title + '</a></li>');
					}//FOR
				   $(menurr).listview('refresh');
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
}
function crearMenuComunicacionc (menus_sis3, urls3) {
		$.mobile.loading('show');
	   URLSSS = servidor_l + urls3;
	   menurrr = menus_sis3;
		   jQuery.ajax({
			   url: URLSSS,
			   dataType: 'json',
			   success: function(data3) {
				   for(var i=0; i<data3.count; i++) {
						$(menurrr).append('<li><a href="'+ servidor_w + data3.posts[i].type + "&id=" + data3.posts[i].id + '">' + data3.posts[i].title + '</a></li>');
					}//FOR
				   $(menurrr).listview('refresh');
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
}
function crearMenuComunicaciond (menus_sis4, urls4) {
		$.mobile.loading('show');
	   URLSSSS = servidor_l + urls4;
	   menurrrr = menus_sis4;
		   jQuery.ajax({
			   url: URLSSSS,
			   dataType: 'json',
			   success: function(data4) {
				   for(var i=0; i<data4.count; i++) {
						$(menurrrr).append('<li><a href="'+ servidor_w + data4.posts[i].type + "&id=" + data4.posts[i].id + '">' + data4.posts[i].title + '</a></li>');
					}//FOR
				   $(menurrrr).listview('refresh');
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
}
/*
******** Esta funcion recibe la url y la clase del menu de los links de la seccion Comunicación 
******** para despues mostrarlos en el contendor que le corresponde
*/
var w;
var da = "";
var x;
function crearMenuComunicacion (menus_sis, urls, categoria) {
		$.mobile.loading('show');
	   URLS = servidor_l + urls;
	   menur = menus_sis;
	   da = "";
	   $('.representantes').html();
		   jQuery.ajax({
			   url: URLS,
			   async:false,
			   dataType: 'json',
			   success: function(data) {
				   for(var i=0; i<data.count; i++) {
					   if(data.categories[i].title != 'Poder Judicial') {
						   da = da +'<li class="listas-hijas"> <div data-role="collapsible" data-icon="arrow-d" data-inset="false" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-u" data-iconpos="right"><h1 class="titulo-menu titulo-superior">' + data.categories[i].title +'</h1>';							
							//A partir de las categorias hijas de la categoria representantes, buscamos las categorias
							//hijas de cada una de las hijas
							 w = i;
							$.ajax({
								url: sub_categorias + data.categories[w].id,//Armamos la url de la consulta
								dataType:"json",
								async:false,
								success: function(subcat) {
									if(subcat.count > 0) {
										da = da + '<ul data-role="listview" class="hija">';
										for(var e=0; e<subcat.count; e++) {
											//da = da + '<li class="col-lis"><a href="#" data-cantidad="'+ subcat.categories[e].post_count +'" data-categoria-id="'+ subcat.categories[e].id +'">'+ subcat.categories[e].title +'</a></li>';
											$.ajax({
												url: sub_categorias + subcat.categories[e].id,
												dataType:"json",
												async:false,
												success: function(catfinales) {
													if(catfinales.count > 0 && subcat.categories[e].title != "Cámara local") {
														da = da +'<li class="listas-hijas"> <div data-role="collapsible" data-icon="arrow-d" data-inset="false" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-u" data-iconpos="right"><h1 class="titulo-menu titulo-superior titulo-superior-sub">' + subcat.categories[e].title +'</h1><ul data-role="listview" class="hija sub-hija">';
													for(z=0; z<catfinales.count; z++) {
														da = da + '<li class="col-lis sub-sub-hija"><a href="#" data-cantidad="'+ catfinales.categories[z].post_count +'" data-categoria-id="'+ catfinales.categories[z].id +'" data-descripcion="' + catfinales.categories[z].description +'">'+ catfinales.categories[z].title +'</a></li>';
													}
														da += '</ul></div></li>';
													}
													else {
														//alert(subcat.categories[e].title + " Sin sub");
														if(subcat.categories[e].title == "Cámara local") {
															da = da + '<li class="col-lis camara-local" ><a href="#" data-cantidad="'+ subcat.categories[e].post_count +'" data-local="1" data-local-titulo="'+ subcat.categories[e].title +'" data-categoria-id="'+ subcat.categories[e].id +'" data-descripcion="' + subcat.categories[e].description +'">'+ subcat.categories[e].title +'</a></li>';
														}
														else {
															da = da + '<li class="col-lis"><a href="#" data-cantidad="'+ subcat.categories[e].post_count +'" data-categoria-id="'+ subcat.categories[e].id +'" data-descripcion="' + subcat.categories[e].description +'">'+ subcat.categories[e].title +'</a></li>';
														}
													}
												}
											})//AJAX
											
										};//For sub
										da += '</ul>';
									}
									da = da + '</div></li>';
								},//Sucess sub
								error: function() {
								}//Error sub
							})//Ajax interno 
						}//IF
						else {
							da = da +'<li class="listas-hijas"> <div data-role="collapsible" data-icon="arrow-d" data-inset="false" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-u" data-iconpos="right" ><h1 class="titulo-menu titulo-superior">' + data.categories[i].title +'</h1>';							
							//A partir de las categorias hijas de la categoria representantes, buscamos las categorias
							//hijas de cada una de las hijas
							 w = i;
							$.ajax({
								url: posts_categoria + data.categories[w].id,//Armamos la url de la consulta
								dataType:"json",
								async:false,
								success: function(subjud) {
									if(subjud.count > 0) {
										da = da + '<ul data-role="listview" class="hija">';
										for(var e=0; e<subjud.count; e++) {
											da = da + '<li class="col-lis poder-judicial"><a href="'+ subjud.posts[e].id +'" data-categoria-id="'+ subjud.posts[e].id +'" data-cantidad="-1" data-descripcion="' + subjud.posts[e].title +'">'+ subjud.posts[e].title +'</a></li>';
										};//For sub
										da += '</ul>';
									}
									da = da + '</div></li>';
								},//Sucess sub
								error: function() {
								}//Error sub
							})//Ajax interno 
						}
					}//FOR
					$(menur).html("");
				   $(menur).append(da);
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
		  $(menur).listview('refresh');//Actualizamos los estilos
		  $('.set').find('div[data-role=collapsible]').collapsible({refresh:true});//Actualizamos los colapsables
		  $(menur).find('ul').listview({refresh:true});//Actualizamos cada ul para asegurarnos de que aplique los estilos
		  comunicacion_s = 1;
		  $('.camera_wrap').empty();
		   delete data; delete subcat; delete catfinales; delete da;
}

