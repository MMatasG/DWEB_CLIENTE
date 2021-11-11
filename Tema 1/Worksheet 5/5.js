
/*
document.write("Ej 1 if/else </br>");

function esPar(value){
    if (value%2==0) {
        alert("El número "+ value +" es par");
    
    } else {
        alert("El número "+ value +" es impar");
    }
}

esPar(11);
*/

/*
document.write("Ej 2 Mayor de edad? </br>");
mayoredad = prompt("Dime tu edad");

if (mayoredad >= 18) { 
document.write("Eres mayor de edad </br>");
} else {
    document.write("Eres menor de edad");
}
*/

/*
document.write("Ej 3 Madrid y 25 años </br>");
edad3 = prompt("Dime tu edad");
ciudad = prompt("Dime tu localidad de nacimiento");

if (edad3 >= 25 && ciudad == 'Madrid') {
    document.write("Enhorabuena </br>");
} else {
    document.write("Ok </br>");
}
*/


/*
document.write("Ej 4 Superior a 100 </br>");
num = prompt("Dime un número") 
if(num > 100){
    document.write(num - (num * 15/100))
}

*/

/*
document.write("Ej 5 Bienvenido </br>");
nombree = prompt("Dime tu nombre");

if (nombree == 'Pablo' || nombree == 'Eduardo') {
    document.write("Bienvenido </br>");
} else {
    document.write("Bienvenida </br>");
}
*/


/*
document.write("Ej 6 Madrid y 18-30 años </br>");
edad3 = prompt("Dime tu edad");
ciudad = prompt("Dime tu localidad de nacimiento");

if (edad3 >= 18 && ciudad == 'Madrid' && edad3 <=30) {
    document.write("Puedes acceder al carnet de empresarios </br>");
} else {
    document.write("No puedes acceder al carnet de empresarios </br>");
}

*/


/*
document.write("Ej 1 if/else </br>");

nombre = prompt("Dime tu nombre");
apellidos = prompt("Dime tus apellidos");

if (nombre == 'Ricardo') {
    document.write("Tus apellidos son " + apellidos);
} else {
    document.write("Tu nombre y apellidos: " + nombre + apellidos);
}
 
document.write("</br> </br> Ej 2 if/else </br> </br>");

edad = prompt("Dime tu edad");

if (edad >= 67) { 
document.write("Puedes jubilarte </br>");

} else {
    document.write("No puedes jubilarte");
}
*/

/*

edad2 = prompt(" Dime tu edad ");
document.write("Donde deberías estar con tu edad? </br>"+ edad2);


if (edad2 <= 5 ) { 
    document.write("Debes estar en el jardín de infancia </br>");

    } else if (edad2 >= 6 && edad2 <= 11) {
        document.write("Debes estar en primaria");

    } else if (edad2 >= 12 && edad2 <=  16) {
        document.write("Debes estar en la ESO");

    } else if (edad2 >= 17 && edad2 <=  21) {
        document.write("Debes estar en bachillerato o en ciclos");

    } else if (edad2 >= 22) {
        document.write("Debes estar en la universidad");
    }

    */

/*
    NO FUNCIONA
hermanos = prompt(" Dime cuantos hermanos tienes ");
cantidad = prompt("Dime una cantidad")
if (hermanos >= 3) { 
    cantidadp = ((cantidad /100) * 15)
    document.write("Tienes un 15% de descuento, " + cantidadp + '€ de desuento </br>');

} else if (hermanos <= 2 && hermanos >= 1) { 
    cantidadp = ((cantidad /100) * 5)
    document.write("Tienes un 5% de descuento, " + cantidadp + '€ de desuento </br>');
            
} else (hermanos == 0 ) {
    document.write('No tienes descuento: ' + cantidadp);

    }
    */

/*
document.write("Ej 5 Notas </br>");
ex1 = prompt("Nota examen 1");
ex2 = prompt("Nota examen 2");
tr1 = prompt("Nota trabajo 1");
tr2 = prompt("Nota trabajo 2");

var mediatotal = (parseFloat(ex1) + parseFloat(ex2) + parseFloat(tr1) + parseFloat(tr2)) / 4;

document.write(mediatotal)
if (mediatotal >= 5) {
    document.write("Estás aprobado")

} else{
    document.write('Estas suspenso')
} 
*/

/*
document.write("Ej 1 switch Mes </br>");
nombremes = prompt("dime el nombre de un mes");

switch (nombremes) {
    case 'Enero':
        alert("31 dias ");
        break;
    case 'Febrero':
        alert("28 dias ");
        break;
    case 'Marzo':
        alert("31 dias");
        break;
    case 'Abril':
        alert("30 dias");
        break;
    case 'Mayo':
        alert("31 dias ");
        break;
    case 'Junio':
        alert("30 dias ");
        break;
    case 'Julio':
        alert("31 dias ");
        break;
    case 'Agosto':
        alert("30 dias ");
        break;
    case 'Septiembre':
        alert("31 dias ");
        break;
    case 'Octubre':
        alert("30 dias ");
        break;
    case 'Noviembre':
        alert("31 dias ");
        break;
    case 'Diciembre':
        alert("30 dias ");
        break;
        
    
}

*/


/*

document.write("Ej 2 switch</br>");

numero = prompt("Dime un numero");


if (numero%2==0) {
    alert("El número "+numero+" es par");

} else {
    alert("El número "+numero+" es impar");
}
 
var resto = numero % 3;   
    if ( resto == 0 ){
      alert("Es multiplo de 5");
    } else {
        alert("No es multiplo de 3")
    }

var resto = numero % 5;   
    if ( resto == 0 ){
      alert("Es multiplo de 5");
    } else {
        alert("No es multiplo de 3")
    }

*/

/*
document.write("Ej 3 switch</br>");


numero1 = prompt("Dime un numero");
op = prompt("Dime un operador");
numero2 = prompt("Dime un numero");

switch (op) {
    case '+':
        var resultado = numero1 + numero2;
        alert("Resultado: " + resultado);
        break;
    case '-':
        var resultado = numero1 - numero2;
        alert("Resultado: " + resultado);
        break;
    case '*':
        var resultado = numero1 * numero2;
        alert("Resultado: " + resultado);
        break;
    case '/':
        var resultado = numero1 / numero2;
        alert("Resultado: " + resultado);
        break;
        
    
}

*/

/*
salir = false;
for(let i=8; i<10 && !salir; i++)
{
    console.log(i);
    if ( prompt("Deseas continuar?") == "N")
    {
        salir = true;
    }
}
*/

