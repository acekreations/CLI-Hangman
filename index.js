var Word = require("./word");
var inq = require("inquirer");

var wordList = ["corgi", "retriever", "bulldog", "boxer", "beagle", "pug", "dobermann", "akita"];

var guessedLetters = [];
var guessesLeft = 10;

function initializeGame() {
  console.log("Starting Game!");
  guessedLetters = [];
  guessesLeft = 10;
  var word = setWord();
  word.displayWord();
  playGame(word);
}

function setWord() {
  var randNum = Math.floor(Math.random() * wordList.length);
  var wordSelction = wordList[randNum];
  var word = new Word(wordSelction);
  word.addLetters(wordSelction);
  return word;
}

function playGame(word) {
  if (guessesLeft > 0) {
    console.log(guessesLeft + " guesses left\n\n");
    console.log("-------------------------------------------------------\n\n");

    inq.prompt([
      {
        type: "input",
        message: "Guess a letter - ",
        name: "guess",
        validate: function(input){
          if (guessedLetters.indexOf(input) === -1 && input.length === 1) {
            return true;
          }
          return "You already guess that";
        }
      }
    ]).then(function(res){
      guessedLetters.push(res.guess);
      if (!word.checkGuess(res.guess)) {
        guessesLeft--;
      }
      playGame(word);
    });

  }
  else {
    console.log("-------------------------------------------------------");
    console.log("Your out of guesses... The word was " + word.word + ".");
    console.log("-------------------------------------------------------\n\n");
  }
}

initializeGame();

// test.displayWord();
//
// test.checkGuess("C");
//
// test.displayWord();
//
// test.checkGuess("a");
//
// test.displayWord();
