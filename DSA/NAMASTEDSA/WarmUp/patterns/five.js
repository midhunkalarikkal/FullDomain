let n = 6;
let a = 1;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + a;
    if (a == 1) {
      a = 0;
    } else {
      a = 1;
    }
  }
  console.log(row);
}
