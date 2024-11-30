const result = new Promise((resolve, reject) => {
    let timer = 1;
    setInterval(() => {
        resolve(timer)
        timer++;
    },1000)
})

result.then((timer)=>{
    console.log("resolved",timer);
}).catch(() => {
    console.log("rejected");
})