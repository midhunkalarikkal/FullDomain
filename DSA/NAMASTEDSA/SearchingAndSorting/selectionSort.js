function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    // why < n-1; becuase the last element will in its correct posistion, 
    // and if we write i < n the j will start from n on the last ith iteration , 
    // and it is not neccessary because j starts from n and j < n, there is no logic
    let min = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [arr[min], arr[i]] = [arr[i], arr[min]];
    }
  }
  return arr;
}

console.log(selectionSort([3, 56, 32, 52, 12, 46, 87, 3, 65, 7, 35, 14, 78]));
