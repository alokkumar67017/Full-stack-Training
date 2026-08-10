console.log("A");

setTimeout(() => {
    console.log("B");
}, 2000);

Promise.resolve().then((result) => {
    console.log("C");
});

console.log("D");