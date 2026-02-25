function removeDuplicate(arr){
    let [p1,p2] = [0,1];
    while (p2<arr.length){
        if(arr[p1] === arr[p2]){
            p2++;
        }else{
            arr[p1+1]=arr[p2];
            p1++;
            p2++;
        }
    }

    while(p1<arr.length-1){
        p1++;
        arr[p1] = 0;
        
    }

    return arr;
}

console.log(removeDuplicate([1,1,2,3,3,3,4,4,4]))