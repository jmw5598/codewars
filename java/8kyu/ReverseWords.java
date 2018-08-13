/*
  Complete the solution so that it reverses all of the words within the string
  passed in.

  Example:
  ReverseWords.reverseWords("The greatest victory is that which requires no
  battle");
  // should return "battle no requires which that is victory greatest The"
*/

import java.util.stream.Stream;
import java.util.stream.Collectors;

public class ReverseWords{

  public static String reverseWords(String str){
    return Stream.of(str.split(" "))
      .reduce((a, e) -> e + " " + a)
      .get();
  }

}
