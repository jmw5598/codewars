/*
  Given the following table 'decimals':

  decimals table schema
    - id
    - number1
    - number2

  Return a table with two columns (number1, number2) where the values in
  number1 have been rounded down and the values in number2 have been rounded up.
*/

SELECT FLOOR(d.number1) AS number1, CEILING(d.number2) AS number2
FROM decimals d;
