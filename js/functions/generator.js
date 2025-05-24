function* sample(max) {
    let count = 1;
    while(count<=max){
        yield count;
        count++;
    }
}

const count = sample(5);
console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);
console.log(count.next().value);