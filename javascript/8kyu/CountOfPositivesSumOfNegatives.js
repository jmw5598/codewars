/*
  Given an array of integers.

  Return an array, where the first element is the count of positives numbers
  and the second element is sum of negative numbers.

  If the input array is empty or null, return an empty array:

  ATTENTION!
  The passed array should NOT be changed. Read more here.

  For example:
    - input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
    - return [10, -65].
*/

function countPositivesSumNegatives(input) {
    if(!input || input.length === 0) return [];
    return [
      input.filter(n => n > 0).length,
      input.filter(n => n < 0).reduce((a, b) => a + b, 0)
    ]
}
