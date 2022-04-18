const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const insertY = ["the soup kitchen", "Disneyland", "the White House"];
const insertZ = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"];

randomize.addEventListener('click', result);
// Create a new variable called newStory, and set its value to equal storyText.
// This is needed so we can create a new random story each time the button is pressed
// and the function is run. If we made changes directly to storyText, we'd only be able
// to generate a new story once.
function result(newStory = storyText) {
  var xItem = randomValueFromArray(:insertx:)
  var yItem = randomValueFromArray(:inserty:)
  var zItem = randomValueFromArray(:insertz:)
  if(customName.value !== '') {
    const name = customName.value;
    replace (let text = 'Bob saw the whole thing'; text.replace(/bob/g, customName.value);)

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);

  }

  story.textContent = ;
  story.style.visibility = 'visible';
}
