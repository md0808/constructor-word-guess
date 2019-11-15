//requires the constructor from .letter that creates an object from each letter
const Letter = require("./letter");
//constructor creates object around string assigned to word. 
const Word = function (word) {
    //makes the word part of the object
    this.word = word,
    //empty array which will take the letters of the string
    this.letters = [],
    // funtion that makes each letter of the word an element in the array
    this.toString = () => {
            //reasigns word to an empty string 
            let word = "";
            //for loop that goes into each letter of word array
            for (let i = 0; i < this.letters.length; i++) {
                //adds each letter back into the word, simultaneously assigning it the Letter Oject, and checks to see if the letters have been guessed.
                word += this.letters[i].checkLetter();
            }
            //returns the word which will have the values that have and haven't been guessed yet.
            return word;
        }
    // run ifGuessed function on each letter object
    this.guessWord = (guess) => {
        //takes in the user guess and assess it again each letter in the word
        for (let i = 0; i < this.letters.length; i++) {
            this.letters[i].ifGuessed(guess);
        }

    }
    // adds each character of the word to the string of letters while creating objects out of each letter
    this.addCharacter = () => {
        for (let i = 0; i < this.word.length; i++) {
            this.letters.push(new Letter(this.word[i]));
        }
    }
}


// const word = new Word("chair");
// word.addCharacter();
// word.guessWord("");
// console.log(word.toString());
// console.log (word.letters);
module.exports = Word;
