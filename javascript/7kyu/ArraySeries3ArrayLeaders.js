/*
  ARRAY LEADERS (ARRAY SERIES 3)
  
  Definition
    An element is leader if it is greater than The Sum all the elements to its
    right side.

  Task
    Given an array/list [] of integers , Find all the LEADERS in the array.

  Notes
    - Array/list size is at least 3 .
    - Array/list's numbers Will be mixture of positives , negatives and zeros
    - Repeatition of numbers in the array/list could occur.
    - Returned Array/list should store the leading numbers in the same order in the original array/list .
*/

// Pure functional solution (sumbited version)
var arrayLeaders = numbers => {
  return numbers.filter((e, i, a) => e > a.slice(i + 1).reduce((a, b) => a + b, 0));
}

// Initial solution with for loop.
var arrayLeaders = numbers => {
  let leaders = [];
  for(var i = 0; i < numbers.length; i++) {
    const right = numbers.slice(i + 1, numbers.length).reduce((a, b) => a + b, 0);
    if(right < numbers[i])
      leaders.push(numbers[i]);
  }
  return leaders;
}
