const fs= require("fs");
let text=fs.readFileSync("abhi.txt", "utf-8");
text =text.replace ("brother","Mohan");


console.log("the content of file is");
console.log(text);

console.log("Creating a new file....")
fs.writeFileSync("mohan.txt",text);