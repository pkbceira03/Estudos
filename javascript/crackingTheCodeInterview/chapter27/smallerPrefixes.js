function smallerPrefixes(arr) {
    let [fs, ss] = [0,0];
    let [firstSum, secondSum] = [0,0];

    while(ss<arr.length){
        firstSum += arr[fs];
        secondSum += arr[ss] + arr[ss+1]
        if(firstSum >= secondSum) return false;
        ss+=2;
        fs++;
    }

    return true;
}

console.log(smallerPrefixes([1,2,-2,1,3,5]))