
function snowPrint(field){
    let [R,C] = [field.length, field[0].length];
    let [r,c] = [0,0];
    let closer;
    let moves = [ -1, 0, 1]
    function isValid(r,c){
        return 0<=r && r<R && 0<=c && c<C && field [r][c] === 1; 
    }

    while (!isValid(r,c)){
        r++;
    }

    closer = r;

    while(c<C-1){
        c++;
        for(dir of moves){
            newR = r+dir;
            if(isValid(newR,c)){
                if(newR<closer){
                    closer = newR
                }
                r = newR
                break;
            }
        }
    }

    return closer;
}
let matriz = []
for (let i = 0; i < 4; i++) {
    matriz[i] = []; 
    for (let j = 0; j < 6; j++) {
        matriz[i][j] = 0; 
    }
}

matriz[2][0] = 1;
matriz[2][1] = 1;
matriz[1][2] = 1;
matriz[2][3] = 1;
matriz[3][4] = 1;
matriz[3][5] = 1;

console.log(snowPrint(matriz))