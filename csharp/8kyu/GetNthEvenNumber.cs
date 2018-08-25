/*
  Return the Nth Even Number

  NthEven(1) //=> 0, the first even number is 0
  NthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)

  NthEven(100) //=> 198
  NthEven(1298734) //=> 2597466
*/


public class Kata
{
  public static int NthEven(int n)
  {
    return 2 * (n - 1);
  }
}

// Just messing around to learn Linq.
using System;
using System.Linq;
public class Kata
{
  public static int NthEven(int n)
  {
    return Enumerable.Range(0, n).Select(e => e * 2).ToArray()[n - 1];
  }
}
