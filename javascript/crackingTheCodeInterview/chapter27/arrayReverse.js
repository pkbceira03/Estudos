function reverseArray(arr){
    let [l,r] = [0,arr.length-1]
    while (l<=r){
        [arr[l], arr[r]] = [arr[r], arr[l]]
        l++;
        r--;
    }
    return arr;
}

console.log(reverseArray([1,2,3,4,5]))