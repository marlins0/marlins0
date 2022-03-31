
function buttonClicked () {
  document.getElementById('button-1').classList.toggle('is-red');

}

function windowLoaded() {
  document.getElementById('button-1').addEventListener('click', buttonClicked);
}

window.onload = windowLoaded;
