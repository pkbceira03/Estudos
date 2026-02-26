//6x6
function isValid(matriz,r,c){
    return r>=0 && r<=5 && c>=0 && c<=5 && matriz[r][c] !=1
}
function chessMoves(piece, r, c){
    let moves = []
    let result = []
    let kingMoves = [[-1,-1], [-1,0], [-1,1], [0,-1], [0,1], [1,-1], [1,0], [1,1]]
    let knighMoves = [[-1,-2], [-2,-1], [-2,1],[-1,2], [1,2],[2,1], [2,-1], [1,-2]]

    if(piece === 'knight'){
        moves = knighMoves;
    }else{
        moves = kingMoves
    }

    let matriz = [];

    for (let i = 0; i < 6; i++) {
        matriz[i] = []; 
        for (let j = 0; j < 6; j++) {
            matriz[i][j] = 0; 
        }
    }

    matriz[0][3] = 1;
    matriz[1][1] = 1;
    matriz[1][2] = 1;
    matriz[1][3] = 1;
    matriz[2][1] = 1;
    matriz[2][3] = 1;
    matriz[2][4] = 1;
    matriz[3][0] = 1;
    matriz[3][1] = 1;
    matriz[3][2] = 1;
    matriz[3][3] = 1;
    matriz[5][1] = 1;

    for(let [dirR, dirC] of moves){
        console.log('rcrcrc',dirR,dirC);
        let [newR, newC] = [r+dirR, c+dirC];
        if(piece === 'queen'){
            while (isValid(matriz, newR, newC)){
                console.log(newR,newC)
                result.push([newR,newC])
                newR += dirR;
                newC += dirC;
                
            }
        }else if(isValid(matriz, newR,newC)){
            result.push([newR,newC])
            console.log(newR,newC)
        }
    }

    return result;
}

console.log(chessMoves('queen',4,4))
 