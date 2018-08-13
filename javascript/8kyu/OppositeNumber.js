/*
  Very simple, given a number, find its opposite.

  Examples:
  * 1: -1
  * 14: -14
  * -34: 34

  But can you do it in 1 line of code and without any conditionals?
*/

// my first attempt
function opposite(number) {
  return number > 0 ? 0 - number : Math.abs(number);
}

// after submitting my attempt I learned the to use the - to flip the number;
function opposite(number) {
  return -number;
}
