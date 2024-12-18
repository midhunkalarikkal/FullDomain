const task1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Task 1 completed")
    },1000)
});

const task2 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Task 2 completed")
    },1000)
});

const task3 = new Promise((resolve,reject) => {
    setTimeout(() => {
        resolve("Task 3 completed")
    },1000)
});


task1.then((result) => {
    console.log(result);
    return task2
}).then((result) => {
    console.log(result);
    return task3
}).then((result)=>{
    console.log(result);
})