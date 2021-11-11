document.write("<table cellspacing='2' border='1px solid black'>");
document.write("<tr>");
document.write("<td>Valor</td><td>Math.sin()</td>");
document.write("</tr>");
for(let i = 0; i <= 10; i++){
    document.write("<tr>");
        document.write("<td>"+ i +"</td><td>"+ Math.sin(i) +"</td>");
    document.write("</tr>");    
}
document.write("</table>");
