/*
  Count the number of Duplicates
  Write a function that will return the count of distinct case-insensitive
  alphabetic characters and numeric digits that occur more than once in the
  input string. The input string can be assumed to contain only alphabets
  (both uppercase and lowercase) and numeric digits.

  Example
    "abcde" -> 0 # no characters repeats more than once
    "aabbcde" -> 2 # 'a' and 'b'
    "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (bandB)
    "indivisibility" -> 1 # 'i' occurs six times
    "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
    "aA11" -> 2 # 'a' and '1'
    "ABBA" -> 2 # 'A' and 'B' each occur twice
*/


/*
  Uses a dictionary with char as key and bool as value (bool being a flag for dups)
  Loops throught char[] checking Dictionary for key and flag is false.
  If key exists and flag false set flag true and increment duplicates counter.
  Else try and TryAdd with char key and false.
*/
using System;
using System.Collections.Generic;
public class Kata
{
  public static int DuplicateCount(string str)
  {

    var counter = new Dictionary<char, bool>();
    var chars = str.ToLower().ToCharArray();
    var duplicates = 0;

    foreach(char c in chars) {
      if(counter.ContainsKey(c) && !counter[c]) {
        counter[c] = true;
        ++duplicates;
      } else {
        counter.TryAdd(c, false);
      }
    }
    return duplicates;
  }
}

/*
  As I dont come from a C# background I found out about the power of LINQ after
  submitting my Dictionary solution.  Learned of Linq's GroupBy function.
*/
using System;
using System.Linq;
public class Kata
{
  public static int DuplicateCount(string str)
  {
    return str.ToLower().GroupBy(c => c).Count(c => c.Count() > 1);
  }
}
