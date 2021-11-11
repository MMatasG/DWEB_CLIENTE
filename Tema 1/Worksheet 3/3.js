alert("Desde el fichero");

function calculateSupply(age,amount) {
    var maxage = 90
    var year = maxage - age
    var remainingyears = year * 365
    return remainingyears * amount;
}

calculateSupply(19,2);
document.write('Cantidad de por vida: ' + calculateSupply(19,2));

edad = prompt("Dime algo");