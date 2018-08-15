/*
  Scenario
    Now that the competition gets tough it will Sort out the men from the boys.
    Men are the Even numbers and Boys are the odd.

  Task
    Given an array/list [] of n integers , Separate The even numbers from the
    odds , or Separate the men from the boys  !alt !alt

  Notes
    - Return an array/list where Even numbers come first then odds
    - Since , Men are stronger than Boys , Then Even numbers in ascending order
      While odds in descending .
    - Array/list size is at least 4 .
    - Array/list numbers could be a mixture of positives , negatives .
    - Have no fear , It is guaranteed that no Zeroes will exists . !alt
    - Repetition of numbers in the array/list could occur , So (duplications
      are not included when separating).
*/

/*
  First filters out array for duplicate elements then sorts in ASC order.
  Loops through the result and appends to the even array (push) prepends to
  the odd array (unshift) to keep the even ASC and the odd DESC.
  Returns the concatenation of even and odd.
*/
function menFromBoys(arr){
  let odd = [], even = [];
  arr.filter((e, i, a) => i === a.indexOf(e)).sort((a, b) => a - b)
     .forEach(e => e % 2 === 0 ? even.push(e) : odd.unshift(e));
  return even.concat(odd);
}
