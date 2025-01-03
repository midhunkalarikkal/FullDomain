let i = 1;
let interval = setInterval(() => {
    console.log(i);
    i++;
},1000)

setTimeout(() => {
    clearInterval(interval);
},10500);