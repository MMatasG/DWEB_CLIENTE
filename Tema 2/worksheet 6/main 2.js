document.write("Ejercicios DOCUMENT </br>");

document.write("Ejercicio 2 </br>");
document.write("C Muestra el numero de imagenes: </br>");

var fotos = document.getElementsByTagName('img');
var cantidadfotos = 0
for(let f of fotos) {
  var cantidadfotos += 1

}

