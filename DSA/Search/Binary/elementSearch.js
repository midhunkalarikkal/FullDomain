function elementSearch(arr,target){
    arr.sort((a,b) => a-b);
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid] === target){
            return {arr, mid};
        }else if(arr[mid] < target){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }
    return -1;
}

const arr = [1,5,7,2,3,9,10,55,7,33,68,25,64,89];
const target = 7;
console.log(elementSearch(arr,target));