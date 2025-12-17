var countCoveredBuildings = function(n, buildings) {
    if(buildings.length <= 4) return 0;
    let lineX = {};
    let lineY = {};
    let result = 0;

    for (let i = 0; i < buildings.length; i++){
        let [x, y] = buildings[i];

        if(!lineX[x]){
            lineX[x] = {max:y, min:y}
        }else{
            lineX[x].min = Math.min(lineX[x].min, y);
            lineX[x].max = Math.max(lineX[x].max, y);
        }

        if(!lineY[y]){
            lineY[y] = {max:x, min:x};
        }else{
            lineY[y].min = Math.min(lineY[y].min, x);
            lineY[y].max = Math.max(lineY[y].max, x);
        }
    }

    for (let i = 0; i < buildings.length; i++){
        let [x, y] = buildings[i];

        let hasRight = y < lineX[x].max;
        let hasLeft = y > lineX[x].min;

        let hasTop = x > lineY[y].min;
        let hasBottom = x < lineY[y].max;

        if(hasBottom && hasLeft && hasRight && hasTop) result++;
    }

    return result
};

console.log(countCoveredBuildings(3,[[1,2],[2,2],[3,2]]))