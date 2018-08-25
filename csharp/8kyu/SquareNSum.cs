/*
  Complete the squareSum/square_sum/SquareSum method so that it squares each
  number passed into it and then sums the results together.

  For example:
    - Kata.SquareSum(new int[] {1, 2, 2}) # should return 9
*/

// Functional with Linq (submitted)
using System;
using System.Linq;

public static class Kata
{
  public static int SquareSum(int[] n)
  {
      return n.Select(el => (int) Math.Pow(el, 2))
        .Aggregate((acc, el) => acc += el);
  }
}


// Functional Sum() (learned of Sum() after submitting)
using System.Linq;
public class Kata
{
  public static int Grow(int[] x)
  {
    return x.Sum(el => el * el);
  }
}
