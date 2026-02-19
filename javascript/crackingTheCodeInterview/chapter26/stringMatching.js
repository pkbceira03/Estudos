function stringMathing(s,t){
    let result;
    let elements=''
    let firstELement = t[0];
    for (let i = 0; i<s.length;i++){
        if(s[i]===firstELement){
            result = i;
            elements += s[i]
            for(j=1; j<t.length; j++){
                if(s[i+j]===t[j]){
                    elements+=t[j]
                }
            }

            if(elements.length === t.length){
                return result;
            }else{
                result = undefined;
                elements = ''
            }
        }
    }
}

console.log(stringMathing("Pedropedrocabecepedropedrot", 'rot'))