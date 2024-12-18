var printFullName = function(greeting, home){
    console.log(`${greeting}` + this.fname + " " + this.lname + `${home}`);
}

const obj = { fname : "Midhun", lname : "Kalarikkal"};

const result = printFullName.bind(obj,"hi "," kalarikkal");

result();
