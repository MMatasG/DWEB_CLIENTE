document.write("</br> </br> Ejercicios DOCUMENT </br>");

document.write("Ejercicio 2 </br>");

document.images.length;

document.write(" </br> Ejercicio 2 C Imagenes del documento </br></br>");
document.write(" </br> Cantidad de fotos: " + document.images.length); 

document.write(" </br> Ejercicio 2 D ID de la imagen </br></br>");

var idimg = document.getElementsByTagName('img')[0].id
document.write("ID DE LA IMAGEN: " + idimg);


document.write(" </br> Ejercicio 2 E  ");
enlaces = document.anchors.length;
document.write("Numero de enlaces: " + enlaces);

document.write(" </br> Ejercicio 2 F Cambiar titulo documento </br></br>");
document.title ="Nuevo titulo";