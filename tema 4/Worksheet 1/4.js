//Dibujar en celdas
/*
window.onload = function() {
function genera_tabla() {
    var body = document.getElementsByTagName("body")[0];
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");

    for (var i = 0; i < 10; i++) {
      var hilera = document.createElement("tr");
      for (var j = 0; j < 10; j++) {
       
        var celda = document.createElement("td");
        var textoCelda = document.createTextNode("&nbps");
        celda.appendChild(textoCelda);
        hilera.appendChild(celda);
      }
      tblBody.appendChild(hilera);
    }

    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    tabla.setAttribute("border", "2");
  }
genera_tabla();
window.addEventListener("mouseover", myScript);


var MyTable = document.getElementsByTagName(Table);
var rows = MyTable.getElementsByTagName('tr');
for (var i = 0; i < rows.length; i++) {
    rows[i].onmouseover = function() {
        this.style.backgroundColor = '#15ff00';
    }
    rows[i].onmouseout = function() {
        this.style.backgroundColor = '#ffffff';
    }
}


  };

*/
var ctrlKeyPressed = instanceOfKeyboardEvent.ctrlKey;
var shiftKeyPressed = instanceOfKeyboardEvent.shiftKey;




  function creartabla(){
    document.write("<table border='1px' width='300px' height='300px' id='tabla'> ");
        for (let j = 1; j <= 20; j++) {
            document.write("<tr>");
                for(let i=1; i<=20;i++){
                document.write("<td id='co"+(j+i)+"' onmousemove='pintar(event)'></td>");
                }
            document.write("</tr>");
        }

    document.write("</table>");
    }
creartabla();

    

    function pintar(event){
    if (event.ctrlKey) {
        document.getElementByid('td').onmouseover.target.style.backgroundColor='red';
        }
        if(shiftKeyPressed){
        event.target.style.backgroundColor='blue';
        }
        if(event.altKey){
            event.target.style.backgroundColor='white';
        }

    }
    pintar();

    function borrar(event){
        document.write("<p>blas</p>");
        tabla = document.getElementById("tabla");	
        fat=tabla.parentNode;
        fat.removeChild(tabla);
        /*if(event2.keyCode==8){
            for (let j = 1; j <= 20; j++) {
                for(let i=1; i<=20;i++){
                    document.getElementById("co"+(j+i)).style = "background-color: white";
                }
            }
        }*/
    }