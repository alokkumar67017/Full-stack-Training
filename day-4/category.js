// synchronous function

// console.log("Start");
// setTimeout( ()=>console.log("This is a setTimeout function"), 2000);
// setInterval( ()=>console.log("This is a setInterval function"), 1000);



// console.log("line1");
// setTimeout( ()=>console.log("line2"), 2000);
// const flag = setInterval( ()=>console.log("h1"), 1000);
// clearInterval(flag);
// console.log("line4");








// user defined async function
async function sum() {
    console.log("This is an async function");
    console.log("This is an async function2");
    console.log("This is an async function3");
    await console.log("This is an async function2");
    console.log("This is an async function4");

}
 sum();
 console.log("This is a normal function6");

 console.log("This is a normal function7");