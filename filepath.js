const fs = require('fs');

let filePath = 'output.txt';

fs.stat(filePath, (err,stats)=>{
    if(err){
        console.error(err);
        return;
    }

    console.log(`File size: ${stats.size} bytes`);
    console.log(`Is a file: ${stats.isFile()}`);
    console.log(`Is a directory: ${stats.isDirectory()}`);
    console.log(`File creation time: ${stats.birthtime}`);
    console.log(`File modification time: ${stats.mtime}`);         
});