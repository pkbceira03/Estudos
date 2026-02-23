function arrayIntersection(arr1, arr2){
    let [farr, sarr] = [0,0];
    let result = []
    while(farr < arr1.length && sarr < arr2.length){
        if(arr1[farr] > arr2[sarr]){
            sarr++;
        }else if(arr1[farr] < arr2[sarr]){
            farr++;
        }else{
            result.push(arr1[farr]);
            sarr++;
            farr++;
        }
    }

    return result;
}

console.log(arrayIntersection([1,2,3], [1,3,5]));