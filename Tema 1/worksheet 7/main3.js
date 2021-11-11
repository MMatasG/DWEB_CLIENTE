

document.write("2.js sumas solo numeros </br>");

//Write a function called addOnlyNums that can take in any number of 
//arguments (including numbers or strings), and returns the sum of only
// the numbers.

let total=0


function sumar(...numeros){
    for(let i of numeros){
        if(typeof i == 'number'){
            total+=i;
         }else{
            document.write(i + " No es un numero <br/>");
         }
    
    }
    return total;
}

 
document.write("</br> Suma: " + sumar(5,5,'pepe', 5,6,3,5));