var Word = require("./word");
var inq = require("inquirer");

var wordList = ["corgi", "retriever", "bulldog", "boxer", "beagle", "pug", "dobermann", "akita"];

function setWord() {
  var randNum = Math.floor(Math.random() * wordList.length);
  var wordSelction = wordList[randNum];
  var word = new Word(wordSelction);
  word.addLetters(wordSelction);
  return word;
}

function playGame() {
  var word = setWord();
  console.log(word);
}

playGame();

// test.displayWord();
//
// test.checkGuess("C");
//
// test.displayWord();
//
// test.checkGuess("a");
//
// test.displayWord();
