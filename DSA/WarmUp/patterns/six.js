let n = 6;
for(let i = 0; i < n; i++) {
    let row = "";
    let a = 1;
    for(let j = 0; j <= i; j++){
        if(j % 2 === 1) {
            row = row + 0;
        } else {
            row = row + 1;
        }
    }
    console.log(row);
}