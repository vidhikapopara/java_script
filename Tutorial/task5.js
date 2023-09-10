function diagonalSort(matrix) {
    const cols = matrix[0].length;
    const rows = matrix.length;
    const maxLength = Math.max(cols, rows);
    let temp;
  
    for (let k = 0; k <= 2 * (maxLength - 1); k++) {
      temp = [];
      for (let y = cols - 1; y >= 0; y--) {
        let x = k - y;
        //console.log(k, y, x);
        if (x >= 0 && x < rows) {
          temp.push(matrix[y][x]);
        }
      }
      if (temp.length > 0) {
        //console.log(temp);
      }
      var len=temp.length
      var temps;
      for (var i = 0; i < len - 1; i++) {
        for (var j = 0; j < len - i - 1; j++) {
          if (temp[j] > temp[j + 1]) {
            temps = temp[j];
            temp[j] = temp[j + 1];
            temp[j + 1] = temps;
          }
        }
    }
    console.log(temp)  
temp.flat()
  }
  }

var matrix=[
    [1, 2, 3],
    [4, 9, 6],
    [7, 5, 9]
]
diagonalSort(matrix)