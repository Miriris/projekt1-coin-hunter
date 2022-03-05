// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

// sem začni psát svůj program

//prvni umisteni panacka
let panacek = document.querySelector('#panacek');
let X = 100;
let Y = 100;
panacek.style.left = X + 'px';
panacek.style.top = Y + 'px';

//nastaveni velikosti okna pro panacka (zatim panacek utika :-( )
function nastaveniVelikostiOkna() {
  let area = document.getElementById('area');
  area.style.width = window.innerWidth + 'px';
  area.style.height = window.innerHeight + 'px';
}

area.addEventListener('resize', nastaveniVelikostiOkna);
nastaveniVelikostiOkna();

//nastaveni pohybu podle prislusne sipky a obrazku
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
    sebraniMince();
  } else if (event.keyCode == 38) {
    panacek.style.top =
      parseInt(window.getComputedStyle(panacek).getPropertyValue('top')) -
      10 +
      'px';
    panacek.src = 'obrazky/panacek-nahoru.png';
    sebraniMince();
  } else if (event.keyCode == 39) {
    panacek.style.left =
      parseInt(window.getComputedStyle(panacek).getPropertyValue('left')) +
      10 +
      'px';
    panacek.src = 'obrazky/panacek-vpravo.png';
    sebraniMince();
  } else if (event.keyCode == 40) {
    panacek.style.top =
      parseInt(window.getComputedStyle(panacek).getPropertyValue('top')) +
      10 +
      'px';
    panacek.src = 'obrazky/panacek.png';
    sebraniMince();
  } else {
    null;
  }
  // console.log(event);
};

//nastaveni prvni pozice mince

let mince = document.getElementById('mince');

function nastaveniPoziceMince() {
  let minceX_prvni = Math.floor(Math.random() * window.innerWidth);
  let minceY_prvni = Math.floor(Math.random() * window.innerHeight);
  mince.style.left = minceX_prvni + 'px';
  mince.style.top = minceY_prvni + 'px';
}

nastaveniPoziceMince();

//prunik panacek a mince
//console.log(mince);
//console.log(panacek);
function sebraniMince() {
  let panacekX = parseInt(
    window.getComputedStyle(panacek).getPropertyValue('left'),
  );
  //console.log(panacekX);
  let panacekY = parseInt(
    window.getComputedStyle(panacek).getPropertyValue('top'),
  );
  //console.log(panacekY);
  let panacekSirka = parseInt(
    window.getComputedStyle(panacek).getPropertyValue('width'),
  );
  //console.log(panacekSirka);
  let panacekVyska = parseInt(
    window.getComputedStyle(panacek).getPropertyValue('height'),
  );
  //console.log(panacekVyska);
  let minceX = parseInt(
    window.getComputedStyle(mince).getPropertyValue('left'),
  );
  //console.log(minceX);
  let minceY = parseInt(window.getComputedStyle(mince).getPropertyValue('top'));
  //console.log(minceY);
  let minceSirka = parseInt(
    window.getComputedStyle(mince).getPropertyValue('width'),
  );
  let minceVyska = parseInt(
    window.getComputedStyle(mince).getPropertyValue('height'),
  );

  if (
    !(
      panacekX + panacekSirka < minceX ||
      minceX + minceSirka < panacekX ||
      panacekY + panacekVyska < minceY ||
      minceY + minceVyska < panacekY
    )
  ) {
    // panacek a mince se prekryvaji
    nastaveniPoziceMince();
    //console.log('funguje');
  }
}
