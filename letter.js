var Letter = function(char, guess) {
  this.char = char;
  this.guessed = false;
  this.displayChar = function(){
    if (this.guessed === true) {
      return this.char;
    }
    else {
      return "_";
    }
  };
  this.checkChar = function(guess){
    if (guess === this.char) {
      this.guessed = true;
      console.log("CORRECT!");
    }
  };
};

module.exports = Letter;
