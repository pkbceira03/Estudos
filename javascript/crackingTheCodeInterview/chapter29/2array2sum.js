function binarySearch(arr, target){
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

function arrySum(arr1,arr2){
    for(let i = 0; i < arr2.length; i++){
        let aux = binarySearch(arr1, -(arr2[i]));
        if(aux!==-1){
            return [aux, i];
        }
    }

    return [-1,-1];
}

console.log(arrySum([-5,-4,-1,4,6,6,7], [-3,7,18,4,6]))