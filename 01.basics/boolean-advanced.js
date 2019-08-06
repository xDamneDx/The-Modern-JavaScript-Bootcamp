let isAccountLocked = false;
let userRole = 'user';

if (isAccountLocked) {
    console.log('Is account locked');
} else if (userRole === 'admin') {
    console.log('Welcome Admin');
} else {
    console.log('Welcome!');
}

// Challenge:

let temp = 45;

if (temp <= 32) {
    console.log('It is freezing outlisde!');
} else if (temp >= 110) {
    console.log('It is way to hot outlide!');
} else {
    console.log('Go for it! It is pretty nice.')
}
