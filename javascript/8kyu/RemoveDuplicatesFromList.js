/*
  Define a function that removes duplicates from an array of numbers and
  returns it as a result.

  The order of the sequence has to stay the same.
*/

// Using filter
function distinct(a) {
  return a.filter((e, i, a) => index === a.indexOf(e));
}

// Using the spread operator
function distinct(a) {
  return [...new Set(a)];
}
