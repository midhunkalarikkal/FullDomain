class Person{
    #name;
    #age;
    constructor(name, age){
        this.#name = name;
        this.#age = age;
    }

    setDetails(name, age){
        this.#name = name;
        this.#age = age;
    }

    getDetails(){
        this.#showDetails();
    }
    
    #showDetails(){
        console.log(this.#name + " " + this.#age);
    }
}

const p1 = new Person("Midhun",20);
p1.getDetails();
p1.setDetails("Jithin",15);
p1.getDetails();