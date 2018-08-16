/*
  Given a string of words (x), you need to return an array of the words, sorted
  alphabetically by the final character in each.

  If two words have the same last letter, they returned array should show them
  in the order they appeared in the given string.
*/

// Ternary
function last(x){
  const last => (str) => str[str.length-1];
  return x.split(' ').sort(
    (a, b) => last(a) < last(b) ? -1 : last(b) < last(a) ? 1 : 0
  );
}

// If Statements
function last(x){
  const last => (str) => str[str.length-1];
  return x.split(' ').sort((a, b) => {
    if (last(a) < last(b))
      return -1
    else if (last(b) < last(a))
      return 1;
    else
      return 0;
  });
}
