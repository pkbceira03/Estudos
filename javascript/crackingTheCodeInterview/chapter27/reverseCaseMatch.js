function upperCase(c){
    return c.charCodeAt(0) >= "A".charCodeAt(0) && c.charCodeAt(0) <="Z".charCodeAt(0)
}

function lowerCase(c){
    return c.charCodeAt(0) >= "a".charCodeAt(0) && c.charCodeAt(0) <="z".charCodeAt(0)
}

function toUpperCase(c){
    if(!lowerCase(c)) return c;
    return String.fromCharCode(c.charCodeAt(0)- "a".charCodeAt(0) + "A".charCodeAt(0))
}

function reverseCaseMatch(s){
    let [l,r] = [0,s.length-1];

    while(r > 0 && l < s.length){
        if(upperCase(s[l])){
            l++;
            continue;
        }
        if(lowerCase(s[r])){
            r--;
            continue;
        }
        if(toUpperCase(s[l])!==s[r])return false;
        r--;
        l++;
    }
    return true
}

console.log(reverseCaseMatch('haHrARDd'))