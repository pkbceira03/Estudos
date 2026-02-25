function flag(arr){
    let [l,r,m] = [0,arr.length-1,0];
    while(m<r){
        if(arr[m] === 'R'){
            [arr[l],arr[m]] = [arr[m],arr[l]]
            m++
            l++
        }else if(arr[m] === 'B'){
            [arr[r],arr[m]] = [arr[m],arr[r]];
            r--;
        }else{
            m++;
        }
    }
    return arr
}
console.log(flag(['R', 'W','B','B', 'W',  'R','W']))