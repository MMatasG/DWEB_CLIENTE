document.write("Ejercicios STRING </br>");
document.write("Ejercicio 1A: </br>");

var cadena = "Hola que tal";

function invertirstring(texto) {
    return texto.split('').reverse().join('');
}
document.write(invertirstring(cadena));




document.write("<br><br> Ejercicio 1B: </br>");

var texto_separado = cadena.split(/\s+/);

for (let palabra of texto_separado) {
    document.write(invertirstring(palabra));
    document.write(" ");
  }


document.write("<br><br> Ejercicio 1C: </br>");


function findLongestWord(str) {
  
  var palabramaslarga = 0;  // Declara variable para almacenar el largo en numeros de la palabra mas larga encontrada
  for (var i = 0; i < texto_separado.length; i++) { // Se recorre el array de string
    if (palabramaslarga < texto_separado[i].length) {   // Compara si la cadena guardada es ms larga que la posicion del array.
      palabramaslarga = texto_separado[i].length;    // Guarda el tamaño de la cadena ms larga en la variable.
    }
  }
  return palabramaslarga; // Devuelve la variable con el largo del string :D.

}
document.write(findLongestWord(texto_separado));


/*
document.write("<br><br> Ejercicio 1D: </br>");

function palabrasmaslargas(entrada, longitud) {
  
  var palabrasmaslargasquei = 0;  

  for (var i = longitud; i < entrada; i++) { 
    document.write(i) 


    if (i > palabrasmaslargas) {   
      palabramaslarga = texto_separado[i].length;    // Guarda el tamaño de la cadena ms larga en la variable.
    }

  }
  return palabrasmaslargasquei; 
}

document.write("Palabras mas largas que 3: " + palabrasmaslargas(texto_separado));
*/


document.write("<br><br> Ejercicio 1E: </br>");


document.write("<br><br> Ejercicio 2: </br>");

function informacionstring(texto) {
  let text = texto.toString();
  
  var textominusculas = text.toLowerCase();
  var textomayusculas = text.toUpperCase();
  
  if (text === textominusculas) {
    var resultado = "Texto es todo minusculas <br>";
  };

  if (text === textomayusculas) {
    var resultado = "Texto es todo mayusculas <br>";
  };

  if (text !== (textomayusculas && textominusculas)) {
    var resultado = "Texto es mayusculas y minusculas <br>";
  };
  
  return resultado;
}

document.write("texto:" + cadena +  "<br> es: " + informacionstring(cadena));


document.write("<br><br> Ejercicio 3: </br>");
var cadena1 = "Tres tristes tigres";
var cadena2 = "tristes";

function encontrardentrodecadena(cadenaoriginal, cadena_a_encontrar) {
  if (cadenaoriginal.includes(cadena_a_encontrar) == true) {
    return "El texto "+ cadena_a_encontrar +  " SI esta dentro de el string " + cadenaoriginal;
  } else {
    return "El texto "+ cadena_a_encontrar +  " NO esta dentro de el string" + cadenaoriginal;
  }
}

document.write(encontrardentrodecadena(cadena1, cadena2));

//

document.write("<br><br> Ejercicio 4: </br>");

var cadena4 = "hola prst aeiou"

function ordenarstring(string) {
  const vocales = ["a", "e", "i", "o", "u"];
  const consonantes = ["b", "c", "d", "f", "g","h","j", "k", "l", "m","n", "ñ", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  let result = '';
  var primero_consonantes = "";
  var segundo_vocales = "";
  
  for (let letra of string) {
    
    if (consonantes.includes(letra)){
      primero_consonantes += letra;
    } 
    if (vocales.includes(letra)){
      segundo_vocales += letra;
    } 
  }
  return primero_consonantes + segundo_vocales;
}
document.write(ordenarstring(cadena4));

//



document.write("<br><br> Ejercicio 5: </br>");

var cadena4 = "hola que  tal"

function eliminarrepetidos(string) {
  let resultado = '';
  
  for (let letra of string) {
    if (resultado.includes(letra)){
    } else {
      resultado += letra
    } 
  }
  return resultado;
}
document.write(eliminarrepetidos(cadena4));


//

document.write("<br><br> Ejercicio 6: </br>");

var cadena5 = "hola me llamo pepito"
var cadena6 = "pepito"

function subcadena(cadena, subcadena) {
  
  if (cadena.includes(subcadena)) {
    document.write("Si esta en la cadena<br>")
  } else {
    document.write("No esta en la cadena <br>")
  }
   
}
subcadena(cadena5, cadena6);


//


document.write("<br><br> Ejercicio 7: </br>");
function comprobarpalindromo(str) {
  document.write("<br>" + str);
  const nuevostring = str.replace(/[\W_]/g, "").toLowerCase()
  
  const strReversed = nuevostring.split("").reverse().join("")
  return nuevostring === strReversed ? "<br>es palindromo<br>" : "<br>no es palindromo<br>"
}
  1
document.write(comprobarpalindromo("Ali tomo tila")) // es palindromo
document.write(comprobarpalindromo("Amad a la dama")) // es palindromo
document.write(comprobarpalindromo("otra cosa")) // no es palindromo