

document.write("Ejercicios MATH </br>");


document.write("</br> Un número aleatorio entre 0 y 1: "+ Math.random());

document.write("</br> Un número aleatorio entre 100 y 200: "+ getRandomArbitrary(100,201));
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
  
var valor1 = prompt("Dime un numero minimo");
var valor2 = prompt("Dime un numero maximo");


document.write("</br> Un número aleatorio entre valor 1 y valor 2: " + getRandomArbitrary(valor1,valor2));
