/*
  I will give you an integer. Give me back a shape that is as long and wide as
  the integer. The integer will be a whole number between 0 and 50.

  Example: Integer = 3; I expect a 3x3 square back just like below as a string.
*/

// My Submission.
function generateShape(int){
  let result =  ('+'.repeat(int) + '\n').repeat(int);
  return result.substring(0, result.length - 1);
}

// After submitting I learned I could use trim() to trim off the new line
// character (\n) instead of substring.
function generateShape(int){
  return ('+'.repeat(int) + '\n').repeat(int).trim();
}
