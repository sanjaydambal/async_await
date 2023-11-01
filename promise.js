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

const pro = new Promise((resolve,reject)=>{
    const x = "Sanjay";
    const y = "sanjay";
    if(x===y){
        resolve("sanjay success")
    }
    else{
        reject("reject")
    }
})
pro.then((s)=>{
    console.log(s)
    console.log("s")
}).catch((u)=>{
    console.log(u)
    console.log("e")
})

let promise = new Promise(function (resolve, reject) {
	resolve('Geeks For Geeks');
})

promise
	.then(function (successMessage) {
		//success handler function is invoked 
		console.log(successMessage);
	}, function (errorMessage) {
		console.log(errorMessage);
	});
const pro1 = new Promise((resolve,reject)=>{
    setTimeout(resolve,3000,"resolved")
})
const pro2 = 58;
const pro3 = new Promise ((resolve,reject)=>{
    setTimeout(resolve,3000,"res2")
})
Promise.all([pro1,pro2,pro3]).then((v)=>{
    console.log(v)
}).catch((e)=>{
    console.log(e)
})