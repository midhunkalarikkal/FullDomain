const deeplyNestedArray = [
  1,
  [2, 3],
  [4, [5, 6]],
  [7, [8, [9, [10, 11]]]]
];


function flattenArray(arr) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr[i])){
      result.push(...flattenArray(arr[i]));
    } else {
      result.push(arr[i])
    }
  }
  return result;
}

console.log(flattenArray(deeplyNestedArray))