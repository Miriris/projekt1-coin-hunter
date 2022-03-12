// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

// sem začni psát svůj program

//prvni umisteni panacka
let panacek = document.querySelector('#panacek');
let panacekX = 100;
panacek.style.left = panacekX + 'px';
let panacekY = 100;
panacek.style.top = panacekY + 'px';
let panacekSirka = parseInt(
  window.getComputedStyle(panacek).getPropertyValue('width'),
);
let panacekVyska = parseInt(
  window.getComputedStyle(panacek).getPropertyValue('height'),
);
let mince = document.getElementById('mince');
let minceX = 50;
let minceY = 50;
let minceSirka = parseInt(
  window.getComputedStyle(mince).getPropertyValue('width'),
);
let minceVyska = parseInt(
  window.getComputedStyle(mince).getPropertyValue('height'),
);

//nastaveni velikosti okna pro panacka
//nastaveni pohybu podle prislusne sipky a obrazku
document.onkeydown = function zmenaPozicePanacka(e) {
  let event = window.event || e;
  // var kod = event.keyCode;
  //console.log(kod);

  if (event.keyCode == 37 && panacekX > 0) {
    panacekX = panacekX - 10;
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek-vlevo.png';
  } else if (event.keyCode == 38 && panacekY > 0) {
    panacekY = panacekY - 10;
    panacek.style.top = panacekY + 'px';
    panacek.src = 'obrazky/panacek-nahoru.png';
  } else if (
    event.keyCode == 39 &&
    panacekX < window.innerWidth - panacekSirka
  ) {
    panacekX = panacekX + 10;
    panacek.style.left = panacekX + 'px';
    panacek.src = 'obrazky/panacek-vpravo.png';
  } else if (
    event.keyCode == 40 &&
    panacekY < window.innerHeight - panacekVyska
  ) {
    panacekY = panacekY + 10;
    panacek.style.top = panacekY + 'px';
    panacek.src = 'obrazky/panacek.png';
  } else {
    null;
  }
  sebraniMince();
  // console.log(event);
};

//nastaveni prvni pozice mince

function nastaveniPoziceMince() {
  minceX = Math.floor(Math.random() * (window.innerWidth - minceSirka));
  minceY = Math.floor(Math.random() * (window.innerHeight - minceVyska));
  mince.style.left = minceX + 'px';
  mince.style.top = minceY + 'px';
}

nastaveniPoziceMince();

//prunik panacek a mince
//console.log(mince);
//console.log(panacek);
function sebraniMince() {
  let zvukMince = document.getElementById('zvukmince');

  if (
    !(
      panacekX + panacekSirka < minceX ||
      minceX + minceSirka < panacekX ||
      panacekY + panacekVyska < minceY ||
      minceY + minceVyska < panacekY
    )
  ) {
    // panacek a mince se prekryvaji
    // prehrani zvuku mince
    zvukMince.play();
    nastaveniPoziceMince();
    zvetsPocitadlo();
    //console.log('funguje');
  }
}

//pocitadlo + zaverecna fanfara
function zvetsPocitadlo() {
  let pocitadlo = document.getElementById('score').innerText;
  pocitadlo = parseInt(pocitadlo);

  if (pocitadlo < 5) {
    pocitadlo = pocitadlo + 1;
    //console.log(pocitadlo);
    document.getElementById('score').textContent = pocitadlo;
  } else {
    document.getElementById('hudba').pause();
    pocitadlo = 6;
    document.getElementById('score').innerHTML =
      'Dosáhl jsi ' + pocitadlo + ' bodů.' + '<br /><br/>' + 'Jsi Vítěz!!!';
    document.getElementById('zvukfanfara').play();
    oslavVitezstvi();
  }
}

function oslavVitezstvi() {
  panacekX = window.innerWidth / 2;
  panacekY = window.innerHeight / 2;
  panacek.style.left = panacekX + 'px';
  panacek.style.top = panacekY + 'px';
  panacek.src = 'obrazky/panacek.png';
}
