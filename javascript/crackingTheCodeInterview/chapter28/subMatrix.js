 function subMatrix(grid){
    let [r,c] = [grid.length-1, grid[0].length-1];
    for(let i = r; i>=0; i--){
        for(let j = c; j>=0; j--){
            if(i+1 <= r ){
                if(grid[i][j] < grid[i+1][j]){
                    grid[i][j] = grid[i+1][j]
                }
                
            }
            if(j+1 <= c){
                if(grid[i][j] < grid[i][j+1]){
                    grid[i][j] = grid[i][j+1]
                }
            }
        }
    }
    return grid
}

grid = [
    [1,5,3],
    [4,-1,0],
    [2,2,2]
]

console.log(subMatrix(grid));