let myVariable;
myVariable = 'Marita';

let myVariable2 = 'Peter';

/* This is a multi-line
comment */

// This is a single-line comment

//VARIABLES

let myVariable = 'bob'; //STRING

let myNumber = 3; //NUMBERS

let myBoolean = true; //BOOLEANS
let myBoolean = false;

let myArray = [1, 'bob', true]; //ARRAY

let myObjects = document.querySelector('p');
//OBJECTS, BUT ALL OF THE ABOVE ARE OBJECTS TOO

//OPERATORS

6 + 9; //ADDITION
'Hello' + 'World' //STRING ADDITION --> 'HelloWorld'
5 - 3 // SUBTRACTION
2 * 7 // MULTIPLICATION
10/2 // DIVISION

//ASSIGNMENT --> =  (let this be)

//EQUALITY

myNumber === 4; //Is myMumber equal to 4 <-- this will result in false bc myNumber = 3

//NOT, DOES-NOT-EQUAL
!(myNumber === 3); //! = opposite of whats in parenthesis

//!(TRUE) = false
myVariable!==3 // FALSE (this does not equal 3? answer is FALSE)


//CONDITIONALS

let iceCream = 'chocolate';

if(iceCream ==== 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
  else {
  alert('Aww, but chocolate is my favorite')
  }
}

//EVENT LISTENERS

document.querySelector('html'),addEventListener('click',function() {
    alert('Ouch! Stop poking me!');  
});
