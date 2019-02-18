/*
  Create a simple SELECT query to display student information of all
  ACTIVE students.
*/

SELECT s.*
FROM students AS s
WHERE s.IsActive = 1;
