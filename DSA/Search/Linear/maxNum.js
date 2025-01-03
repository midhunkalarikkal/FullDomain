function maxNum(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max;
}

const arr = [1,7,4,66,34,5,2,9,10,55,88];
console.log(maxNum(arr));