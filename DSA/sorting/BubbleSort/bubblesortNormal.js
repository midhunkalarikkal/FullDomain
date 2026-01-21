function bubbleSort(arr){
    for(let i = 0; i <  arr.length - 1; i++){
       for(let j = 0; j < arr.length - i - 1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp
        }
       }
    }
    return arr
}

const arr = [5, 3, 1, 4, 2];
console.log(bubbleSort(arr));

// why arr.length - i - 1 , On each iteration the last element will be sorted, like 
// first swapping iteration of j 
// | Step | Compare | Swap? | Array after     |
// | ---- | ------- | ----- | --------------- |
// | 1    | 5 > 3   | ✅     | [3, 5, 1, 4, 2] |
// | 2    | 5 > 1   | ✅     | [3, 1, 5, 4, 2] |
// | 3    | 5 > 4   | ✅     | [3, 1, 4, 5, 2] |
// | 4    | 5 > 2   | ✅     | [3, 1, 4, 2, 5] |

