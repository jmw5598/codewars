/*
  Given an array of ints, return the index such that the sum of the elements to
  the right of that index equals the sum of the elements to the left of that
  index. If there is no such index, return -1.

  For example:
    - peak([1,2,3,5,3,2,1]) = 3,
        because the sum of the elements at indexes 0,1,2 == sum of elements at
        indexes 4,5,6. We don't sum index 3.
    - peak([1,12,3,3,6,3,1]) = 2
    - peak([10,20,30,40]) = -1

  More examples in the test cases.
*/

function peak(arr){
  for(var i = 1; i < arr.length - 1; i++) {
    const left = arr.slice(0, i).reduce((a, b) => a + b, 0);
    const right = arr.slice(i + 1, arr.length).reduce((a, b) => a + b, 0);
    if(left === right) return i;
  }
  return -1;
}
