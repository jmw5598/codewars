/*
  For this challenge you need to create a simple HAVING statement, you want to
  count how many people have the same age and return the groups with 10 or more
  people who have that age.

  people table schema
  - id
  - name
  - age

  return table schema
  - age
  - total_people
*/

SELECT p.age, COUNT(p.age) AS total_people
FROM people AS p
GROUP BY p.age
HAVING COUNT(p.age) >= 10;
