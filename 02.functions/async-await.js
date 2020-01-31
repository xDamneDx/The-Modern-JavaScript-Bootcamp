// const processData = async () => {
//     return 12;
// }

// processData().then((data) => {
//     console.log('Data:', data); // Data: 12
// }).catch((error) => {
//     console.log('Error:', error);
// })

// const processData = async () => {
//     throw new Error('Something went wrong.');
// }

// processData().then((data) => {
//     console.log('Data:', data);
// }).catch((error) => {
//     console.log('Error:', error); // Error: Something went wrong
// })

const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided!');
    }, 2000); 
});

const processData = async () => {
    let data = await getDataPromise(2);
    data = await getDataPromise(data);
    return data;
}

processData().then((data) => {
    console.log('Data:', data); // Data: 8
}).catch((error) => {
    console.log('Error:', error);
})