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

//     request.open('GET', `//puzzle.mead.io/puzzle?wordCount=${wordCount}`);
//     request.send();
// });

// const getPuzzleOld = (wordCount) => {
//     return fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch puzzle');
//         }
//     }).then((data) => {
//         return data.puzzle;
//     });
// };

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

//     request.open('GET', '//restcountries.eu/rest/v2/all');
//     request.send();
// });

// const getCountryDetailsOld = (countryCode) => {
//     return fetch('//restcountries.eu/rest/v2/all').then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch country details!');
//         }
//     }).then((data) => data.find((country) => country.alpha2Code === countryCode));
// }

// const getLocationOld = () => {
//     return fetch('//ipinfo.io/json?token=647d93d75251cd').then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch location informaion!');
//         }
//     })
// }

const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch puzzle');
    }
};

// const getCountryDetails = async (countryCode) => {
//     const response = await fetch('//restcountries.eu/rest/v2/all');

//     if (response.status === 200) {
//         const data = await response.json();
//         return data.find((country) => country.alpha2Code === countryCode);
//     } else {
//         throw new Error('Unable to fetch country details!');
//     }
// };

// const getLocation = async () => {
//     const response = await fetch('//ipinfo.io/json?token=647d93d75251cd');

//     if (response.status === 200) {
//         return await response.json();
//     } else {
//         throw new Error('Unable to fetch location informaion!');
//     }
// };

// const getCurrentCountry = async () => {
//     const location = await getLocation();
//     const currentCountry = await getCountryDetails(location.country);

//     return currentCountry;
// };
