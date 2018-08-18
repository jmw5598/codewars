/*
  In your application, there is a section for adults only. You need to get a
  list of names and ages of users from the users table, who are 18 years old
  or older.

  Users table schema
    - name
    - age

  NOTE:
    Your solution should use pure SQL. Ruby is used within the test cases to do
    the actual testing.
*/

SELECT *
FROM users u
WHERE u.age >= 18;
