/*
  Ask a small girl - "How old are you?". She always says strange things... Lets
  help her!

  For correct answer program should return int from 0 to 9.

  Assume test input string always valid and may look like "1 year old" or "5
  years old", etc.. The first char is number only.
*/

// Arrow function
const getAge = (inputString) => Number.parseInt(inputString[0]);

// Declarative function
function getAge(inputString){
  return Number.parseInt(inputString[0]);
}
