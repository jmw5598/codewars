/*
  Definition
    A Tidy number is a number whose digits are in non-decreasing order.

  Task
    Given a number, Find if it is Tidy or not .

  Warm-up (Highly recommended)
  Playing With Numbers Series

  Notes
    Number passed is always Positive .

  Return the result as a Boolean
*/

function tidyNumber(n){
  const items = n.toString().split('');
  for(var i = 0; i < items.length - 1; i++) {
    if(items[i] > items[i+1])
      return false;
  }
  return true;
}
