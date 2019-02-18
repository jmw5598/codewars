/*
  Given a demographics table in the following format:

  demographics table schema
  - id
  - name
  - birthday
  - race

  You need to return the same table where all letters are lowercase in the
  race column.
*/

SELECT d.id, d.name, d.birthday, LOWER(d.race) AS race
FROM demographics AS d
