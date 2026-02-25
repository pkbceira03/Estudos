function mergeThreeSortedArray(arr1, arr2,arr3){
    let [p1,p2,p3] = [0,0,0];
    let result = [];
    let v1,v2,v3;
    let m;
    while(p1<arr1.length || p2<arr2.length || p3< arr3.length){
        v1 = arr1[p1] ?? Infinity;
        v2 = arr2[p2] ?? Infinity;
        v3 = arr3[p3] ?? Infinity;

        m = Math.min(v1,v2,v3);

        if(v1 === m){
            p1++;
        }
        if(v2 === m){
            p2++;
        }
        if(v3 === m){
            p3++;
        }

        result.push(m);
    }
    return result
}

console.log(mergeThreeSortedArray([1,2,100], [2,3,4,67], [2,5,6,7]))
///// mudar