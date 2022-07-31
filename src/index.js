
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length === 0){
    return []
  }

  if (matrix == []){
    return [];
  }

  let ourArray = []

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (i % 2 === 1 || i === 1){
        ourArray.push(matrix[i][matrix[i].length - j - 1])
      } else{
        ourArray.push(matrix[i][j])
      }
    }
  }
  return ourArray;
}
