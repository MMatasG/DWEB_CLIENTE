document.write("<title> Prácticas del bucle for </title>");
document.write(" Ejercicio 4.10")

var num = 1

/*
while (num != 7) {
    document.write("<h" + num +  ">" + "Cabecera h" + num + "</h" + num +  ">");
    num = num + 1
}

*/



document.write(" Ejercicio 4.11")

var columnas = prompt("Dime cantidad de columnas");
var altura = prompt("Dime una altura");
var anc = prompt("Dime una anchura");


//document.write("<table  border='0' width='"+anc+" px' cellspacing='2' bgcolor='black' >");

document.write("<table style='width:'" + anc + "'; border: 0px solid black cellspacing='2' bgcolor='black' >")

document.write("<tr bgcolor='white' height='"+altura+"' width='"+anc+"'>");



var col = 0
var col1 = 0

while (col1 != columnas) {
    document.write("<td width='50'> &nbsp; </td>");
    col1 = col1 + 1
}



document.write("</tr>");
document.write("</table>");
