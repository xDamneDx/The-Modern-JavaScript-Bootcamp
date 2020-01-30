// HTTP (Hyper Text Transfer Protocol)
// Request - what do we want to do
// Respomse - what was actually done

const puzzleEl = document.querySelector('#puzzle');
const statusEl = document.querySelector('#status');
const firstGame = new Hangman('New York', 4);

puzzleEl.textContent = `Word: ${firstGame.puzzle}`;
statusEl.textContent = firstGame.message;

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    firstGame.makeGuess(guess);
    puzzleEl.textContent = `Word: ${firstGame.puzzle}`;
    statusEl.textContent = firstGame.message;
});

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

getPuzzle('2').then((puzzle) => {
    console.log(puzzle);
}).catch((err) => {
    console.log(`Error: ${err}`);
}); // Random two words puzzle

const countryCode = 'UA';

getCountryDetails(countryCode).then((country) => {
    console.log(country.name);
}, (error) => {
    console.log(`Error: ${error}`);
}); // Ukraine

getLocation().then((location) => {
    console.log(`Your current location is: ${location.city}, ${location.region} (${location.country})`);
}, (err) => {
    console.log(`Error: ${err}`);
}) // Your current location is: Mykolayiv, Mykolaiv (UA)

// getLocation().then((location) => getCountryDetails(location.country)).then((country) => console.log(`You are here: ${country.name}`)); // You are here: Ukraine

getLocation().then((location) => {
    return getCountryDetails(location.country)
}).then((country) => {
    console.log(`You are here: ${country.name}`) // You are here: Ukraine
}).catch((err) => {
    console.log(`Error: ${err}`);
}); 
