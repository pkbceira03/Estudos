function raceOvertalking(arr1,arr2){
    let [l,r] = [0, arr1.length-1];
    let mid;
    let result = arr1.length-1;
    while(l<=r){
        mid = Math.floor((l+r)/2);
        if(arr1[mid] > arr2[mid]){
            l=mid+1
        }else{
            if(result>mid){
                result = mid;
            }
            r=mid-1;
        }
    }
    return result
}

console.log(raceOvertalking([2,4,6,8,10,12], [1,3,5,7,9,13]))