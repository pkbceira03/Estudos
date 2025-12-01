var reduce = function(nums, fn, init) {
    var result = init;
    for(var i = 0; i < nums.length; i++){
        result = fn(result, nums[i]);
        console.log(result);
    }
    return result
};

let nums = [1,2,3,4];
let fn = function(a,b){
    return a+b;
}
let init = 0;

console.log(reduce(nums,fn,init));