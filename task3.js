function identity(matrix){

for (let a = 0; a < matrix.length; a++) {
    if (matrix[a].length !== 3) {
        console.log("not valid matrix")
    }
    
  }

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (i === j && matrix[i][j] !== 1) {
console.log("it is not idenity matrix")    
} 
    else if (i !== j && matrix[i][j] !== 0) {
        console.log("it is not idenity matrix")    
    }
  }
}
x="it is indentity matrix"
return x;
}
const matrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
//const matrix = [[2, 0, 0], [0, 2, 0], [0, 0, 2]]
// const matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
// const matrix = [[1, 0, 0], [0, 1, 0], [1, 1, 1]]
 //const matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]

      console.log(identity(matrix)); 