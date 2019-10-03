const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guesses = [];
};
 
Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();

    if (!this.guesses.includes(guess)) {
        this.guesses += guess;
        if (!this.word.includes(guess)) {
            this.remainingGuesses--;
        }
    }
};

Hangman.prototype.getPuzzle = function () {
    let result = '';
    
    this.word.forEach((letter) => {
        if (this.guesses.includes(letter) || letter === ' ') {
            result += letter;
        } else {
            result += '*';
        }
    });

    return result + `. Remaining guesses: ${this.remainingGuesses}`;
};

const firstGame = new Hangman('Cat', 2);
const secondGame = new Hangman('New Jersey', 6);

firstGame.makeGuess('c');
firstGame.makeGuess('t');
firstGame.makeGuess('z');
console.log(firstGame.getPuzzle());

secondGame.makeGuess('w');
console.log(secondGame.getPuzzle());
