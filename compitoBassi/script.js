//dichiarazione elementi
const chartcomuni = document.getElementById('chartcomuni');
let pulsante = document.getElementById('pulsante');
let roma = document.getElementById('roma');
let mil = document.getElementById('mil');
let nap = document.getElementById('nap');

var map = L.map('map').setView([43.75596957065381, 11.198356059409974], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


//funzioni
function mostraGrafico(){
    
    const nomi = [];
    const popolazione = [];
    for(let i=0;i<comuni.length;i++){
        nomi[i] = comuni[i].nome;
        popolazione[i] = comuni[i].abitanti;
    }
    console.log(nomi);
    console.log(popolazione);

  new Chart(chartcomuni, {
    type: 'bar',
    data: {
      labels: nomi,
      datasets: [{
        label: '#Numero di abitanti: ',
        data: popolazione,
        borderColor: '#2b2b2b',
        backgroundColor: '#03fcb1',
        
        borderWidth: 1
      }]
    },
    options: {
        
        indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


function mostraComuni(){
    for(let i=0;i<comuni.length;i++){
        var marker = L.marker([comuni[i].coordinate.lat, comuni[i].coordinate.lon]).addTo(map);
        marker.bindPopup("Città: " + comuni[i].nome + "<br>" + "Num abitanti: " + comuni[i].abitanti);
    }
}

function vaiRoma(){
    map.setView([comuni[0].coordinate.lat, comuni[0].coordinate.lon],10);
}

function vaiMilano(){
    map.setView([comuni[1].coordinate.lat, comuni[1].coordinate.lon],10);
}

function vaiNapoli(){
    map.setView([comuni[2].coordinate.lat, comuni[2].coordinate.lon],10);;
}
//gestione eventi
document.addEventListener("DOMContentLoaded", mostraGrafico);
pulsante.onclick = mostraComuni;
roma.onclick = vaiRoma;
mil.onclick = vaiMilano;
nap.onclick = vaiNapoli;