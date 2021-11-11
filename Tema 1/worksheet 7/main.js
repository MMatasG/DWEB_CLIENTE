
let valores = [1,2,3,4,5];
document.write("Array antes: " + valores);

//hacer sin los 3 puntos primero

let array = [];

function sumEveryOther(...valores){
    for (let i = 0; i <= valores.length-1; i++) {
        if (i%2 == 0) {
            array.push(valores[i]);
        }        
    }
	sum = 0
	for (let a = 0; a < array.length; a++) {
		sum += array[a];
	}
	console.log(sum);

    return array;

	
}

console.log(sumEveryOther(1,2,3,4,5));
document.write("</br> Array a sumar: " + array)
document.write("</br> Suma: " + sum)