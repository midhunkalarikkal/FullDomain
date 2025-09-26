const fs = require("fs");
setTimeout(() => {
  try {
    fs.writeFile("./sample2.txt", "Hello world", "utf-8", (error) => {
      if (error) {
        console.log("File writing failed : ", error);
      } else {
        console.log("File written");
      }
    });
  } catch (error) {
    console.log("Error : ", error);
  }
}, 1000);

setTimeout(() => {
  try {
    fs.access("./sample2.txt", (error) => {
      if (error) {
        console.log("File not exist : ", error);
      } else {
        console.log("File exist");
      }
    });
  } catch (error) {
    console.log("Error : ", error);
  }
}, 2000);

setTimeout(() => {
  try {
    fs.unlink("./sample2.txt", (error) => {
      if (error) {
        console.log("File deleting failed : ", error);
      } else {
        console.log("File deleted");
      }
    });
  } catch (error) {
    console.log("Error : ", error);
  }
}, 3000);

setTimeout(() => {
  try {
    fs.writeFile("./sample2.txt","Hello World","utf-8", (error) => {
      if (error) {
        console.log("File writing failed : ", error);
      } else {
        console.log("File written");
      }
    });
  } catch (error) {
    console.log("Error : ", error);
  }
}, 4000);

setTimeout(() => {
  try {
    fs.readFile("./sample2.txt","utf-8", (error,data) => {
      if (error) {
        console.log("File reading failed : ", error);
      } else {
        console.log("File data ",data);
      }
    });
  } catch (error) {
    console.log("Error : ", error);
  }
}, 5000);

setTimeout(() => {
  try {
    fs.appendFile("./sample2.txt"," Appended Data","utf-8", (error) => {
      if (error) {
        console.log("File data appending failed : ", error);
      } else {
        console.log("File data appended ");
      }
    });
  } catch (error) {
    console.log("Error : ", error);
  }
}, 6000);

setTimeout(() => {
  try {
    fs.readFile("./sample2.txt","utf-8", (error,data) => {
      if (error) {
        console.log("File appended data reading failed : ", error);
      } else {
        console.log("File appended data ",data);
      }
    });
  } catch (error) {
    console.log("Error : ", error);
  }
}, 7000);