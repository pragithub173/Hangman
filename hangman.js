const Hangman = function (word, remainingGuesses) {
  this.word = word.toLowerCase().split("");
  this.remainingGuesses = remainingGuesses;
  this.guessedLetters = [];
  this.status = "playing";
};

Hangman.prototype.getPuzzle = function () {
  let puzzle = "";

  this.word.forEach((letter) => {
    if (this.guessedLetters.includes(letter) || letter === " ") {
      puzzle += letter;
    } else {
      puzzle += "*";
    }
  });

  return puzzle;
};

Hangman.prototype.calculateStatus = function () {
  //method2
  //   const letterUnguessed = this.word.filter((letter) => {
  //     return !this.guessedLetters.includes(letter);
  //   });
  //   const finished = letterUnguessed.lenght === 0;// chwcking if all the letters are guesses
  //   //method1
  //   let finished = true;
  //   this.word.forEach((letter) => {
  //     if (this.guessedLetters.includes(letter)) {
  //       //matching the guessed and word
  //       finished = true; //until last letter
  //     } else {
  //       finished = false;
  //     }
  //   }); //method 1 ends

  const finished = this.word.every((letter) => {
    return this.guessedLetters.includes(letter);
  });

  if (this.remainingGuesses === 0) {
    this.status = "failed";
  } else if (finished) {
    this.status = "finished";
  } else {
    this.status = "playing";
  }
};

Hangman.prototype.makeGuess = function (guess) {
  guess = guess.toLowerCase();
  const isUnique = !this.guessedLetters.includes(guess); // checks uniqueness
  const isBadGuess = !this.word.includes(guess); // check if the word is wrong
  if (isUnique) {
    this.guessedLetters.push(guess);
  }
  if (isUnique && isBadGuess) {
    this.remainingGuesses--;
  }
  this.calculateStatus();
};
