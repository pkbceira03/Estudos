function sum(arr){
    let [l,r] = [0, arr.length-1];
    while(l<r){
        //console.log(arr[l],arr[r])
        if((arr[l] + arr[r]) > 0){
            r--;
        }else if((arr[l] + arr[r]) < 0){
            l++;
        }else {
            return true
        }
    }
    return false
}

console.log(sum([-5,-2,-1,10]))