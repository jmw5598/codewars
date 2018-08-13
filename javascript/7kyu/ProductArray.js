/*
  Introduction and Warm-up (Highly recommended)
  ---------------------------------------------
  Playing With Lists/Arrays Series

  Task
    Given an array/list [] of integers , Construct a product array Of same size
    Such That prod[i] is equal to The Product of all the elements of Arr[]
    except Arr[i].

  Notes
    - Array/list size is at least 2 .
    - Array/list's numbers Will be only Postives
    - Repeatition of numbers in the array/list could occur.
*/

function productArray(numbers){
  const productOfAll = numbers.reduce((a, b) => a * b, 1);
  return numbers.map(n => productOfAll/n);
}
