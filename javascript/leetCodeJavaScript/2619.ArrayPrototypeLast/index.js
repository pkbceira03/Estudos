Array.prototype.last = function() {
    lastPosition = this.length - 1;
    if (lastPosition === -1){
        return -1;
    }else{
        return this[lastPosition]
    }
};


const arr = [1, 2, 3];
console.log(arr.last());