function isValid(matriz,r,c, n){
    return r>=0 && r<n && c>=0 && c<n && matriz[r][c] ==0
}

function spiral(n){
    let moves = [[-1,0],[0,-1],[1,0],[0,1]]
    let matriz = [];
    let val = n*n-1;
    let [r,c] = [n-1,n-1];
    let x =0;
    for (let i = 0; i < n; i++) {
        matriz[i] = []; 
        for (let j = 0; j < n; j++) {
            matriz[i][j] = 0; 
        }
    }

    while(val>0){
        matriz[r][c] = val;
        val--;
        if(isValid(matriz, r+moves[x][0], c+moves[x][1], n)){
            r += moves[x][0];
            c += moves[x][1]
        }else{
            x = (x+1)%4
            r += moves[x][0];
            c += moves[x][1]
        }
    }

    return matriz
}

console.log(spiral(5))   