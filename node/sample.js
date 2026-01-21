// const fs = require("fs");

// setTimeout(() => {
//   try {
//     fs.writeFile("./one.txt", "Hi Sample Text File", "UTF-8", (error) => {
//         if(error) {
//             throw new Error(error);
//         } else {
//             console.log("data added");
//         }
//     });
//   } catch (error) {
//     console.log("error : ", error);
//   }
// }, 1000);

// setTimeout(() => {
//   try {
//     fs.access("./one.txt", (error) => {
//         if(error) {
//             throw new Error(error);
//         } else {
//             console.log("File Exist");
//         }
//     });
//   } catch (error) {
//     console.log("error : ", error);
//   }
// }, 1000);

// setTimeout(() => {
//     try {
//         fs.readFile('./one.txt','UTF-8',(error, data) => {
//             if(error) {
//                 throw new Error(error);
//             } 
//             if(data) {
//                 console.log("data : ",data);
//             }
//         } )
//     } catch (error) {
//         console.error("error : ",error);
//     }
// },2000);