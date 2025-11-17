function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid)); // again calling for diving the array
  let right = mergeSort(arr.slice(mid)); // again calling for divinding the array
  return merge(left, right); // calling for the merging
}

function merge(left, right) {
    let i = 0;
    let j = 0;
    let result = [];
    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // while(i < left.length) {
    //     result.push(left[i]);
    //     i++;
    // }

    // while(j < right.length) {
    //     result.push(right[j]);
    //     j++;
    // }

    // return result;

    // optimzed way
    return [...result, ...left.slice(i), ...right.slice(j)];
}


console.log(mergeSort([8,4,5,6,9,1,5,6]));