/*
  Subtract the sum
  NOTE! This kata can be more difficult than regular 8-kyu katas

  Complete the function which get an input number n such that n >= 10 and n < 10000, then:

  Sum all the digits of n.
  Subtract the sum from n, and it is your new n.
  If the new n is in the list below return the associated fruit, otherwise return back to task 1.
  Example
  n = 325
  sum = 3+2+5 = 10
  n = 325-10 = 315 (not in the list)
  sum = 3+1+5 = 9
  n = 315-9 = 306 (not in the list)
  sum = 3+0+6 = 9
  n =306-9 = 297 (not in the list)
  .
  .
  .
  ...until you find the first n in the list below.

  There is no preloaded code to help you. This is not about coding skills; think before you code

  1-kiwi
  2-pear
  3-kiwi
  4-banana
  5-melon
  6-banana
  7-melon
  8-pineapple
  9-apple
  10-pineapple
  11-cucumber
  12-pineapple
  13-cucumber
  14-orange
  15-grape
  16-orange
  17-grape
  18-apple
  19-grape
  20-cherry
  21-pear
  22-cherry
  23-pear
  24-kiwi
  25-banana
  26-kiwi
  27-apple
  ...
  90-apple
  91-kiwi
  92-banana
  93-kiwi
  94-banana
  95-melon
  96-banana
  97-melon
  98-pineapple
  99-apple
  100-pineapple
*/

/*
  When  you sum the digits of a number and then subtract form the original
  number you will always end up with a number divisible by 9.  The table provide
  maps 'apple' to the multiples of 9 so the resule will always be 'apple' as
  the fruit being returned.

*/
function SubtractSum(n){
  return 'apple';
}
