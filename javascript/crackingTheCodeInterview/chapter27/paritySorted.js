function paritySorted(arr){
    let [l,r] = [0,arr.length-1]
    while(l<r){
        if(arr[l]%2===0){
            l++
        }else if(arr[r]%2===1){
            r--;
        }else{
            [arr[l],arr[r]] = [arr[r],arr[l]];
            l++;
            r--;
        }
    }

    return arr;
}

console.log(paritySorted([1,2,3,4,5,6,7,8]))