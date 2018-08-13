/*
  Task:
    Given a number, 3 for example, return a string with a murmur:
    "1 sheep...2 sheep...3 sheep..."

  Note:
    You will always receive a positive integer.
*/

var countSheep = (num) => {
  let result = '';
  for(var i = 1; i <= num; i++)
    result += `${i} sheep...`;
  return result;
}
