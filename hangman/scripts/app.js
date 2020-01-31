// HTTP (Hyper Text Transfer Protocol)
// Request - what do we want to do
// Respomse - what was actually done

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game; 

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game.makeGuess(guess);
    render();
});

const render = () => {
    // puzzleEl.textContent = `Word: ${game.puzzle}`;
    puzzleEl.innerHTML = '';
    guessesEl.textContent = game.message;

    game.puzzle.split('').forEach((letter) => {
        const letterEl = document.createElement('span');
        letterEl.textContent = letter;

        puzzleEl.appendChild(letterEl);
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game = new Hangman(puzzle, 5);
    render();
}

document.querySelector('#reset').addEventListener('click', startGame);

startGame();

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle);
// }, (err) => {
//     console.log(`Error: ${err}`);
// });

// // Making an HTTP request
// // HTTP Statuses: https://httpstatuses.com/

// // http://restcountries.eu/#api-endpoints-all
// // http://restcountries.eu/rest/v2/all

// const countryCode = 'UA';

// getCountryDetails(countryCode).then((country) => {
//     console.log(country.name);
// }, (error) => {
//     console.log(`Error: ${error}`);
// });

// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     if (response.status === 200) {
//         return response.json();
//     } else {
//         throw new Error('Unable to fetch data');
//     }
// }).then((data) => {
//     console.log(data.puzzle);
// }).catch((error) => {
//     console.log(error);
// });

// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle);
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// }); // Random two words puzzle

// const countryCode = 'UA';

// getCountryDetails(countryCode).then((country) => {
//     console.log(country.name);
// }, (error) => {
//     console.log(`Error: ${error}`);
// }); // Ukraine

// getLocation().then((location) => {
//     console.log(`Your current location is: ${location.city}, ${location.region} (${location.country})`);
// }, (err) => {
//     console.log(`Error: ${err}`);
// }) // Your current location is: Mykolayiv, Mykolaiv (UA)

// // getLocation().then((location) => getCountryDetails(location.country)).then((country) => console.log(`You are here: ${country.name}`)); // You are here: Ukraine

// getLocation().then((location) => {
//     return getCountryDetails(location.country)
// }).then((country) => {
//     console.log(`You are here: ${country.name}`) // You are here: Ukraine
// }).catch((err) => {
//     console.log(`Error: ${err}`);
// }); 

// getCurrentCountry().then((country) => {
//     console.log(`Current country: ${country.name}`);
// }).catch((error) => {
//     console.log(`Error: ${error}`);
// });
