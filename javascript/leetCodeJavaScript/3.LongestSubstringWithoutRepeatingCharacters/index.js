var lengthOfLongestSubstring = function(s) {
    let map = new Map();
    let result = 0;
    let aux = 0;
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(map.has(char) && map.get(char) >= aux){
            aux = map.get(char) + 1;
        }

        map.set(char, i);

        result = Math.max(result, i - aux +1)
    }

    return result
};

console.log(lengthOfLongestSubstring("bbbbbbbbb"))