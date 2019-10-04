const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guesses = [];
    this.status = 'playing...';
};

Hangman.prototype.getStatus = function () {
    const finished = this.word.every((letter) => this.guesses.includes(letter));

    if (this.remainingGuesses === 0) {
        this.status = 'failed.';
    } else if (finished) {
        this.status = 'finished!'
    } else {
        this.status = 'playing...'
    }
};
 
Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();

    if (!this.guesses.includes(guess)) {
        this.guesses += guess;
        if (!this.word.includes(guess)) {
            this.remainingGuesses--;
        }
    }

    this.getStatus();
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

    return result;
};
