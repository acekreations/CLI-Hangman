var Letter = require("./letter");

var Word = function(word){
  this.letters = [];
  this.word = word;
  this.addLetters = function(word){
    for (var i = 0; i < word.length; i++) {
      this.letters.push(new Letter(word[i]));
    }
  };
  this.displayWord = function(){
    var display = [];
    for (var i = 0; i < this.letters.length; i++) {
      display.push(this.letters[i].displayChar());
    }
    display = display.join(" ");
    console.log("\n\n" + display + "\n\n");
  };
  this.checkGuess = function(guess){
    var correct = false;
    for (var i = 0; i < this.letters.length; i++) {
      if(this.letters[i].checkChar(guess)){
        correct = true;
      }
    }
    if (correct) {
      console.log("-------------------------------------------------------");
      console.log("\n\nGood guess!");
      this.displayWord();
      return true;
    }
    else {
      console.log("-------------------------------------------------------");
      console.log("\n\nNice try.");
      this.displayWord();
      return false;
    }
  };
};

module.exports = Word;
