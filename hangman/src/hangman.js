class Hangman {
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase().split('');
        this.remainingGuesses = remainingGuesses;
        this.guesses = [];
        this.status = 'playing...';
    }
    getStatus() {
        const finished = this.word.every((letter) => this.guesses.includes(letter) || letter === ' ');

        if (this.remainingGuesses === 0) {
            this.status = 'failed.';
        } else if (finished) {
            this.status = 'finished!'
        } else {
            this.status = 'playing...'
        }
    }
    makeGuess(guess) {
        guess = guess.toLowerCase();

        if (!this.guesses.includes(guess) && this.status === 'playing...') {
            this.guesses = [...this.guesses, guess];
            if (!this.word.includes(guess)) {
                this.remainingGuesses--;
            }
        }
    
        this.getStatus();
    }
    get message() {
        if (this.status === 'failed.') {
            return `Nice try! The word was "${this.word.join('')}"`;
        } else if (this.status === 'finished!') {
            return `Great work! You guessed the word.`;
        } else {
            return `Guesses left: ${this.remainingGuesses}`;
        }
    }
    get puzzle() {
        let result = '';
    
        this.word.forEach((letter) => {
            if (this.guesses.includes(letter) || letter === ' ') {
                result += letter;
            } else {
                result += '*';
            }
        });
    
        return result;
    }
}

export { Hangman as default };
