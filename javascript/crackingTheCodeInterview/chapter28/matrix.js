class Matrix{
    constructor(matrix){
        this.matrix = matrix;
    }

    clockWiseRotation(){
        this.matrix = this.transposition();
        return this.horizontalReflection();
    }
    
    ciounterClockWiseRotation(){
        this.matrix = this.transposition();
        return this.verticalReflection();
    }
        
    transposition(){
        let [R,C] = [this.matrix.length, this.matrix[0].length]
        let newMatrix = Array.from({ length: C }, () => Array(R).fill(0));
        for(let i = 0; i<R;i++){
            for(let j = 0; j<C;j++){
                newMatrix[j][i] = this.matrix[i][j];
            }
        }

        console.log(newMatrix)
        return newMatrix
    }

    horizontalReflection(){
        let newMatrix = this.matrix;
        for(let i = 0; i<newMatrix.length; i++){
            let [p1,p2] = [0,newMatrix[i].length-1]
            while(p1<p2){
                [newMatrix[i][p1],newMatrix[i][p2]] = [newMatrix[i][p2],newMatrix[i][p1]];
                p1++
                p2--
            }
        }

        console.log(newMatrix);
        return newMatrix
    }

    verticalReflection(){
        let newMatrix = this.matrix;
        let [i,j] = [0,newMatrix.length-1]
        while(i<j){
            [newMatrix[i],newMatrix[j]] = [newMatrix[j],newMatrix[i]];
            i++
            j--
        }
        console.log(newMatrix)
        return newMatrix
    }
}

grid= [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

let myMatrix = new Matrix(grid);
//myMatrix.verticalReflection()
//myMatrix.horizontalReflection()
//myMatrix.transposition()
//myMatrix.clockWiseRotation()
myMatrix.ciounterClockWiseRotation()