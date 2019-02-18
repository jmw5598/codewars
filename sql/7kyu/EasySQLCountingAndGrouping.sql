/*
  Given a demographics table in the following format:

  demographics table schema
  - id
  - name
  - birthday
  - race

  you need to return a table that shows a count of each race represented,
  ordered by the count in descending order as:

  output table schema
  - race
  - count
*/

SELECT d.race, COUNT(*) AS "count"
FROM demographics AS d
GROUP BY d.race
ORDER BY "count" DESC;
