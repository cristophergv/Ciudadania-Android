//Variables Globales
var galeria_s;
var comunicacion_s;
var equidad_s;
var somos_s;
var participacion_s;
var ciudadano_s;

// JavaScript Document
function alertDismissed() {
        // sin nada que hacer
 }
function sinconexion() {
	$('#blanco').removeClass('quitar-blanco');
}
function conexion() {
	$('#blanco').addClass('quitar-blanco');
}


					
function partidos(selcpartido) {
	var opcion = JSON.stringify(selcpartido); // Convertimos a string el objeto enviado
	var bandera;
	switch(opcion)
	{
	case '["pri"]':
	  bandera = '<img src="img/partidos/pri.png">';
	  break;
	case '["pan"]':
	  bandera = '<img src="img/partidos/pan.png">';
	  break;
	case '["prd"]':
	  bandera = '<img src="img/partidos/prd.png">';
	  break;
	case '["pt"]':
	  bandera = '<img src="img/partidos/pt.png">';
	  break;
	case '["pvem"]':
	  bandera = '<img src="img/partidos/pv.png">';
	  break;
	case '["pmc"]':
	  bandera = '<img src="img/partidos/pmc.png">';
	  break;
	case '["pna"]':
	  bandera = '<img src="img/partidos/pna.png">';
	  break;
	default:
	  bandera = '<img src="img/partidos/sinpartido.png">';
	}
	return bandera;
}


function estados(selcestado) {
	var opcion = JSON.stringify(selcestado); // Convertimos a string el objeto enviado
	var partido;
	switch(opcion)
	{
	case '["Aguascalientes"]':
	  partido = '<img src="img/estados/aguascalientes.png">';
	  break;
	case '["Aguascalientes "]':
	  partido = '<img src="img/estados/aguascalientes.png">';
	  break;
	case '["Michoacán"]':
	  partido = '<img src="img/estados/michoacan.png">';
	  break;
	case '["Michoacán "]':
	  partido = '<img src="img/estados/michoacan.png">';
	  break;
	case '["Oaxaca"]':
	  partido = '<img src="img/estados/oaxaca.png">';
	  break;
	case '["Oaxaca "]':
	  partido = '<img src="img/estados/oaxaca.png">';
	  break;
	case '["Baja California"]':
	  partido = '<img src="img/estados/bajacalifornianorte.png">';
	  break;
	case '["Baja California "]':
	  partido = '<img src="img/estados/bajacalifornianorte.png">';
	  break;
	case '["Baja California Sur"]':
	  partido = '<img src="img/estados/bajacaliforniasur.png">';
	  break;
	case '["Baja California Sur "]':
	  partido = '<img src="img/estados/bajacaliforniasur.png">';
	  break;
	case '["Campeche"]':
	  partido = '<img src="img/estados/campeche.png">';
	  break;
	case '["Campeche "]':
	  partido = '<img src="img/estados/campeche.png">';
	  break;
	case '["Chiapas"]':
	  partido = '<img src="img/estados/chiapas.png">';
	  break;
	case '["Chiapas "]':
	  partido = '<img src="img/estados/chiapas.png">';
	  break;
	case '["Chihuahua"]':
	  partido = '<img src="img/estados/chihuahua.png">';
	  break;
	case '["Chihuahua "]':
	  partido = '<img src="img/estados/chihuahua.png">';
	  break;
	case '["Coahuila"]':
	  partido = '<img src="img/estados/coahuila.png">';
	  break;
	case '["Coahuila "]':
	  partido = '<img src="img/estados/coahuila.png">';
	  break;
	case '["Colima"]':
	  partido = '<img src="img/estados/colima.png">';
	  break;
	case '["Colima "]':
	  partido = '<img src="img/estados/colima.png">';
	  break;
	case '["Distrito Federal"]':
	  partido = '<img src="img/estados/df.png">';
	  break;
	case '["Distrito Federal "]':
	  partido = '<img src="img/estados/df.png">';
	  break;
	case '["Durango"]':
	  partido = '<img src="img/estados/durango.png">';
	  break;
	case '["Durango "]':
	  partido = '<img src="img/estados/durango.png">';
	  break;
	case '["Estado de México"]':
	  partido = '<img src="img/estados/estadodemexico.png">';
	  break;
	case '["Estado de México "]':
	  partido = '<img src="img/estados/estadodemexico.png">';
	  break;
	case '["Guanajuato"]':
	  partido = '<img src="img/estados/guanajuato.png">';
	  break;
	case '["Guanajuato "]':
	  partido = '<img src="img/estados/guanajuato.png">';
	  break;
	case '["Guerrero"]':
	  partido = '<img src="img/estados/guerrero.png">';
	  break;
	case '["Guerrero "]':
	  partido = '<img src="img/estados/guerrero.png">';
	  break;
	case '["Hidalgo"]':
	  partido = '<img src="img/estados/hidalgo.png">';
	  break;
	case '["Hidalgo "]':
	  partido = '<img src="img/estados/hidalgo.png">';
	  break;
	case '["Jalisco"]':
	  partido = '<img src="img/estados/jalisco.png">';
	  break;
	case '["Jalisco "]':
	  partido = '<img src="img/estados/jalisco.png">';
	  break;
	case '["Morelos"]':
	  partido = '<img src="img/estados/morelos.png">';
	  break;
	case '["Morelos "]':
	  partido = '<img src="img/estados/morelos.png">';
	  break;
	case '["Nayarit"]':
	  partido = '<img src="img/estados/nayarit.png">';
	  break;
	case '["Nayarit "]':
	  partido = '<img src="img/estados/nayarit.png">';
	  break;
	case '["Nuevo León"]':
	  partido = '<img src="img/estados/nuevoleon.png">';
	  break;
	case '["Nuevo León "]':
	  partido = '<img src="img/estados/nuevoleon.png">';
	  break;
	case '["Puebla"]':
	  partido = '<img src="img/estados/puebla.png">';
	  break;
	case '["Puebla "]':
	  partido = '<img src="img/estados/puebla.png">';
	  break;
	case '["Querétaro"]':
	  partido = '<img src="img/estados/queretaro.png">';
	  break;
	case '["Querétaro "]':
	  partido = '<img src="img/estados/queretaro.png">';
	  break;
	case '["Quintana Roo"]':
	  partido = '<img src="img/estados/quintanaroo.png">';
	  break;
	case '["Quintana Roo "]':
	  partido = '<img src="img/estados/quintanaroo.png">';
	  break;
	case '["Sinaloa"]':
	  partido = '<img src="img/estados/sinaloa.png">';
	  break;
	case '["Sinaloa "]':
	  partido = '<img src="img/estados/sinaloa.png">';
	  break;
	case '["Sonora"]':
	  partido = '<img src="img/estados/sonora.png">';
	  break;
	case '["Sonora "]':
	  partido = '<img src="img/estados/sonora.png">';
	  break;
	case '["Tabasco"]':
	  partido = '<img src="img/estados/tabasco.png">';
	  break;
	case '["Tabasco "]':
	  partido = '<img src="img/estados/tabasco.png">';
	  break;
	case '["San Luis Potosí"]':
	  partido = '<img src="img/estados/sanluispotosi.png">';
	  break;
	case '["San Luis Potosí "]':
	  partido = '<img src="img/estados/sanluispotosi.png">';
	  break;
	case '["Tamaulipas"]':
	  partido = '<img src="img/estados/tamaulipas.png">';
	  break;
	case '["Tamaulipas "]':
	  partido = '<img src="img/estados/tamaulipas.png">';
	  break;
	case '["Tlaxcala"]':
	  partido = '<img src="img/estados/tlaxcala.png">';
	  break;
	case '["Tlaxcala "]':
	  partido = '<img src="img/estados/tlaxcala.png">';
	  break;
	case '["Veracruz"]':
	  partido = '<img src="img/estados/veracruz.png">';
	  break;
	case '["Veracruz "]':
	  partido = '<img src="img/estados/veracruz.png">';
	  break;
	case '["Yucatán"]':
	  partido = '<img src="img/estados/yucatan.png">';
	  break;
	case '["Yucatán "]':
	  partido = '<img src="img/estados/yucatan.png">';
	  break;
	case '["Zacatecas"]':
	  partido = '<img src="img/estados/zacatecas.png">';
	  break;
	case '["Zacatecas "]':
	  partido = '<img src="img/estados/zacatecas.png">';
	  break;
	default:
	  partido = '<img src="img/estados/lista_nacional.png">';
	}
	return partido;
}

function fuente(sec) {
	url = obtener_post + sec + '&post_type=fuente&include=custom_fields';
	$.ajax({
		url: url,//Armamos la url de la consulta
		dataType:"json",
		async:true,
		success: function(valor_fuente) {
			if(valor_fuente.status == "ok") {
				$("#fuente img").attr("src",'img/'+valor_fuente.post.custom_fields.fuente+'.png');
			}
			else {
				$("#fuente img").attr("src",'img/invisible.png');
			}
		},//Sucess sub
		error: function() {
		}//Error sub
	})//Ajax interno
}
