// import modules
const { log } = require("console");
const { copyFileSync } = require("fs");
const path = require ("path");
console.log(path);
const rootDir = path.resolve(__dirname,"..");
console.log(rootDir);

// adding path
console.log(path.join("class-1", "path.js"));
console.log(path.basename());
console.log