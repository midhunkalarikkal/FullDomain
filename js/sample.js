function sample (a,b) {
  const sum = a(1,2);
  const mul = b(2,3);
  let result = sum + mul;
  return result ;
}

function sum(a, b){
  return a+ b;
}

function mul(a,b) {
  return a*b;
}

console.log(sample(sum,mul));