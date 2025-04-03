const fs = require('fs');

fs.readFile('sample.txt','utf8',(err,data)=>{
    if(err){
        console.error(err);       
    }
    console.log(data);    
});

let content = 'Hello, this is written to the file!';

fs.writeFile('output.txt',content,'utf8',(err)=>{
    if(err){
        console.error(err);
    }
    else{
        console.log('File written successfully!');        
    }
});