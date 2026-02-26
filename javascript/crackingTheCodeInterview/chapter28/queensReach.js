function isValid(r,c){
    return r>=0 && r<6 &&c >=0 && c<6;
}

function newMartiz(queens, matriz){
    let moves = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]];

    for(let [r,c] of queens){
        for (let [dirR, dirC] of moves){
            let [newR,newC] = [r+dirR, c+dirC]
            while(isValid(newR,newC)){
                matriz[newR][newC] = 1;
                newR += dirR;
                newC += dirC;
            }
        }
    }

    return matriz
}

function queen(matriz){
    let queens = []
    for(let i = 0; i<6;i++){
        for(let j = 0; j<6;j++){
            if(matriz[i][j] === 1){
                queens.push([i,j])
            }
        }
    }
    //console.log(matriz)
    return newMartiz(queens, matriz)
}

let matriz = [];
for (let i = 0; i < 6; i++) {
    matriz[i] = []; 
    for (let j = 0; j < 6; j++) {
        matriz[i][j] = 0; 
    }
}

matriz[1][1] = 1;
matriz[3][4] = 1;
matriz[4][4] = 1;

console.log(matriz)

console.log(queen(matriz))