function linearSearch(arr, target) {
    for(let i = 0; i < arr.length; i++) {  // O(n)
        if(arr[i] === target) {
            return "Found at index "+i;
        }
    }
    return "Not found";
}

console.log(linearSearch([1,6,5,4,7,33,5,32,79,25,7,78], 6));

// TC = O(n)