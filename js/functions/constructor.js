function print(a){
    console.log(a)
}

function Animal(name){
    this.name = name;
    print(name);
}


const one = new Animal("lion");