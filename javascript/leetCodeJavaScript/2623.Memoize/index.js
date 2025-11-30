function memoize(fn) {
    let aux = new Map()
    return function(...args) {
        //const key = args.join(',');
        if(!aux.has(key)){
            const result = fn(...args);
            aux.set(key, result)
            //console.log('não tem');
            return result;
        }else{
            //console.log('tem')
            return aux.get(key);
        }
    }
}

function memoize(fn) {
    const map = new Map();

    return function(...args) {
        const key = JSON.stringify(args);
        if (map.has(key)) {
            return map.get(key);
        } else {
            const fnResult = fn(...args);
            map.set(key, fnResult);
            return fnResult;
        }
    }
}

 
let callCount = 0;
const memoizedFn = memoize(function (a, b) {
    callCount += 1;
    return a + b;
})
memoizedFn(2, 3)
memoizedFn(2, 3) 
console.log(callCount) 
