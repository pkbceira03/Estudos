function sortedValleyShapped(arr){
    if(arr.length===0) return [];

    let [l,r] = [0, arr.length-1];

    let result = new Array(arr.length);
    let i = result.length-1;
    while (l<r){
        if(arr[l]>=arr[r]){
            result[i] = arr[l];
            i--;
            l++
        }else{
            result[i]=arr[r];
            r--;
            i--;
        }
    }
    result[0]=arr[l]
    return result
}

console.log(sortedValleyShapped([2,2,1,1]))