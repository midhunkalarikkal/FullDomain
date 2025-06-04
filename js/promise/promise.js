function promiseFunction (value) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(value) {
                resolve(`Resolved value : ${value}`);
            } else {
                reject("rejected because of no value found");
            }
        },1000)
    })
}

var handle = async () => {
    console.log("start");
    try {
        const result = await promiseFunction(1);
        console.log("result : ",result);
    } catch (error) {
        console.log("error : ",error);
    }
    console.log("end");
}

handle();