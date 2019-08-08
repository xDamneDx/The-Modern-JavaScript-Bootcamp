let myBook = {
    title: '11/22/63',
    author: 'Stephen King',
    pageCount: 800
}

let otherBook = {
    title: 'The Green Mile',
    author: 'Stephen King',
    pageCount: 432
}

let getSummary = function (book) {
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.summary);
console.log(otherBookSummary.pageCountSummary);

// Challenge:

let fahrenheitConversion = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * (5 / 9);
    let kelvin = (fahrenheit + 459.67) * (5 / 9);

    return {
        fahrenheit: fahrenheit,
        celsius: celsius,
        kelvin: kelvin
    }
}

let firstTemperature = fahrenheitConversion(32);

console.log(`Fahrenheit: ${firstTemperature.fahrenheit}, celsius: ${firstTemperature.celsius}, kelvin: ${firstTemperature.kelvin}.`);
