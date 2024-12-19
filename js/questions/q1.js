// print the non repeating elements from an array
const arr = [1,2,4,2,7,8,1,5,9,7,10,4,8];

function nonrepeats(a){
    let count = {};
    let result = [];
    for(let i = 0; i < a.length; i++){
       if(count[a[i]]){
        count[a[i]] = ++count[a[i]];
       }else{
        count[a[i]] = 1;
       }
    }

    for(let key in count){
        if(count[key] === 1){
            result.push(Number(key));
        }
    }
    return result;
}

console.log(nonrepeats(arr))


function optimised(a){
    let countMap = new Map();
    for(let num of a){
        if(countMap.get(num)){
            countMap.set(num, (countMap.get(num)) + 1);
        }else{
            countMap.set(num,1);
        }
    }

    return Array.from(countMap.entries()).filter(([key,value]) => value === 1).map(([key]) => key)
}

console.log(optimised(arr));