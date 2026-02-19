function stringSplit(s, c){
    let result = [];
    let index = 0;
    let element = "";
    for(let i = 0; i<s.length; i++){
        if(s[i] !== c){
            element+=s[i];
        }else{
            result[index] = element;
            index++;
            element="";
        }
    }
    result[index] = element
    console.log(result)
}

stringSplit("beekeeper needed", "e")