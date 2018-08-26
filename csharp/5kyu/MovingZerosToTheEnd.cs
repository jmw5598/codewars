
/*
  Write an algorithm that takes an array and moves all of the zeros to the end,
  preserving the order of the other elements.

  Kata.MoveZeroes(new int[] {1, 2, 0, 1, 0, 1, 0, 3, 0, 1}) => new int[] {1, 2,
  1, 1, 3, 1, 0, 0, 0, 0}
*/

// Using Linq
using System.Linq;
public class Kata
{
  public static int[] MoveZeroes(int[] arr)
  {
    return arr.Where(e => e != 0).Concat(arr.Where(e => e == 0)).ToArray();
  }
}


// Using loop with new array.
public class Kata
{
  public static int[] MoveZeroes(int[] arr)
  {

    int[] result = new int[arr.Length];
    int index = 0;

    foreach (var i in arr) {
      if(i != 0) {
        result[index] = i;
        index++;
      }
    }

    return result;
  }
}

// Altered array in place.
public class Kata
{
  public static int[] MoveZeroes(int[] arr)
  {

    int zeros = 0;

    for(var i = 0; i < arr.Length - 1; i++)
    {

      if(arr[i] == 0 && arr[i + 1] != 0) {
        arr[i - zeros] = arr[i + 1];
        arr[i + 1] = 0;
      } else if (arr[i] == 0 && arr[i + 1] == 0) {
        zeros++;
      }

    }

    return arr;
  }
}
