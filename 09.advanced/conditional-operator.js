// const myAge = 33;
// // let message;

// // if (myAge >= 18) {
// //     message = 'You can vote!';
// // } else {
// //     message = 'You cannot vote.'
// // }

// // message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.';

// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote.';

// console.log(message);

// const myAge = 33;
// const showPage = () => {
//     console.log('Showing the page.');
// };
// const showErrorPage = () => {
//     console.log('Showing the error page');
// };

// myAge >= 21 ? showPage() : showErrorPage();

const myAge = 33;
const showPage = () => 'Showing the page.';
const showErrorPage = () => 'Showing the error page';

const message = myAge >= 21 ? showPage() : showErrorPage();

console.log(message);

const team = ['Tyler', 'Porter'];

const someMessage = team.length <= 4 ? `Team size: ${team.length}` : `Too many people on your team`;
console.log(someMessage);