var div = document.getElementById('midiv');
/*
var mc = new Hammer(document.getElementById(miimagen));

mc.on("panright", function() {
    foto += 1;
    document.getElementById("miimagen").src=foto + '.png';
    document.getElementById('izquierda').disabled=false;
} );

mc.on("panleft", function() {
    document.getElementById("miimagen").src=foto + '.png';
    foto = foto - 1;
} );
*/

var foto = 1;
var ocultar = document.getElementById("izquierda");

document.getElementById("derecha").onclick = function () {
    foto += 1;
    document.getElementById("miimagen").src=foto + '.png';
    document.getElementById('izquierda').disabled=false;
    };
ocultar.disabled = true;

if (foto == "4") {
    ocultar.disabled = true;
    var ocultar2 = document.getElementById("derecha");
    
    }

document.getElementById("izquierda").onclick = function () {
    document.getElementById("miimagen").src=foto + '.png';
    foto = foto - 1;
    };

function show() {
    document.getElementById('izquierda').style.visibility = 'visible';
    document.getElementById('derecha').style.visibility = 'visible';
}

function dontshow() {
    document.getElementById('izquierda').style.visibility = 'hidden';
    document.getElementById('derecha').style.visibility = 'hidden';
}


function handleOrientation(event) {
    var alpha    = event.alpha;
    var beta     = event.beta;
    var gamma    = event.gamma;
    console.log(alpha, beta, gamma);
    if (alpha >= 20) {
        alert("derecha");
    }
    if (alpha <= -20) {
        alert("izquierda");
    }
  }


  //Escucha el evento deviceorientation
window.addEventListener('deviceorientation', handleOrientation);
 

//declara las variables de posicion y cambia la imagen dependiendo de la posicion
function handleOrientation(event) {
const alpha = event.alpha;
const beta = event.beta;
const gamma = event.gamma;

document.getElementById('miimagen').style.transform = "rotateX(" + alpha + "deg) rotateY(" + beta  + "deg)";
}

      
  


/*
    mc.on("panleft", function() {
    foto += 1;
    document.getElementById("miimagen").src=foto + '.png';
    document.getElementById('izquierda').disabled=false;
    });


    var manager = new Hammer.Manager(mc);
    var Swipe = new Hammer.Swipe();
    manager.add(Swipe);

    manager.on('swipe', function() {
        foto += 1;
        document.getElementById("miimagen").src = foto + '.png';
        document.getElementById('izquierda').disabled=false;
    });

    */