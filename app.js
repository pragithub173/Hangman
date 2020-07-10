// Primitive value: string, number, boolean, null, undefined

// Object: myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
// Function: myFunc --> Function.prototype --> Object.prototype --> null
// String: myString --> String.prototype --> Object.prototype --> null
// Number: myNumber --> Number.prototype --> Object.prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null

// const product = 'Computer'
// console.log(product)

// const otherProduct = new String('Phone')
// console.log(otherProduct)

//updating text content
const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");

const game1 = new Hangman("Cat", 2);

//rendering initial puzzle on screen
puzzleEl.textContent = game1.puzzle;

// game1.makeGuess("c");
// game1.makeGuess("t");
// game1.makeGuess("x");

guessesEl.textContent = game1.StatusMessage;
// console.log(game1.getPuzzle());
// console.log(game1.remainingGuesses); //only if there is a wrong guess the remaning guess decreases and console to rendering on screen with below code

//the above 2 lines are used to show the word before the furst guess

// const game2 = new Hangman("New Jersey", 4);
// //game2.makeGuess("w");

// console.log(game2.getPuzzle());
// console.log(game2.remainingGuesses);

console.log(game1.status);

window.addEventListener("keypress", function (e) {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  // console.log(game1.getPuzzle()); //this is updated to below
  puzzleEl.textContent = game1.Puzzle; //renders on screen when a letter is typed
  //   console.log(game1.remainingGuesses);//coded below to render on screen
  guessesEl.textContent = game1.StatusMessage; //remaing as well as ststus
  //console.log(game1.status);
});
