function valley(arr){
    let [l,r] = [0, arr.length-1];

    let meio;
    while (l<=r){
        meio = Math.floor((l + r) / 2);
        if(arr[meio]> arr[meio+1]){
            l = meio+1;
        }else if(arr[meio]>arr[meio-1]){
            r=meio-1;
        }else{
            break;
        }
    }

    return arr[meio];
}

console.log(valley([7,6,5]))