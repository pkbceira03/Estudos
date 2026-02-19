function stringJoin(arr, s){
    let newString = ""
    for(let i = 0; i<arr.length; i++){
        newString+=arr[i]
        if(i !== arr.length-1) {newString+=s;}
    }
    console.log(newString)
}

stringJoin([
  'b', '',  'k',
  '',  'p', 'r n',
  '',  'd', 'd'
], 'e')

