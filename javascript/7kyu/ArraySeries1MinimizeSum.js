/*
  MINIMIZE SUM OF ARRAY (ARRAY SERIES 1)

  Task
    Given an array of intgers , Find the minimum sum which is obtained from
    summing each Two integers product.

  Notes
    - Array/list will contain positives only .
    - Array/list will always has even size.
*/

function minSum(arr) {
  let temp = arr.sort((a, b) => a -b), result = 0;
  for(var i = 0; i < temp.length/2; i++)
    result += (temp[i] * temp[(temp.length-1) - i]);
  return result;
}
