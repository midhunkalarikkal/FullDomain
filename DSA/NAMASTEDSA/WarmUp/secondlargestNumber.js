let arr = [5, 17, 0, 17];

function findSecondLargestNum (arr) {
    if(arr.length < 2) {
        return null;
    }
    let firstLargestNum = -Infinity;
    let secondLargestNum = -Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > firstLargestNum) {
            secondLargestNum = firstLargestNum;
            firstLargestNum = arr[i];
        } else if(arr[i] > secondLargestNum && arr[i] !== firstLargestNum) {
            secondLargestNum = arr[i];
        }
    }
    return secondLargestNum;
}

const result = findSecondLargestNum(arr);
console.log(result);