var maxResult = function(nums, k) {
    let n = nums.length;
    let deque = []; 
    
    deque.push(0);

    for (let i = 1; i < n; i++) {
        if (deque[0] < i - k) {
            deque.shift(); 
        }
        nums[i] += nums[deque[0]];
        while (deque.length > 0 && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop(); 
        }
        deque.push(i);
    }

    return nums[n - 1];
};