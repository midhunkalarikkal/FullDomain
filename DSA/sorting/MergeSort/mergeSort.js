function mergeSort(arr, start, end) {
  if (end - start <= 1) return arr;

  const mid = Math.floor((end + start) / 2);

  mergeSort(arr, start, mid);
  mergeSort(arr, mid, end);
  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  let mergedArr = [];
  let i = start;
  let j = mid;

  while (i < mid && j < end) {
    if (arr[i] < arr[j]) {
      mergedArr.push(arr[i++]);
    } else {
      mergedArr.push(arr[j++]);
    }
  }

  while(i < mid) mergedArr.push(arr[i++]);
  while(j < end) mergedArr.push(arr[j++]);

  for(let i = 0; i < mergedArr.length; i++){
    arr[start + i] = mergedArr[i];
  }
}

const arr = [1, 5, 67, -33, -5, 35, 66, -2, 8];
mergeSort(arr, 0, arr.length);
console.log(arr);
