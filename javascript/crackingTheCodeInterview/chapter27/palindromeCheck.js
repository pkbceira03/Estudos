function palindormeCheck(s){
    let [l, r] = [0, s.length-1];

    while(l<r){
        if(s[l] !== s[r]) return false;
        l++;
        r--;
    }
    return true
}

console.log(palindormeCheck('ana'))