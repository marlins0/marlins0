
function buttonClicked () {
  document.getElementById('button-1').classList.toggle('is-red');

}

function getsBigger() {
    document.getElementById('button-2').classList.toggle('gets-bigger');
}

function windowLoaded() {
  document.getElementById('button-1').addEventListener('click', buttonClicked);
  document.getElementById('button-2').addEventListener('mouseover', buttonClicked);

}

window.onload = windowLoaded;
