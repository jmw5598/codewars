/*
  Given the following table 'decimals':

  decimals table schema
  - id
  - number1
  - number2

  Return a table with one column (result) which is the output of number1
  raised to the power of number2.
*/

SELECT POWER(d.number1, d.number2) AS "result"
FROM decimals AS d
