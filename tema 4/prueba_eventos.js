//Prueba eventos lic sobe un párrafo, sobre un div, sobre una imagen, un h2
//Con el focus

const btn = document.querySelector('button');
const div = document.querySelector('div');
const img = document.querySelector('img');
const h2 = document.querySelector('h2');
const text = document.querySelector('input[type="text"]');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onclick = function() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}


div.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
  }

  img.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
  }

  h2.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCol;
  }


text.addEventListener('focus', (event) => {
    event.target.style.background = 'red';
  });

btn.onclick = function() {
    const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    btn.style.backgroundColor = rndCol;

}
