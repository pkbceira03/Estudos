function targetCount(arr, target, k){

    function find(isFirst){
        let [l,r] = [0, arr.length-1];
        let mid;
        let bound = -1;
        while(l<=r){
            mid = Math.floor((l+r)/2)
            if(arr[mid]===target){
                bound = mid;
                if(isFirst){
                    r=mid-1
                }else{
                    l=mid+1
                }
            }else if(arr[mid]<target){
                l=mid+1;
            }else{
                r=mid-1
            }
        }
        return bound
    }

    let menor = find(true);
    let maior = find(false);
    console.log(menor, maior)

    if(menor === -1 && maior === -1) return true;
    console.log((maior+1-menor)/k)
    return (maior+1-menor)%k === 0;

}



console.log(targetCount([1,2,2,2,2,2,2,3],3,1))