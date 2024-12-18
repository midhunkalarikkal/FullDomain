class Person{
    
    #showDetails(){
        console.log(this.name + " " + this.age);
    }

    setDetails(name,age){
        this.name = name;
        this.age = age;
        this.#showDetails();
    }

}

const p1 = new Person();
p1.setDetails("Midhun",10);