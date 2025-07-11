function sort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if(minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

const bestarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const avgarr = [8, 3, 5, 1, 9, 2, 6, 4, 7];
const worstarr = [9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log("Best case");
console.log(sort(bestarr));

console.log("Average case");
console.log(sort(avgarr));

console.log("Worst case");
console.log(sort(worstarr));
