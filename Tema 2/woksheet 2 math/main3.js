

document.write("Ejercicios MATH </br>");

document.write("3 y 4.js <br>");
var valor1 = prompt("Quieres continuar calculando hipotenusas: S/N");
while (valor1 == 'S') {
    var valor1 = prompt("Dime un cateto <br> ");
    var valor2 = prompt("Dime otro cateto <br> ");
    window.alert(Math.hypot(valor1, valor2));
    var valor1 = prompt("Quieres continuar calculando hipotenusas: S/N");

}

