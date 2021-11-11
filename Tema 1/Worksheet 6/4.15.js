var num_adivinar = prompt("Dime un numero para que otro jugador lo adivine");
var num = prompt("Jugador 2: Dime un numero");

while (num_adivinar != num) {
    if (num > num_adivinar) {
        alert("Numero demasiado grande")
        var num = prompt("Jugador 2: Dime un numero");
    } else {
        alert("Numero demasiado pequeño")
        var num = prompt("Jugador 2: Dime un numero");
    }


}
alert("Has acertado")