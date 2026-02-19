function lowerCase(c){
    return c.charCodeAt(0) >= "a".charCodeAt(0) && c.charCodeAt(0) <="z".charCodeAt(0)
}

function toUpperCase(c){
    if(!lowerCase(c)) return c;
    return String.fromCharCode(c.charCodeAt(0)- "a".charCodeAt(0) + "A".charCodeAt(0))
}

console.log(toUpperCase("c"))