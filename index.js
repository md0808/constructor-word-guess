
// brings in the Word constructor Object
const Word = require("./word")

const inquirer = require("inquirer")

//changes when user selects a theme
let theme = [];
let guess = "";
let wins = 0;
let losses = 0;
let chosenWord = "";
const flowers = ["roses", "sunflowers", "tulips", "liliacs", "zinias", "hydrengeas"];
const trees = ["elm", "willow", "sycamore", "banyan", "dogwood", "birch", "maple"];
const plants = ["mercury", "venus", "jupiter", "saturn", "earth", "uranus"];


function startGame() {
    console.log("\n\r\n\r Welcome to Word Guess. \n");
    inquirer.prompt([
        {
            type: "list",
            name: "theme",
            message: "Choose a Theme",
            choices: ["Flowers", "Trees", "Planets"]
        }
    ]).then(function (inquirerResponse) {
        switch (inquirerResponse.theme) {
            case "Flowers":
                // randomly chooses word from flowers array and creates new object from Game Constructor
                console.log(`\n\r\n\rGuess which flower this is.\n\r\n\r`);
                theme = flowers;
                findChosenWord();
                findTheWord();
                break;
            case "Trees":
                console.log(`\n\r\n\rGuess which tree this is.\n`);
                theme = trees;
                findChosenWord();
                findTheWord();
                break;
            case "Planets":
                theme = plants
                console.log(`\n\r\n\rGuess which planet this is.\n\r\n\r`);
                findChosenWord();
                findTheWord();
                break;
        }
    });

}

startGame();

//chooses a random word from one of the above arrays
function findChosenWord() {
    chosenWord = theme[Math.floor(Math.random() * theme.length)];
}

//function that shows blanks for the word and asks the user to chose a letter. 
function findTheWord() {
    let word = new Word(chosenWord);
    let lettersGuessed = [];
    let triesRemaining = 10;
    let lettersRemaining = word.letters.length;
    let blanksAndLetters = "";
    word.addCharacter();
    guessLetters();
    //asks user for a letter, compares it to the letter in the word, 
    function guessLetters() {
        blanksAndLetters = word.toString()
        console.log(blanksAndLetters + "\n\r\n\r");
        inquirer.prompt([
            {
                type: "input",
                name: "letter",
                message: "Type a letter",
                validate: function(value) {
                    if (value.match(/^[A-Za-z]+$/)) {
                      return true;
                    }
                    return false;
                  }
            }
        ]).then(function (inquirerResponse) {
            guess = inquirerResponse.letter.toLowerCase();
            console.log(`you chose: ${guess}`);
            word.guessWord(guess);
            // need to return feedback about whether the letter belongs
            console.log(blanksAndLetters + "\n\r\n\r");
            if (!word.toString().includes(guess)) {
                console.log("Wrong\n");
                if (!(lettersGuessed).includes(guess)){
                    (lettersGuessed).push(guess);
                    triesRemaining--;
                }
                console.log(triesRemaining + " tries remaining, The letters you've guessed are: " + lettersGuessed);
                if (triesRemaining <= 0) {
                    losses++;
                    console.log("You lost.\n")
                        playAgainPrompt();
                }
                else {
                    console.log("try again");
                    guessLetters();
                }
            } else {
                console.log("correct!");
                if (word.toString().includes("_")) {
                    guessLetters();

                } else {
                    wins++
                    console.log(`\nYou Win!\n`)
                        playAgainPrompt();
                }
            }

        })
    }
    function playAgainPrompt() {
        console.log(`The answer is ${word.word} \n
        ${wins}  wins\n 
        ${losses} losses\n`);
    
        inquirer.prompt([
            {
                type: "list",
                name: "play_again",
                message: "Do You Want to Play Again?",
                choices: ["Yes", "No"]
    
            }
        ]).then(function (inquirerResponse) {
            if (inquirerResponse.play_again === "Yes") {
                startGame();
            } else {
                return;
            }
        });
    }
}

