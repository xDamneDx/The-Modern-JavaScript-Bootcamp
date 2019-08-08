let myBook = {
    title: '11/22/63',
    author: 'Stephen King',
    pageCount: 800
}

console.log(`${myBook.title} by ${myBook.author}`);

myBook.title = 'The Green Mile';

console.log(`${myBook.title} by ${myBook.author}`);

// Challenge:

let user = {
    name: 'Vladimir',
    age: 33,
    location: 'Nikolaev'
}

console.log(`${user.name} is ${user.age} and lives in ${user.location}`);

user.age = 32;

console.log(`${user.name} is ${user.age} and lives in ${user.location}`);
