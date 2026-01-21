function countDigits (n) {
    let count = 0;
    while( n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

const result = countDigits(259);
console.log("result : ",result);