document.write("Ejercicios DATE </br>");
document.write("Ejercicio 2: </br>");

var fechaHoy = new Date();

var fecha85 = new Date()
fecha85.setDate(fechaHoy.getDate() + 85);

var fecha187 = new Date();
fecha187.setDate(fechaHoy.getDate() - 187);

var fecha85_2 = new Date()
fecha85_2.setDate(fechaHoy.getDate() + 730);

var fecha187_2 = new Date();
fecha187_2.setDate(fechaHoy.getDate() - 1);


var fecharesto = fecha85 - fecha187;



document.write("</br> A Fecha hoy: " + fechaHoy);
document.write("</br> B Fecha 85: " + fecha85);
document.write("</br> C Fecha 187: " + fecha187);

document.write("</br> D Fecha 85: " + fecha85_2);
document.write("</br> E Fecha 187: " + fecha187_2);
document.write("</br> F Fecharesto: " + fecharesto);

document.write("</br> Ej 3 set time out: ");

temporizador();
function temporizador() {
    setTimeout(function(){ alert("Temporizador acabado"); }, 60000);
  }


document.write(" <br> ej 4 <br>");

  var textoActivo="google";
  var URL="https://www.google.com/"
  console.log("Haga click para volver a " + textoActivo.link(URL));


  document.write(" <br> ej 5 <br>");

  function clock(){
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    var seconds = new Date().getSeconds();
    document.write(hour + " : " + minutes + " : " + seconds + "<br>");
    setTimeout(clock,1000);
}
document.write("Reloj: " + clock() );

  document.write(" <br> ej 6 <br>");

  function potencias(base, exponente) {
    return Math.pow(base,exponente);
  }
  document.write("Potencia: " + potencias(5,5));


 