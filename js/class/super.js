class One{
    constructor(){
        console.log("class one");
    }

    static add(a,b){
        return a+b;
    }

    sub(a,b){
        return a-b;
    }
}

class Two extends One{
    constructor(name){
        // this.name = name; This will make an error
        console.log("class two");
        super();
        this.name = name;
    }

    showOne(){
        console.log(One.add(1,2));
    }

    showTwo(){
        console.log(this.name);
        console.log(super.sub(1,2));
    }
}

const sample = new Two("Midhun");
sample.showOne();
sample.showTwo();