/*
  PRODUCT ARRAY (ARRAY SERIES 5)

  Task
    Given an array/list [] of integers , Construct a product array Of same size
    such That prod[i] is equal to The Product of all the elements of Arr[]
    except Arr[i].

  Notes
    - Array/list size is at least 2 .
    - Array/list's numbers Will be only Postives
    - Repeatition of numbers in the array/list could occur.
*/

function productArray(numbers){
  const sum = numbers.reduce((a, b) => a * b, 1);
  return numbers.map(e => sum / e);
}
