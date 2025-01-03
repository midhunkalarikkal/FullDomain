function elementSearch(arr,target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return arr[i];
        }
    }
    return "Target not found in array";
}

const arr = [1,3,5,7,3,5,6,9,8,0];
const target = 9;
console.log(elementSearch(arr,target));