/*
  Complete the method/function so that it converts dash/underscore delimited
  words into camel casing. The first word within the output should be
  capitalized only if the original word was capitalized.

  Examples
    - Kata.ToCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
    - Kata.ToCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"
*/

using System;
using System.Text.RegularExpressions;
using System.Linq;
public class Kata
{
  public static string ToCamelCase(string str)
  {
    var res = Regex.Split(str, @"[-_]");
    return res.Select((e, i) => i == 0 ? e : char.ToUpper(e[0]) + e.Substring(1))
      .Aggregate((a, e) => a + e);
  }
}
