function reverseDigits(n) {
    if(n === 0) return 0;
    let xCopy = n;
    let reverse = 0;
    n = Math.abs(n);
    while(n > 0) {
        let last = n % 10;
        reverse = (10 * reverse) + last;
        n = Math.floor(n / 10);
    }
    return xCopy < 0 ? -reverse : reverse;
}

const result = reverseDigits(-12349);
console.log(result);