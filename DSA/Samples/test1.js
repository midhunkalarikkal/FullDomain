let nums = {
    "zero" : 0,
    "one" : 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10,
    "hundred": 100,
    "thousand": 1000,
    "tenthousand": 10000,
    "lakh": 100000,
    "tenlakh": 1000000,
    "crore": 10000000
}

function makeItNumber(str){
    let words = [];
    let word = "";
    let numbers = [];
    let result = 1;
    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            console.log("space");
            words.push(word);
            word = "";
        }else{
            word += str[i];
            console.log(str[i]);
        }
    }if(word){
        words.push(word);
    }

    for(let i = 0; i < words.length; i ++){
        for(let [key, value] of Object.entries(nums)){
            if(key === words[i]){
                numbers.push(value);
            }
        }
    }
    

    for(let i = 0; i < numbers.length; i++){
        result *= numbers[i];
    }
    return result;
}

console.log(makeItNumber("one thousand three hundred"));
