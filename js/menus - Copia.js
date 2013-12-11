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
				   $(menur).append('<li> &nbsp; </li>');
				   for(var i=0; i<data.count; i++) {
						$(menur).append('<li><a href="'+ servidor_w + data.posts[i].type + "&id=" + data.posts[i].id + '">' + data.posts[i].title + '</a></li>');
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
					   da = da +'<li class="listas-hijas"> <div data-role="collapsible" data-icon="arrow-d" data-inset="false" data-collapsed-icon="arrow-d" data-expanded-icon="arrow-u" data-iconpos="right" data-transition="fade"><h1 class="titulo-menu titulo-superior">' + data.categories[i].title +'</h1>';							
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
										da = da + '<li class="col-lis"><a href="#" data-cantidad="'+ subcat.categories[e].post_count +'" data-categoria-id="'+ subcat.categories[e].id +'">'+ subcat.categories[e].title +'</a></li>';
										
									};//For sub
									da += '</ul>';
								}
								da = da + '</div></li>';
							},//Sucess sub
							error: function() {
							}//Error sub
						})//Ajax interno
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
}

