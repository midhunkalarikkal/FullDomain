function countOccurrence(arr,target){
    arr.sort((a,b) => a-b);

    function firstOccurrence(arr,target){

        let left = 0;
        let right = arr.length - 1;
        let result = -1
        
        while(left <= right){
            let mid = Math.floor((left + right)/2);
            if(arr[mid] === target){
                result = mid;
                right = mid - 1;
            }else if(arr[mid] < target){
                left = mid + 1;
            }else{
                right = mid - 1
            }
        }
        return result;
    }

    function lastOccurrence(arr,target){
        let left = 0;
        let right = arr.length - 1;
        let result = -1
        while(left <= right){
            let mid = Math.floor((left + right )/2);
            if(arr[mid] === target){
                result = mid;
                left = mid + 1;
            }else if(arr[mid] < target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }
        return result;
    }

    const first = firstOccurrence(arr,target);
    if(first === -1) return 1;

    const last = lastOccurrence(arr,target);
    return last - first + 1;
}

const arr = [1, 2, 2, 2, 3, 4, 5,2,5,2,6,2,78,6,8,2];
const target = 2;
console.log(countOccurrence(arr, target))