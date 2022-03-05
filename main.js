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
let panacekY = 100;
panacek.style.left = panacekX + 'px';
panacek.style.top = panacekY + 'px';

//nastaveni velikosti okna pro panacka (zatim panacek utika :-( )
function nastaveniVelikostiOkna() {
  let area = document.getElementById('area');
  area.style.width = window.innerWidth + 'px';
  area.style.height = window.innerHeight + 'px';
}

area.addEventListener('resize', nastaveniVelikostiOkna);
nastaveniVelikostiOkna();

//nastaveni pohybu podle prislusne sipky
document.onkeydown = function zmenaPozicePanacka(e) {
  let event = window.event || e;

  // var kod = event.keyCode;
  //console.log(kod);

  if (event.keyCode == 37) {
    panacek.style.left =
      parseInt(window.getComputedStyle(panacek).getPropertyValue('left')) -
      10 +
      'px';
    panacek.src = 'obrazky/panacek-vlevo.png';
  } else if (event.keyCode == 38) {
    panacek.style.top =
      parseInt(window.getComputedStyle(panacek).getPropertyValue('top')) -
      10 +
      'px';
    panacek.src = 'obrazky/panacek-nahoru.png';
  } else if (event.keyCode == 39) {
    panacek.style.left =
      parseInt(window.getComputedStyle(panacek).getPropertyValue('left')) +
      10 +
      'px';
    panacek.src = 'obrazky/panacek-vpravo.png';
  } else if (event.keyCode == 40) {
    panacek.style.top =
      parseInt(window.getComputedStyle(panacek).getPropertyValue('top')) +
      10 +
      'px';
    panacek.src = 'obrazky/panacek.png';
  } else {
    null;
  }
  // console.log(event);
};

//nastaveni prvni pozice mince
let mince = document.getElementById('mince');
let minceX = Math.floor(Math.random() * window.innerWidth);
let minceY = Math.floor(Math.random() * window.innerHeight);
mince.style.left = minceX + 'px';
mince.style.top = minceY + 'px';
