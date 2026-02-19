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

console.log(is_alphanumeric(",")); // Saída: 65