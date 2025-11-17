function bubbleSort(arr) {
  let n = arr.length;
  let iterations = 0;
  for (let i = 0; i < n - 1; i++) { // n - 1iterations for we need to check all elements with each element
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) { // n - 1 - i because on each iterations we only need less comparison because, on each iteration the last element will be sorted
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }
    if (!swapped) break;
    iterations++;
  }
  console.log("iterations : ", iterations);
  return arr;
}

console.log(bubbleSort([44, 63, 24, 53, 12, 5, 88, 3, 667, -92, 2]));


// TC = O(n ^ 2);