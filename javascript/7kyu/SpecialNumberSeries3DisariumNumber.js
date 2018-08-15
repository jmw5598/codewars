/*
  SPECIAL NUMBER SERIES 3 (DISARIUM NUMBER)

  Definition
    Disarium number is the number that The sum of its digits powered with their
    respective positions is equal to the number itself.

  Task
    Given a number, Find if it is Disarium or not .

  Notes
    - Number passed is always Positive .
    - Return the result as String
*/

function disariumNumber(n){
  const result = n.toString().split('')
      .map((e, i) => Math.pow(Number.parseInt(e), i + 1))
      .reduce((a, b) => a + b, 0);
  return result === n ? 'Disarium !!' : 'Not !!';
}
