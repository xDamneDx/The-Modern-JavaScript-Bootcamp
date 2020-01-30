// Callback
const getDataCallback = (num, callback) => {
    setTimeout(() => {
        if (typeof num === 'number') {
            callback(undefined, num * 2);
        } else {
            callback('Number must be provided');
        }
    }, 2000);
};

// Callback HELL (Spaghetti code)

getDataCallback(2, (err, data) => {
    if (err) {
        console.log(`Error: ${err}`);
    } else {
        getDataCallback(data, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data); // 2 * 2 * 2 = 8
            }
        })
    }
});

// Promise
// const getDataPromise = (data) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`This is my success data: ${data}`);
//         // reject('This is my promise error')
//     }, 2000); 
// });

// const myPromise = getDataPromise(123);

// myPromise.then((data) => {
//     console.log(data);
// });
// myPromise.then((data) => {
//     console.log(data);
// }, (error) => {
//     console.log(error);
// });

// Promise Chaining
const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided!');
    }, 2000); 
});

getDataPromise(10).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    console.log(data);
}) // 10 * 2 * 2 = 40

getDataPromise(10).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    console.log(data);
}) // 10 * 2 * 2 * 2 = 80

// Catching errors

getDataPromise(10).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    return getDataPromise(data);
}).then((data) => {
    console.log(data); // 10 * 2 * 2 * 2 = 80
}).catch((err) => {
    console.log(err); // if num !== 'number': 'Number must be provided'.
});