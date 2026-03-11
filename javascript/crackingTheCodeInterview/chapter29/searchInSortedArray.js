function searchInSortedArray(arr, target){
    let n = arr.length;
    if(n === 0){
        return -1
    }

    let [l,r] = [0, n-1];
    
    if(arr[l] >= target || arr[r] < target){
        if(arr[l] === target){
            return 0
        }
        return -1
    }

    while(l<=r){
        let mid = (l+r)/2;
        if(arr[mid]>target){
            r=mid-1;
        }else if(arr[mid]<target){
            l=mid+1
        }else{
            return mid;
        }
    }

    return -1
}

console.log(searchInSortedArray([-2,0,3,4,7,9,11], 1))