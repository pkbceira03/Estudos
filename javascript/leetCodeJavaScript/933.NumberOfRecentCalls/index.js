
var RecentCounter = function() {
    this.min;
    this.arrayPings = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    if(this.arrayPings.length === 0){
        this.min = t;
    }
    this.arrayPings.push(t);
    if(this.arrayPings.length === 1){
        return this.arrayPings.length;
    }else{
        while(this.min < t - 3000){
            this.arrayPings.shift();
            this.min = this.arrayPings[0];
        }
        return this.arrayPings.length;
    }
}