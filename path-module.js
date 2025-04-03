const path = require('path');
console.log("======= path Module =========");

console.log("===== join() =======");
const pathFile = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(pathFile);

const file = "resume.pdf";
console.log(`File Extension is: ${path.extname(file)}`);

const filePath = "/Users/gajanan/Documents/CODEMIND/Repo/node-app/dir1/dir2/test.txt";

console.log(`Base Name: ${path.basename(filePath)}`);
console.log(`Directory  Name: ${path.dirname(filePath)}`);