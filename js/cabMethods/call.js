var simple = function(a, b) {
    console.log(`${a} ${b} ${this.c}`)
}

const obj = {
    c: "Paniker"
}

simple.call(obj,"Midhun", "K")