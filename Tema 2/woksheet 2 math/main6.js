document.write("Ejercicios MATH </br>");
document.write("6. potencias <br>");

var numero = prompt("Dime un numero: ");
var potencia = prompt("Dime la potencia a la que quieres el numero: ");


function calcularpotencia(base, exponente){
    return base * exponente;
}


document.write("Resultado: " + calcularpotencia(numero,potencia));