// Global (name)
    // Local (name)
        // Local
    // Local

let name = 'Vladimir';

if (true) {
    let name = 'Barney';

    if (true) {
        name = 'Chris';
        console.log(name);
    }
}

if (true) {
    console.log(name);
}