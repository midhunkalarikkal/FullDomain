function occurrence(arr,target){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            count++
        }
    }

    if(count > 0){
        return count;
    }else{
        return "Not found";
    }
}

const arr = [1,4,3,5,1,6,1,33,"Midhun",1,6];
const target = "Midhun";
console.log(occurrence(arr,target));