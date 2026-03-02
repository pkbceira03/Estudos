function subgridSums(grid){
    let [r,c] = [grid.length-1, grid[0].length-1];
    for(i=r; i>=0;i--){
        for(j=c; j>=0; j--){
            console.log("-----------------")
            console.log(grid[i][j])
            if(i+1 <= r){
                grid[i][j]+=grid[i+1][j]
            }
            if(j+1 <= c){
                grid[i][j]+=grid[i][j+1]
            }

            if(i+1 <= r && j+1 <= c){
                grid[i][j]-=grid[i+1][j+1]
            }

            console.log(grid[i][j])
        }
    }

    return grid
}

grid = [
    [-1,2,3],
    [4,0,0],
    [-2,0,9]
]

console.log(subgridSums(grid))