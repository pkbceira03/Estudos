function validSudoku(board){
    return validR(board) && validC(board) && subBoard(board)
}

function validR(board){
    let have = [];
    let invalid = false;
    for(let i = 0; i<board.length;i++){
        have = [];
        for(let j = 0; j<board.length;j++){
            if(have.includes(board[i][j]) && board[i][j] !== 0){
                invalid = true
                break;
            }else{
                have.push(board[i][j])
            }
        }

        if(invalid){
            break;
        }
    }
    return !invalid
}

function validC(board){
    let have = [];
    let invalid = false;
    for(let i = 0; i<board.length;i++){
        have = [];
        for(let j = 0; j<board.length;j++){
            if(have.includes(board[j][i]) && board[j][i] !== 0){
                invalid = true
                break;
            }else{
                have.push(board[j][i])
            }
        }

        if(invalid){
            break;
        }
    }
    return !invalid
}

function subBoard(board){
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            if(!(validBoard(board, i*3, j*3))){
                return false
            }
        }
    }
    return true
}

function validBoard(board, r,c){
    let have = [];
    for(let i = r; i < r+3; i++){
        for(let j = c; j < c+3; j++){
            if(have.includes(board[i][j]) && board[i][j] !== 0){
                return false;
            }else{
                have.push(board[i][j])
            }
        }
    }
    return true
}

let sudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

let sudoku2 = [
    [0, 0, 0, 2, 6, 0, 7, 0, 1],
    [6, 8, 0, 0, 7, 0, 0, 9, 0],
    [1, 9, 0, 0, 0, 4, 5, 0, 0],
    [8, 2, 0, 1, 0, 0, 0, 4, 0],
    [0, 0, 4, 6, 0, 2, 9, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 2, 8],
    [0, 0, 9, 3, 0, 0, 0, 7, 4],
    [0, 4, 0, 0, 5, 0, 0, 3, 6],
    [7, 8, 3, 0, 1, 8, 0, 0, 0]
];

console.log(validSudoku(sudoku2))