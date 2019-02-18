/*
  Greetings Grasshopper!# Using only SQL, write a query that returns all rows
  in the custid, custname, and custstate columns from the customers table.
*/

SELECT c.custid, c.custname, c.custstate
FROM customers AS c;
