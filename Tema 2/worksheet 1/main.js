document.write("Ejercicios DATE </br>");
document.write("Ejercicio 1: </br>");


var hoy = new Date();
var year = hoy.getUTCFullYear();
var month = hoy.getMonth();
var day = hoy.getDay();
var hora = hoy.getHours();
var minutos = hoy.getMinutes();
var segundos = hoy.getSeconds();

document.write("Year: ");
document.write(year + "<br>");

document.write("Month: ");
document.write(month + "<br>");

document.write("Day: ");
document.write(day + "<br>");

document.write("Hour: ");
document.write(hora + "<br>");

document.write("Minutes: ");
document.write(minutos + "<br>");

document.write("Seconds: ");
document.write(segundos + "<br>");

