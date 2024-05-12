function diagonalDifference(arr) {
  const arrayLength = arr.length;
  const { primarySum, secondarySum } = arr.reduce(
    (accumulator, row, index) => {
      // -1 because array is 0-based indexed
      const secondaryDiagonalIndex = arrayLength - 1 - index;

      const primaryDiagonalValue = row[index];
      const secondaryDiagonalValue = row[secondaryDiagonalIndex];

      accumulator.primarySum += primaryDiagonalValue;
      accumulator.secondarySum += secondaryDiagonalValue;
      return accumulator;
    },
    { primarySum: 0, secondarySum: 0 }
  );
  return Math.abs(primarySum - secondarySum);
}
