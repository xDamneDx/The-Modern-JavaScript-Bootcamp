// HTTP (Hyper Text Transfer Protocol)
// Request - what do we want to do
// Respomse - what was actually done

const puzzleEl = document.querySelector('#puzzle');
const statusEl = document.querySelector('#status');
const firstGame = new Hangman('New York', 4);

puzzleEl.textContent = `Word: ${firstGame.puzzle}`;
statusEl.textContent = firstGame.message;

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    firstGame.makeGuess(guess);
    puzzleEl.textContent = `Word: ${firstGame.puzzle}`;
    statusEl.textContent = firstGame.message;
});

getPuzzle('2').then((puzzle) => {
    console.log(puzzle);
}, (err) => {
    console.log(`Error: ${err}`);
});

// Making an HTTP request
// HTTP Statuses: https://httpstatuses.com/

// http://restcountries.eu/#api-endpoints-all
// http://restcountries.eu/rest/v2/all

const countryCode = 'UA';

getCountryDetails(countryCode).then((country) => {
    console.log(country.name);
}, (error) => {
    console.log(`Error: ${error}`);
});
