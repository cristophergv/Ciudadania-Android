// Definimos las constantes de las direcciones de wordpress desde donde se jalara la información
const servidor_w = "http://www.1011.mx/trabajos/tec/ciudadano/api/get_post/?post_type=";

const servidor_l = "http://www.1011.mx/trabajos/tec/ciudadano/";

const sub_categorias = "http://www.1011.mx/trabajos/tec/ciudadano/api/get_category_index/?parent=";

const post_categoria = "http://www.1011.mx/trabajos/tec/ciudadano/api/get_category_posts/?count=1&cat=";

const posts_categoria = "http://www.1011.mx/trabajos/tec/ciudadano/api/get_posts/?orderby=meta_value&meta_key=estado&order=ASC&include=id,title,thumbnail,custom_fields,thumbnail_sizes,thumbnail_images&cat=";

const url_maps = "http://maps.googleapis.com/maps/api/geocode/json?sensor=false&latlng=";

const obtener_post = "http://www.1011.mx/trabajos/tec/ciudadano/api/get_post/?id=";
//const primer_entrada = "http://www.1011.mx/trabajos/tec/ciudadano/";

const posts_camara_local = "http://www.1011.mx/trabajos/tec/ciudadano/api/get_category_posts/?category_slug=";

const camara_local = "http://www.1011.mx/trabajos/tec/ciudadano/api/get_posts/?include=id,title,thumbnail,custom_fields,thumbnail_sizes,thumbnail_images&category_slug=Camara%20local&meta_name=estado&meta_value=";

const estados_select = '<select name="estado" id="estado">                <option value=""  selected="selected">Elige otro estado</option>                <option value="Aguascalientes">Aguascalientes</option>                <option value="Baja California">Baja California</option>                <option value="Baja California Sur">Baja California Sur</option>                <option value="Campeche">Campeche</option>                <option value="Chiapas">Chiapas</option>                <option value="Chihuahua">Chihuahua</option>                <option value="Coahuila">Coahuila</option>                <option value="Colima">Colima</option>                <option value="Distrito Federal">Distrito Federal</option>                <option value="Durango">Durango</option>                <option value="Estado de México">Estado de México</option>                <option value="Guanajuato">Guanajuato</option>                <option value="Guerrero">Guerrero</option>                <option value="Hidalgo">Hidalgo</option>                <option value="Jalisco">Jalisco</option>                <option value="Michoacán">Michoacán</option>                <option value="Morelos">Morelos</option>                <option value="Nayarit">Nayarit</option>                <option value="Nuevo León">Nuevo León</option>                <option value="Oaxaca">Oaxaca</option>                <option value="Puebla">Puebla</option>                <option value="Querétaro">Querétaro</option>                <option value="Quintana Roo">Quintana Roo</option>                <option value="San Luis Potosí">San Luis Potosí</option>                <option value="Sinaloa">Sinaloa</option>                <option value="Sonora">Sonora</option>                <option value="Tabasco">Tabasco</option>                <option value="Tamaulipas">Tamaulipas</option>                <option value="Tlaxcala">Tlaxcala</option>                <option value="Veracruz">Veracruz</option>                <option value="Yucatán">Yucatán</option>                <option value="Zacatecas">Zacatecas</option>                </select>';