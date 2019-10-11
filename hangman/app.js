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

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(puzzle);
    }
});

// Making an HTTP request
// HTTP Statuses: https://httpstatuses.com/

// http://restcountries.eu/#api-endpoints-all
// http://restcountries.eu/rest/v2/all

const countryCode = 'UA';
const countryRequest = new XMLHttpRequest;

countryRequest.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        const country = data.find((country) => country.alpha2Code === countryCode);
        console.log(country.name);
    } else if (e.target.readyState === 4) {
        console.log('Something wrong');
    }
});

countryRequest.open('GET', 'http://restcountries.eu/rest/v2/all');
countryRequest.send();