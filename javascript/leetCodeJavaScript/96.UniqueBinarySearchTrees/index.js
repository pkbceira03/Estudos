var numTrees = function(n) {
    const dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++){
        for(let j = 1;j <= i; j++){
            let left = j - 1;
            let right = i - j
            dp[i] += dp[left] * dp[right]
        }
    }

    return dp[n];
};


console.log(numTrees(3))