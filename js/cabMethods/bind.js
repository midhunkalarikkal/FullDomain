var sample = function(a,b) {
    console.log(`${a} ${b} ${this.c}`);
};

const obj = {
    c : "SDE",
};

const result = sample.bind(obj);
result(1,2);