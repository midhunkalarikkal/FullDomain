let arr = [5, 10, 0, 17, 7, 8, 1];

function findSmallestNum (arr) {
    let smallestNum = Infinity;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < smallestNum) {
            smallestNum = arr[i];
        }
    }
    return smallestNum;
}

const result = findSmallestNum(arr);
console.log(result);