
module.exports = function towelSort (matrix) {
  if (matrix == [] || matrix == null) {
    return [];
  }
  let arr = [];
  for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
          matrix[i] = matrix[i].reverse();
      }
      for (let y = 0; y < matrix[i].length; y++) {
          arr.push(matrix[i][y]);
      }
  }
  return arr;
}
