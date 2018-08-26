/*
  Given an array, find the int that appears an odd number of times.
  There will always be only one integer that appears an odd number of times.
*/

// My Solution
using System;
using System.Linq;
class Kata
{
  public static int find_it(int[] seq)
  {
    return seq.GroupBy(e => e)
      .Where(e => e.Count() % 2 != 0)
      .Select(e => e.Key)
      .FirstOrDefault();
  }
}


// Learned of Single() after submission
using System;
using System.Linq;
class Kata
{
  public static int find_it(int[] seq)
  {
    return seq.GroupBy(e => e)
      .Single(e => e.Count() % 2 != 0).Key;
  }
}
