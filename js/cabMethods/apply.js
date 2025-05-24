var sample = function(a,b) {
    console.log(`${a} ${b} ${this.c} ${this.d}`)
}

const obj = {
    c : "Midhun",
    d : "You are In"
}

sample.apply(obj,[1,2]);
