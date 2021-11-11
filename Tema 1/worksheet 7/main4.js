document.write("2.js sumas solo numeros </br>");

//Write a function called countTheArgs that can take any number of arguments,
// and returns the number of arguments that are passed in.

let total=0
var totalarg = 0
function countTheArgs(){
    
    for (let i = 0; i < arguments.length; i++) {
        totalarg += 1
    }
    return totalarg;
}
countTheArgs(5,5,'pepe', 5,6,3,5)
 
document.write("</br> Argumentos: "+ totalarg);