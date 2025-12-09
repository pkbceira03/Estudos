var specialTriplets = function(nums) {
    let result = 0;
    let n = nums.length;
    let right = new Map();
    let left = new Map();
    let meio;
    let i = 1;
    const MOD = 1e9 + 7;
    for(let num of nums){
        right.set(num, ((right.get(num) || 0) + 1));
    }

    left.set(nums[0], 1);
    right.set(nums[0], (right.get(nums[0]) - 1));

    while(i < n - 1){
       while(i < n - 1){
        let meio = nums[i];
        
        right.set(meio, (right.get(meio) - 1));

        let target = meio * 2;
        let qtdLeft = left.get(target) || 0;
        let qtdRight = right.get(target) || 0;
        
        let combinacao = qtdLeft * qtdRight; 
        
        result = (result + combinacao) % MOD; 

        left.set(meio, ((left.get(meio) || 0) + 1));
        
        i++;
    }
    }

    return result;
};

console.log(specialTriplets([0,1,0,0]))