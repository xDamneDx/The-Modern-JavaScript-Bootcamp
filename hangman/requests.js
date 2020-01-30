// const getPuzzle = (wordCount) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             resolve(data.puzzle);
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place');
//         }
//     });

//     request.open('GET', `http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
// });

const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch puzzle');
        }
    }).then((data) => {
        return data.puzzle;
    });
};

// const getCountryDetails = (countryCode) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((country) => country.alpha2Code === countryCode);
//             resolve(country);
//         } else if (e.target.readyState === 4) {
//             reject('Something goes wrong');
//         }
//     });

//     request.open('GET', 'http://restcountries.eu/rest/v2/all');
//     request.send();
// });

const getCountryDetails = (countryCode) => {
    return fetch('http://restcountries.eu/rest/v2/all').then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch country details!');
        }
    }).then((data) => data.find((country) => country.alpha2Code === countryCode));
}

const getLocation = () => {
    return fetch('http://ipinfo.io/json?token=647d93d75251cd').then((response) => {
        if (response.status === 200) {
            return response.json();
        } else {
            throw new Error('Unable to fetch location informaion!');
        }
    })
}
