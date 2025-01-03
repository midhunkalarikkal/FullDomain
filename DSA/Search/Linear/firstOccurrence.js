function firstOccurrence(arr,target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i
        }
    }
    return "Not found";
}

const arr = [1,5,7,9,4];
const target = 9;
console.log(firstOccurrence(arr,target));