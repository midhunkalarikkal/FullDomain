function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(j = 0; j < (arr.length - i - 1); j++) {
            if(arr[j] < arr[j + 1]) {
                [arr[j], arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
}

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const nearlySortedArray = [1, 2, 4, 3, 5, 6, 8, 7, 9, 10];
const randomArray = [7, 2, 9, 1, 5, 3, 8, 4, 10, 6];
const reverseSortedArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(bubbleSort(sortedArray));
console.log(bubbleSort(nearlySortedArray));
console.log(bubbleSort(randomArray));
console.log(bubbleSort(reverseSortedArray));