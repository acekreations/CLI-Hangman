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
    for (var i = 0; i < this.letters.length; i++) {
      this.letters[i].checkChar(guess);
    }
  };
};

module.exports = Word;
