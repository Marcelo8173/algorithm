function diagonalDifference(arr) {
  let lineA = 0;
  let lineB = 0;
  const n = arr.length;

  for (let index = 0; index < n; index++) {
    lineA += arr[index][index];
    lineB += arr[index][n - index - 1];
  }
  return Math.abs(lineA - lineB);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);
