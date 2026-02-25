function missingNumberInRange(arr,low,high){
    let i = 0;
    let pointer = low;
    let result =[]
    while(pointer<=high){
        if(arr[i]<pointer){
            i++;
        }else if(arr[i]==pointer){
            i++;
            pointer++;
        }else{
            result.push(pointer)
            pointer++;
        }
    }
    return result
}

console.log(missingNumberInRange([6,7,8,9],7,8))