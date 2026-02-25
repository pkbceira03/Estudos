function shiftWord(arr, word){
    let [pointer, writer] = [0,0];
    let i = 0;

    while(pointer<arr.length){
        if(i<word.length && arr[pointer]===word[i]){
            pointer++;
            i++
        }else{
            arr[writer] = arr[pointer];
            pointer++;
            writer++;
        }
    }

    for(let j = 0; j<word.length;j++){
        arr[writer] = word[j]
        writer++;
    }

    return arr
}

console.log(shiftWord(['p','d','e','d','r','c','a','o'], 'pedro'))