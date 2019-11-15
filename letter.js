// takes in a letter from the randomly selected word
function Letter (character) {
    //renames it to this.letter, making it part of the object
    this.letter = character,
    // when word is asign, all letters are defaulted to the state of not being guessed
    this.guessed = false,
    //a function that checks to see if the letter has been guessed, and if not, displays a blank for it.
    this.checkLetter = () => {
        if (this.guessed === true){
           return this.letter
        } else {
            return " _";
        }
    }
    // function that takes in the user guess and compares it to this.letter. If its the same, changes boolean to true.
    this.ifGuessed = (guess) => {
        if (guess === this.letter){
            this.guessed = true;
        }
    }
}

// let letter = new Letter("a");
// letter.ifGuessed("b");
// console.log(letter.checkLetter());
// console.log(letter.guessed);
module.exports = Letter;

