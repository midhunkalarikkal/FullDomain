function fibinacci(n, memo = {}){
    if(n in memo) return memo[n];

    if(n <= 1)return n;

    memo[n] = fibinacci(n-1, memo) + fibinacci(n-2,memo);

    return memo[n]
}

console.log(fibinacci(10));
