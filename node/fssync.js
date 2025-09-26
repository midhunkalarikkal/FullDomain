const fs = require('fs');

fs.writeFileSync("./sample.txt","Hello world","utf-8");
console.log("sample.txt file created");

if(fs.existsSync('./sample.txt')) {
    console.log("Exist file");
} else {
    console.log("Not exist file")
}

fs.unlinkSync('./sample.txt');
console.log("File deleted");

fs.writeFileSync("./sample.txt","Hello world","utf-8");
console.log("sample.txt file created");

const data1 = fs.readFileSync('./sample.txt', 'utf8');
console.log('File content:', data1);

fs.appendFileSync("./sample.txt","Appending data","utf-8");
console.log("Appended data to sample.txt");

const data2 = fs.readFileSync('./sample.txt', 'utf8');
console.log('File content:', data2);
