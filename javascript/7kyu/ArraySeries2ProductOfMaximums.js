/*
  PRODUCT OF MAXIMUMS OF ARRAY (ARRAY SERIES 2)

  Task
    Given an array/list [] of integers , Find the product of the k maximal
    numbers.

  Notes
    - Array/list size is at least 3 .
    - Array/list's numbers Will be mixture of positives , negatives and zeros
    - Repeatition of numbers in the array/list could occur.
*/

function maxProduct(numbers, size){
  let temp = numbers.sort((a, b) => b - a);
  return temp.slice(0, size).reduce((a, b) => a * b);
}
