function binarySearch(arr,target) {
    let start = 0; // start index
    let end = arr.length - 1 // end index
    while(start <= end) {
        let midIndex = Math.floor((start + end) / 2);
        if(arr[midIndex] === target) {
            return "Found at index "+midIndex;
        } else if(target > arr[midIndex]) {
            start = midIndex + 1;
        } else {
            end = midIndex - 1;
        }
    }
    return "Not found";
}

console.log(binarySearch([33,2,66,43,24,5,23,67], 43));

// TC = O(log n)   Because on each iteration we are halfing the input array;