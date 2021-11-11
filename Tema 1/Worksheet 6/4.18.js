document.write(" Ejercicio 4.18")


var columnas = prompt("Dime cantidad de columnas");
var filas = prompt("Dime cantidad de filas");
var altura = prompt("Dime una altura");
var anc = prompt("Dime una anchura");

document.write("<table style='width:'" + anc + "'; border: 1px solid black cellspacing='2' bgcolor='black' >")

for (let col1 = 0; col1 != columnas; col1++) {
    document.write("<tr bgcolor='white' height='"+altura+"' width='"+anc+"'>");
    for (let fil = 0; fil != filas; fil++) {
        document.write("<td width='50'> &nbsp; </td>");
    };
    document.write( "</tr>");
 };
 
document.write("</table>");
