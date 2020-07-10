// class Hangman = function (word, remainingGuesses) {
//   this.word = word.toLowerCase().split("");
//   this.remainingGuesses = remainingGuesses;
//   this.guessedLetters = [];
//   this.status = "playing";
// };//o;d type of vclass
// class Hangman {
//   constructor(word, remainingGuesses) {
//     this.word = word.toLowerCase().split("");
//     this.remainingGuesses = remainingGuesses;
//     this.guessedLetters = [];
//     this.status = "playing";
//   }
// }
// Hangman.prototype.getStatusMessage = function () {
//   if (this.status === "playing") {
//     return `Guesses left: ${this.remainingGuesses}`;
//   } else if (this.status === "failed") {
//     return `Nice try!The word was "${this.word.join("")}".`;
//   } else {
//     return `Great work! You guesses the work`;
//   }
// };

// Hangman.prototype.getPuzzle = function () {
//   let puzzle = "";

//   this.word.forEach((letter) => {
//     if (this.guessedLetters.includes(letter) || letter === " ") {
//       puzzle += letter;
//     } else {
//       puzzle += "*";
//     }
//   });

//   return puzzle;
// };

// Hangman.prototype.calculateStatus = function () {
//   //method2
//   //   const letterUnguessed = this.word.filter((letter) => {
//   //     return !this.guessedLetters.includes(letter);
//   //   });
//   //   const finished = letterUnguessed.lenght === 0;// chwcking if all the letters are guesses
//   //   //method1
//   //   let finished = true;
//   //   this.word.forEach((letter) => {
//   //     if (this.guessedLetters.includes(letter)) {
//   //       //matching the guessed and word
//   //       finished = true; //until last letter
//   //     } else {
//   //       finished = false;
//   //     }
//   //   }); //method 1 ends

//   const finished = this.word.every((letter) => {
//     return this.guessedLetters.includes(letter);
//   });

//   if (this.remainingGuesses === 0) {
//     this.status = "failed";
//   } else if (finished) {
//     this.status = "finished";
//   } else {
//     this.status = "playing";
//   }
// };

// Hangman.prototype.makeGuess = function (guess) {
//   guess = guess.toLowerCase();
//   const isUnique = !this.guessedLetters.includes(guess); // checks uniqueness
//   const isBadGuess = !this.word.includes(guess); // check if the word is wrong
//   if (this.status != "playing") {
//     //check game has been succesd by finishing r failing
//     return; //return undefined
//   }
//   // the below code runs only if status is playign
//   if (isUnique) {
//     this.guessedLetters.push(guess);
//   }
//   if (isUnique && isBadGuess) {
//     this.remainingGuesses--;
//   }
//   this.calculateStatus();
// };

class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [];
    this.status = "playing";
  }
  calculateStatus() {
    const finished = this.word.every((letter) => {
      return this.guessedLetters.includes(letter) || letter === " "; //fixed for if the letter is completed with space
    });

    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }
  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try!The word was "${this.word.join("")}".`;
    } else {
      return `Great work! You guesses the word`;
    }
  }
  get puzzle() {
    let puzzle = "";

    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });

    return puzzle;
  }

  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess); // checks uniqueness
    const isBadGuess = !this.word.includes(guess); // check if the word is wrong
    if (this.status != "playing") {
      //check game has been succesd by finishing r failing
      return; //return undefined
    }
    // the below code runs only if status is playign
    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
    this.calculateStatus();
  }
}
