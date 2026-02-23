function mergeTwoSortedArrays(arr1, arr2){
    let [p1, p2] = [0,0]
    let result = [];

    while(p1 < arr1.length && p2 < arr2.length){
        if(arr1[p1]<=arr2[p2]){
            result.push(arr1[p1]);
            p1++;
        }else{
            result.push(arr2[p2]);
            p2++
        }
    }

    while(p1<arr1.length){
        result.push(arr1[p1]);
        p1++;
    }

    while(p2<arr2.length){
        result.push(arr2[p2]);
        p2++;
    }

    return result;
}

console.log(mergeTwoSortedArrays([1,4,6,8,9], [2,3,5,7,11]))