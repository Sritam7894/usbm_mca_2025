console.log("its working");

const math = require("./math");
console.log(math.add(5,6));
console.log(math.sub(11,6));

//inbuilt modules
const fs = require ('fs')
console.log(fs);
//write file 
fs.writeFileSync("note.txt","i am learning backend");
// append : add the string end of the file
fs.appendFileSync("note.txt","its a part of mern\n");
//read
const data = fs.readFileSync("notes.txt");
console.log(data.toString());
//create folder
fs.mkdirSync("file.js");
//reaname
// fs.renameSync("file.js","node.js");

// //delete
// fs.mkdirSync("node.js");