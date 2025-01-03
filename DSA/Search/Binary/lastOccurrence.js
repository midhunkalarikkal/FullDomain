function lastOccurrence(arr,target){
    arr.sort((a,b) => a-b);
    let left = 0;
    let right = arr.length - 1;
    let result = -1;

    while(left <= right){
        let mid = Math.floor((left + right)/2);
        if(arr[mid] === target){
            result = mid;
            left = mid + 1;
        }else if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return {arr,result};
}

const arr = [1,4,5,3,55,56,34,32,68,9,3,56,1];
const target = 1;
console.log(lastOccurrence(arr,target))