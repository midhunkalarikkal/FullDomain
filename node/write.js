const fs = require('fs');

const filepath = 'sample.txt';
const content = "Hello world";

fs.writeFile(filepath,content,(err) => {
    if(err){
        console.log("Error ",err)
    }else{
        console.log("Successfull");
    }
})