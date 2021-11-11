function randomIntFromInterval(min, max) { // min and max incluidos 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
var numeroal = randomIntFromInterval(1, 3);
document.write("Imagen: <br>");
document.write("<img src='./"+numeroal+".jpeg' width='30%' height='30%'>"); 