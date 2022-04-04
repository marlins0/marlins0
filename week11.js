
function buttonClicked () {
  document.getElementById('button-1').classList.click('.is-red');

}

function getsBigger() {
    document.getElementById('button-2').classList.mouseover('.gets-bigger');
 }

 function windowLoaded() {
   document.getElementById('button-1').addEventListener('click', buttonClicked);
   document.getElementById('button-2').addEventListener('mouseover', buttonHovered);

}

 window.onload = windowLoaded;
