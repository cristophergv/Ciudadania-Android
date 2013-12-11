// Espera a que PhoneGap se inicie
// 
document.addEventListener("deviceready", onDeviceReady, false);
// PhoneGap esta listo, y ahora se pueden hacer llamadas a los métodos
//
var latitude;
var longitude;
var mapa_estado;
$(a).click(function(e) {
	e.preventDefault();
})

//Obtener estado desde Google Maps
function estado_usuario() {
	
	mapa_estado = url_maps + latitude +','+longitud;
	//alert(mapa_estado);
	jQuery.ajax({
		   url: mapa_estado,
		   dataType: 'json',
		   success: function(ubicacion) {
			   mapa_estado = ubicacion.results[0].address_components[4].long_name;
			},//SUCCESS
			error: function() {
				navigator.notification.alert(
						'No logramos localizar tu estado de origen!',  // mensaje
						alertDismissed,         // callback
						'Ciudadania',            // titulo
						'Ok'                  // Nombre del boton
					);
				mapa_estado = "Aguascalientes";	
			}//ERROR
	   });//AJAX
}

// Si se logro obtener la ubicación
//
function exito(position) {
	latitude = position.coords.latitude;
	longitud = position.coords.longitude;
	estado_usuario();
}
// Si no se logro obtener la ubicación
//
function error(error) {
	navigator.notification.alert(
		'No se pudo obtener tu ubicación',  // mensaje
		alertDismissed,         // callback
		'Ciudadania',            // titulo
		'Ok'                  // Nombre del boton
	);
	mapa_estado = "Aguascalientes";	
}
function onDeviceReady() {
	checkConnection();
	document.addEventListener("offline", sinconexion, false);
	document.addEventListener("online", conexion, false);
	navigator.geolocation.getCurrentPosition(exito, error);
	
} //onDevideReady

function checkConnection() {
	var networkState = navigator.network.connection.type;
	/*var states = {};
	states[Connection.UNKNOWN]  = 'Conexión desconocida';
	states[Connection.ETHERNET] = 'Conexión ethernet';
	states[Connection.WIFI]     = 'Conexión WiFi';
	states[Connection.CELL_2G]  = 'Conexión movil 2G';
	states[Connection.CELL_3G]  = 'Conexión movil 3G';
	states[Connection.CELL_4G]  = 'Conexión movil 4G';
	states[Connection.NONE]     = 'Sin conexión';
		//alert('Tipo de conexión: ' + networkState);
	*/
	if(networkState != 'none') {
		$('#blanco').removeClass('quitar-blanco');
	}
	else {
		$('#blanco').removeClass('quitar-blanco');
	}
}// CheckConnection
    