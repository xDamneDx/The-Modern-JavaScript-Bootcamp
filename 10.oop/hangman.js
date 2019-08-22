const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guesses = ['c', 'b', 't', 'e'];
    this.getPuzzle = function () {
        let result = '';
        
        this.word.forEach((letter) => {
            if (this.guesses.includes(letter) || letter === ' ') {
                result += letter;
            } else {
                result += '*';
            }
        });

        return result;
    };
};

const firstGame = new Hangman('Cat', 2);
const secondGame = new Hangman('New Jersey', 6);

console.log(firstGame.getPuzzle());
console.log(secondGame.getPuzzle());
