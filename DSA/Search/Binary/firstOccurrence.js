function firstOccurrence(arr,target){
    arr.sort((a,b) => a-b);
    let left = 0;
    let right = arr.length - 1;
    let result = -1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);
        if(arr[mid] === target){
            result = mid;
            right = mid - 1
        }else if(arr[mid] < target){
            left = mid + 1
        }else{
            right = mid - 1
        }
    }
    return {arr, result};
}

const arr = [15,7,4,68,99,4,6,52,34,89,89];
const target = 4;
console.log(firstOccurrence(arr,target));