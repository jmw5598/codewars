/*
  MAXIMUM TRIPLET SUM (ARRAY SERIES 7)

  Task
    Given an array/list [] of n integers , find maximum triplet sum in the
    array Without duplications .

    Notes :
      - Array/list size is at least 3 .
      - Array/list numbers could be a mixture of positives , negatives and
        zeros.
      - Repeatition of numbers in the array/list could occur , So (duplications
        are not included when summing).
*/

function maxTriSum(numbers){
  return numbers.filter((e, i, a) => i === a.indexOf(e))
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);
}
