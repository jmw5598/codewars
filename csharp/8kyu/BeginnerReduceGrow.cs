/*
  Given and array of integers (x), return the result of multiplying the values
  together in order. Example:

    [1, 2, 3] --> 6

  For the beginner, try to use the reduce method - it comes in very handy quite
  a lot so is a good one to know.

  Array will not be empty.
*/

// Using Array
using System;
public class Kata
{
  public static int Grow(int[] x)
  {
    int sum = 1;
    Array.ForEach(x, delegate(int i) { sum *= i; });
    return sum;
  }
}


// Using Linq
using System.Linq;
public class Kata
{
  public static int Grow(int[] x)
  {
    return x.Aggregate((acc, el) =>  acc*el);
  }
}
