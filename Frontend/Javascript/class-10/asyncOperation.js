// synchronoud code
console.log("start");
console.log("middle");
console.log("end");
// asyncronous code with statement
console.log("start");
setTimeout(() => console.log("middle"), 2000);
console.log("end");
