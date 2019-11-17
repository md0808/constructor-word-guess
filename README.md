# constructor-word-guess
Command line game in the spirit of hang man
https://github.com/md0808/liri-node-app

The game allows the user to chose one of three themes and randomly selects a word within the theme. Based on the number of blanks presented that represent the number of letters in the word, the user guesses the letter. The game is programmed so that an object is created for each word that contains information about the letters in the word, and functions that keep track of the what to reveal to the user upon the correct guess, and compares the user guess against the letters in the word. Each letter within the word is also an object that contains a function keeps track of whether or not the letter has yet been guessed, and displays the letter once it has been.
Inquirer npm is utilized take in input from the user an display multiple choice questions when required.

## Visual Documentation
[Click here for video documentation](https://md0808.github.io/constructor-word-guess/index.html)

<img width="424" alt="Screen Shot 2019-11-17 at 1 37 47 PM" src="https://user-images.githubusercontent.com/51139840/69012815-94aa4d80-093f-11ea-9be5-e6c5f9783591.png">

<img width="424" alt="Screen Shot 2019-11-17 at 1 37 57 PM" src="https://user-images.githubusercontent.com/51139840/69012821-a855b400-093f-11ea-9197-7379b78e817b.png">


<img width="422" alt="Screen Shot 2019-11-17 at 1 38 18 PM" src="https://user-images.githubusercontent.com/51139840/69012850-d9ce7f80-093f-11ea-8b11-6568e6b92ffb.png">


<img width="423" alt="Screen Shot 2019-11-17 at 1 41 47 PM" src="https://user-images.githubusercontent.com/51139840/69012873-02ef1000-0940-11ea-9039-1e1f5650854a.png">



## Instructions
1. Clone the github repository by copying the link above the table of files in the repository.
2. From the commandline, navigate to the root folder of the constructor-word-guess
3. Requires installation of Node.js and the npm inquirier package.
4. Type ``` node index.js``` into the commandline to begin the game

## Technologies Used
 * Node.js
 * Inqirer NPM
 


