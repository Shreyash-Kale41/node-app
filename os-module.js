const os = require("os");
console.log("==== os core Built in Modules ====");

console.log(`os hostname: ${os.hostname()}`);
console.log(`os architecture: ${os.arch}`);
console.log(`temp directory : ${os.tmpdir()}`);
console.log(`os release  : ${os.release()}`);
console.log(`os cpu  : ${os.cpus()}`);
// console.log(`os User Info  : ${os.userInfo()}`);