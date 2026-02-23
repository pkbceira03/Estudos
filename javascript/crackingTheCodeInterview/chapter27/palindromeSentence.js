function is_alphanumeric(c){
    return upperCase(c) || lowerCase(c) || isDigit(c)
}

function upperCase(c){
    return c.charCodeAt(0) >= "A".charCodeAt(0) && c.charCodeAt(0) <="Z".charCodeAt(0)
}

function lowerCase(c){
    return c.charCodeAt(0) >= "a".charCodeAt(0) && c.charCodeAt(0) <="z".charCodeAt(0)
}

function isDigit(c){
    return c.charCodeAt(0) >= "0".charCodeAt(0) && c.charCodeAt(0) <="9".charCodeAt(0)
}

function palindromeSentence(s){
    let [l,r] = [0, s.length-1];
    while(l<r){
        if(!is_alphanumeric(s[l])){
            l++
            continue;
        }
        if(!is_alphanumeric(s[r])){
            r--
            continue;
        }

        if(s[l].toUpperCase() !== s[r].toUpperCase())return false;
        r--
        l++
    }
    return true
}

console.log(palindromeSentence("Bob wonderdfred,     !!!'''' 'Now, Bob?'"))
