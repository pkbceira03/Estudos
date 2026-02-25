function intervalIntersection(arr1, arr2){
    let [p1,p2] = [0,0];
    let result = []

    while(p1<arr1.length && p2<arr2.length){
        if(arr1[p1][0]<arr2[p2][1] && arr1[p1][1]>arr2[p2][0]){
            //console.log(arr1)
            result.push([Math.max(arr1[p1][0],arr2[p2][0]), Math.min(arr1[p1][1],arr2[p2][1])]);

            if(arr1[p1][1]<=arr2[p2][1]){
                p1++;
            }else{
                p2++;
            }
        }else{
            if(arr1[p1][1]>arr2[p2][1]){
                p2++;
            }else{
                p1++
            }
        }
    }

    return result;
}

console.log(intervalIntersection([[0,1],[4,6],[7,8]], [[2,3],[5,9],[10,11]]))