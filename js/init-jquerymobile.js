// JavaScript Document
$(document).bind("mobileinit", function(){
  $.extend(  $.mobile , {
    ajaxEnabled: true,
	allowCrossDomainPages: true,
	loadingMessage: "Cargando...",
	pageLoadErrorMessage: "Error al cargar los datos...",
	backBtnText : "Atrás",
	closeBtnText : "Cerrar",
	expandCueText :" click para expandir contenido", 
	collapseCueText : " click para cerrar contenido", 
	filterPlaceholder : "Filtrar ítems...",
	closeText : "Cerrar",
	defaultPageTransition: 'none',
  });
  $.mobile.defaultPageTransition   = 'none';
  $.mobile.defaultDialogTransition = 'none';
  $.mobile.buttonMarkup.hoverDelay = 0;
});