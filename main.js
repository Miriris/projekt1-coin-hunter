// toto budeš potřebovat později
/*
if (!( panacekX + panacekSirka < minceX || minceX + minceSirka < panacekX || panacekY + panacekVyska < minceY || minceY + minceVyska < panacekY)) {
	// panacek a mince se prekryvaji
}
*/

// sem začni psát svůj program

let panacek = document.querySelector('#panacek');
let x = 100;
let y = 100;
panacek.style.left = x + 'px';
panacek.style.top = y + 'px';

document.onkeydown = function zmenaPozicePanacka(e) {
  var event = window.event || e;

  // var kod = event.keyCode;
  //console.log(kod);

  if (event.keyCode == 37) {
    panacek.style.left =
      parseInt(window.getComputedStyle(panacek).getPropertyValue('left')) -
      10 +
      'px';
  } else if (event.keyCode == 38) {
    panacek.style.top =
      parseInt(window.getComputedStyle(panacek).getPropertyValue('top')) -
      10 +
      'px';
  } else if (event.keyCode == 39) {
    panacek.style.left =
      parseInt(window.getComputedStyle(panacek).getPropertyValue('left')) +
      10 +
      'px';
  } else if (event.keyCode == 40) {
    panacek.style.top =
      parseInt(window.getComputedStyle(panacek).getPropertyValue('top')) +
      10 +
      'px';
  } else {
    null;
  }
  // console.log(event);
};
