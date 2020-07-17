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

const puzzleEl = document.querySelector("#puzzle");
const guessesEl = document.querySelector("#guesses");
let game1;
//let game1 = new Hangman("Car Parts", 2);

///puzzleEl.textContent = game1.puzzle;
// game1.makeGuess("c");
// game1.makeGuess("t");
// game1.makeGuess("x");
///guessesEl.textContent = game1.statusMessage;
// console.log(game1.getPuzzle());
// console.log(game1.remainingGuesses); //only if there is a wrong guess the remaning guess decreases and console to rendering on screen with below code

//the above 2 lines are used to show the word before the furst guess

// const game2 = new Hangman("New Jersey", 4);
// //game2.makeGuess("w");

// console.log(game2.getPuzzle());
// console.log(game2.remainingGuesses);

window.addEventListener("keypress", (e) => {
  const guess = String.fromCharCode(e.charCode);
  game1.makeGuess(guess);
  render();
  //puzzleEl.textContent = game1.puzzle; //renders on screen when a letter is typed
  //   console.log(game1.remainingGuesses);//coded below to render on screen
  //guessesEl.textContent = game1.statusMessage; //remaing as well as ststus
  //console.log(game1.status);
});

// getPuzzle((error, puzzle) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(puzzle);
//   }
// });

//promise
// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

const render = () => {
  puzzleEl.innerHTML = "";
  //puzzleEl.textContent = game1.puzzle; //adding text content to puzzle element
  guessesEl.textContent = game1.statusMessage;

  //manipulating puzzle element
  //split after each element
  game1.puzzle.split("").forEach((letter) => {
    const letterEl = document.createElement("span");
    letterEl.textContent = letter;
    puzzleEl.appendChild(letterEl);
  });
};

const startGame = async () => {
  const puzzle = await getPuzzle("2");
  game1 = new Hangman(puzzle, 5); //new game instance
  render(); //rendering
};

document.querySelector("#reset").addEventListener("click", startGame); //start by clciking

startGame(); //default start

//promise
// getPuzzle("2")
//   .then((puzzle) => {
//     console.log(puzzle);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// Making an HTTP request
// const request = new XMLHttpRequest();

// request.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     console.log(e.target.status); //200 if completed
//     const data = JSON.parse(e.target.responseText); //parsing the json we got on request
//     console.log(data);
//   } else if (e.target.readyState === 4) {
//     console.log("Error has taken place");
//   }
// });

// request.open("GET", "http://puzzle.mead.io/puzzle?wordCount=3");
// request.send();

//challenge
//passing country code, which ever country code we want we can pass here
// getCountry("US", (error, country) => {
//   if (error) {
//     console.log(`Error: ${error}`);
//   } else {
//     console.log(`Country name is : ${country.name}`);
//   }
// });

// const countryCode = "US";
// // Making an HTTP request
// const countryRequest = new XMLHttpRequest();

// countryRequest.addEventListener("readystatechange", (e) => {
//   if (e.target.readyState === 4 && e.target.status === 200) {
//     const data = JSON.parse(e.target.responseText);
//     const country = data.find((country) => country.alpha2Code === countryCode);
//     console.log(country.name);
//   } else if (e.target.readyState === 4) {
//     console.log("Unable to fetch data");
//   }
// });

// countryRequest.open("GET", "http://restcountries.eu/rest/v2/all");
// countryRequest.send();

// getCountry("US")
//   .then((country) => {
//     console.log(country);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

// //promise
// getCountry('MX').then((country) => {
//     console.log(country.name)
// }, (err) => {
//     console.log(`Error: ${err}`)
// })

// fetch api challenge

// getCountry("MX")
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });

//asyncawait
// getCurrentContry()
//   .then((country) => {
//     console.log(country.name);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// getLocation()
//   .then((data) => {
//     //data contains location object

//     return getCountry(data.country); //promis chaning
//     // console.log(
//     //   `City: ${data.city}, Region:${data.region}, Country:${data.county}`
//     // );
//   })
//   .then((country) => {
//     console.log(country.name);
//   })

//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });
