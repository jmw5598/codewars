/*
  Write a class function named repeat() that takes two arguments (a string and
  a long integer), and returns a new string where the input string is repeated
  that many times. For example:

  Repeater.repeat("a", 5)
  should return "aaaaa"
*/

const repeater = (string, n) => {
  let result = string;
  for(let i = 1; i < n; i ++)
    result += string;
  return result;
}

const repeater = (string, n) => {
  return string.repeat(n);
}
