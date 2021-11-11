

document.write("Ejercicios MATH </br>");

document.write("5 .js Ecuaciones segundo grado <br>");


var a = parseInt(prompt("Variable a"));
var b = parseInt(prompt("Variable b"));
var c = parseInt(prompt("Variable c"));

document.write("<h3>Ejercicio 5</h3>");

function equation(a,b,c){
    var solve1 = (-b+(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
    var solve2 = (-b-(Math.sqrt((Math.pow(b,2)-(4*a*c)))))/(2*a);
    document.write(solve1+"<br>");
    document.write(solve2+"<br>");
}

equation(a,b,c);