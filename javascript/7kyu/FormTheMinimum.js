/*
  Task :
    Given a list of digits, return the smallest number that could be formed
    from these digits, using the digits only once ( ignore duplicates).

  Notes :
    Only positive integers will be passed to the function (> 0 ), no negatives
    or zeros.
*/

function minValue(values){
  return Number.parseInt(
    values.filter((e, i, a) => i === a.indexOf(e))
      .sort((a, b) => a - b)
      .join('')
  );
}
