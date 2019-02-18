/*
  To hexYou have access to a table of monsters as follows:

  monsters table schema
  - id
  - name
  - legs
  - arms
  -characteristics

  Your task is to turn the numeric columns (arms, legs) into equivalent
  hexadecimal values.

  output table schema
  - legs
  - arms
*/

SELECT TO_HEX(m.legs::bigint) AS legs, TO_HEX(m.arms) AS arms
FROM monsters AS m
