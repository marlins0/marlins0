// BUTTON document.querySelector('button');

// CLASS document.querySelector('.new-quote button');

// ID document.querySelector('#js-new-quote');

const quoteButton = document.querySelector('#js-new-quote'); //variable to button

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';{

}
// https://api.whatdoestrumpthink.com/api/v1/quotes/random
// https://catfact.ninja/fact

quoteButton.addEventListener ('click', getQuote); //looking for click on BUTTON

async function getQuote() {
  //what happens when we evoke this function
  console.log("quote button was clicked");
  //want to make sure this works before putting stuff in it, this makes something appear in inspector

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);
    displayQuote(json.message);
  } catch (err) {
    console.log(err)
    alert('Failed');
  }

  function displayQuote(quote)  {
    const quoteText =document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
  }

//   window.onload = choosePic;
//
// var myPix = new Array("img/trump0.jpg","img/trump1.jpg","img/trump2.jpg","img/trump3.jpg","img/trump4.jpg","img/trump5.jpg");
//
// function choosePic() {
//      var randomNum = Math.floor(Math.random() * myPix.length);
//      document.getElementById("myPicture").src = myPix[randomNum];

  // var images = [],
  // index = 0;
  // images[0] = <a href="img/trump0.jpg">
  //   <img src="img/trump0.jpg" alt="image of Trump" width="300">;
  // images[1] = <a href="img/trump1.jpg">
  //   <img src="img/trump1.jpg" alt="image of Trump" width="300">;
  // images[2] = <a href="img/trump2.jpg">
  //   <img src="img/trump2.jpg" alt="image of Trump" width="300">;
  // images[3] = <a href="img/trump3.jpg">
  //   <img src="img/trump3.jpg" alt="image of Trump" width="300">;
  // images[4] = <a href="img/trump4.jpg">
  //   <img src="img/trump4.jpg" alt="image of Trump" width="300">;
  // images[5] = <a href="img/trump5.jpg">
  //     <img src="img/trump5.jpg" alt="image of Trump" width="300">;
  // index = Math.floor(Math.random() * images.length);
  // document.write(images[index]);


}
