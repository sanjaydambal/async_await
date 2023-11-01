// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Bringing tacos")
//         reject("Not bringing tacos")
//     }, 3000);
// })


// const onfulfillment = (result) => {
//     console.log(result);
//     console.log("set up the table")
// }

// const onreject = (err) => {
//     console.log(err);
//     console.log("Cook Pasta")
// }

// promise1.then(onfulfillment);
// promise1.error(onreject)
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Bringing tacos");
         reject("Not bringing tacos"); // Comment out this line to make the promise resolve
    }, 3000);
});

const onfulfillment = (result) => {
    console.log(result);
    console.log("set up the table");
};

const onreject = (err) => {
    console.log(err);
    console.log("Cook Pasta");
};

promise1.then(onfulfillment).catch(onreject); // Use .catch to handle promise rejection
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() < 0.5) {
//             resolve("Bringing tacos");
//         } else {
//             reject("Not bringing tacos");
//         }
//     }, 3000);
// });

// const onfulfillment = (result) => {
//     console.log(result);
//     console.log("Set up the table");
// };

// const onreject = (err) => {
//     console.log(err);
//     console.log("Cook Pasta");
// };

// promise1.then(onfulfillment).catch(onreject);
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Bringing tacos");
//     }, 3000);
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Not bringing tacos");
//     }, 3000);
// });

// const onfulfillment = (result) => {
//     console.log(result);
//     console.log("Set up the table");
// };

// const onreject = (err) => {
//     console.log(err);
//     console.log("Cook Pasta");
// };

// Promise.all([promise1, promise2])
//     .then((results) => {
//         onfulfillment(results[0]);
//         onreject(results[1]);
//     })
//     .catch((err) => {
//         console.log("At least one promise failed:", err);
//     });



