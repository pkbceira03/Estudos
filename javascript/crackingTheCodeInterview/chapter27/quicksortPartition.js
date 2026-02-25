function quiksort(arr, pivot){
    let [l,r] = [0,arr.length-1];
    while(l<r){
        if(arr[l]<pivot){
            l++;
        }else if(arr[r]>pivot){
            r--;
        }else{
            [arr[l], arr[r]] = [arr[r], arr[l]]
            l++;
            r--;
        }
    }

    return arr;
}

console.log(quiksort([1,7,2,3,3,5,3],4))