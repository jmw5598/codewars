/*
  Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure)
  that checks whether the two arrays have the "same" elements, with the same
  multiplicities. "Same" means, here, that the elements in 'b' are the elements
  in 'a' squared, regardless of the order.
*/



using System.Linq;
using System.Collections.Generic;

class AreTheySame
{
  public static bool comp(int[] a, int[] b)
  {

    if(a == null || b == null)
      return false;

    var list = new List<int>(b);

    foreach(var i in a) {
      if(list.Contains(i * i))
        list.Remove(i * i);
      else
        return false;
    }

    return list.Count() == 0;
  }
}
