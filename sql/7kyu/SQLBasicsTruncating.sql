/*
  Given the following table 'decimals':

  decimals table schema
  - id
  - number1
  - number2

  Return a table with one column (towardzero) where the values are the result
  of number1 + number2 truncated towards zero.
*/

SELECT TRUNC(d.number1 + d.number2) AS towardzero
FROM decimals AS d
