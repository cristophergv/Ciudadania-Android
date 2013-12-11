/*
******** Esta funcion  crea la galeria de imagenes del home de la App
*/
function insertarGaleria () {
	   $.mobile.loading('show');
	   URLS = servidor_l + "api/get_posts/?post_type=galeria";
	   menur = ".camera_wrap";
		   jQuery.ajax({
			   url: URLS,
			   async:false,
			   dataType: 'json',
			   success: function(data) {
				   for(var i=0; i<data.count; i++) {
						$(menur).append('<div data-src="'+ data.posts[i].thumbnail + '"></div>'); //Insertamos cada elemento
					}//FOR
					jQuery(function(){//Parametros de la galeria
						jQuery(menur).camera({
							thumbnails: false,
							height: '700px',
							loaderOpacity: 0.3,
							navigation: true,
							portrait: false,
							pauseOnClick: true,
							fx: "scrollLeft",
							time: 4000,
							transPeriod: 1500,
							pagination: false,
							playPause: true,
							mobileAutoAdvance: true,
							mobileNavHover: true
						});
					});
				   $.mobile.loading('hide'); //Ocultamos el loading
				},//SUCCESS
				error: function() {
					navigator.notification.alert(
						'No se logro cargar la galeria de imagenes!',  // mensaje en caso de error
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);	
				}//ERROR
		   });//AJAX
}