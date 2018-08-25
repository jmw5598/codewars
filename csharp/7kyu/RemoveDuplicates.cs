/*

*/

// Linq
using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
  public static List<int> Unique(List<int> integers)
  {
    return integers.Distinct().ToList();
  }
}

// Iterative
using System;
using System.Collections.Generic;
using System.Linq;

public class Kata
{
  public static List<int> Unique(List<int> integers)
  {
    var distinct = new List<int>();

    foreach (int i in integers) {
      if(!distinct.Contains(i))
        distinct.Add(i);
    }

    return distinct;
  }
}
