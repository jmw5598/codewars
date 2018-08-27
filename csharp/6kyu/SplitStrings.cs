/*
  Complete the solution so that it splits the string into pairs of two
  characters. If the string contains an odd number of characters then it should
  replace the missing second character of the final pair with an underscore
  ('_').

  Examples:
    - SplitString.Solution("abc"); // should return ["ab", "c_"]
    - SplitString.Solution("abcdef"); // should return ["ab", "cd", "ef"]
*/


// My Submission.
using System.Linq;
using System.Text.RegularExpressions;
public class SplitString
{
  public static string[] Solution(string str)
  {
    var res = Regex.Matches(str, "(.{1,2})");
    return res.Select(e => e.Value.Length == 2 ? e.Value : e.Value + "_").ToArray();
  }
}

// Slightly cleaner, learned of after submission.
using System.Linq;
using System.Text.RegularExpressions;
public class SplitString
{
  public static string[] Solution(string str)
  {
    if (str.Length % 2 != 0) str += "_";
    return Regex.Matches(str, "(.{1,2})").Select(e => e.Value).ToArray();
  }
}
