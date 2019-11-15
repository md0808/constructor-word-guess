const Word = require("./word");

const inquirer = require("inquirer");
const flowers = ["roses", "sunflowers", "tulips", "liliacs", "zinias", "hydrengeas"];
const trees = ["elm", "willow", "sycamore", "banyan", "dogwood", "birch"];
const plants = ["mars", "venus", "jupiter", "saturn", "earth", "uranus"];


function Game (user, theme){
    this.user = "",
    this.numGuesses = 10,
    this.wins = 0,
    this.losses = 0,
    this.theme = [],
    this.guess = "",
    this.chosenWord = "",
    this.word = "",
    this.findChosenWord = () => {
        chosenWord = theme[Math.floor(Math.random() * theme.length)];
    },
    this.findTheWord = () => {
        let word = new Word(chosenWord);
        word.addCharacter();
        word.guessWord("");
        console.log(word.toString() + "\n\r\n\r");
        chooseLetter();
    },
    this.chooseLetter = () => {
        inquirer.prompt ([
            {
                type: "input",
                name: "letter",
                message: "Type a letter"
            }
        ]).then(function (inquirerResponse){
            guess = inquirerResponse.letter
            console.log (`you chose: ${guess}`);
            word.guessWord(guess);
            console.log(word.toString() + "\n\r\n\r");
    
    
        })
    }
}

  function startGame (){
        console.log("\n\r\n\r");
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
