var twoSum = function(nums, target) {
    const map = new Map()
    
    for(let i = 0; i < nums.length; i++) {
        let aux = target - nums[i];
        if(map.has(aux)){
            return [map.get(aux), i];
        }
        map.set(nums[i])
    }
};