
function buttonClicked () {
  document.getElementById('button-1').style.background='#000000';//.classList.click('.is-red');

// }

// function getsBigger() {
    // document.getElementById('button-2').classList.mouseover('.gets-bigger');
// }

// function windowLoaded() {
  // document.getElementById('button-1').addEventListener('click', buttonClicked);
  // document.getElementById('button-2').addEventListener('mouseover', buttonHovered);

// }

// window.onload = windowLoaded;
const btn = document.getElementById('btn');

let index = 0;

const colors = ['salmon', 'green', 'blue', 'purple'];

btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});
