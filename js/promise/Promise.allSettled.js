function async1(data){
    return new Promise((resolve,rejct)=>{
        setTimeout(() => {
            console.log("async 1 processing.");
            resolve(data + " -> processed by async 1.");
        },1000)
    })
}

function async2(data){
    return new Promise((resolve,rejct)=>{
        setTimeout(() => {
            console.log("async 2 processing.");
            resolve(data + " -> processed by async 2.");
        },1000)
    })
}

function async3(data){
    return new Promise((resolve,rejct)=>{
        setTimeout(() => {
            console.log("async 3 processing.");
            resolve(data + " -> processed by async 3.");
        },1000)
    })
}

Promise.allSettled([
    async1("async 1 data"),
    async2("async 2 data"),
    async3("async 3 data")
]).then(result => {
    console.log(result);
}).catch(error => {
    conole.log(error);
})