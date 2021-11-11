

document.write("1.js sumas </br>");
// Write a function that can take in any number of arguments, and returns the sum of all of the arguments.


let total=0


function sumar(...numeros){
    for(let i of numeros){
    total+=i;
    }
    return total;
}

document.write("</br> Suma: " + sumar(5,5,5,6,3,5));