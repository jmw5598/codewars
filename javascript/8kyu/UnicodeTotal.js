/*
  You'll be given a string, and have to return the total of all the unicode
  characters as an int. Should be able to handle any characters sent at it.

  Examples:
    uniTotal("a") == 97 uniTotal("aaa") == 291
*/

function uniTotal(str) {
  return str.split("")
    .map(e => e.charCodeAt(0))
    .reduce((a, e) => a + e, 0);
}
