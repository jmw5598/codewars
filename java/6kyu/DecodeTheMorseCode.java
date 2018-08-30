/*
  This kata is part of a series on the Morse code. After you solve this kata,
  you may move to the next one.

  In this kata you have to write a simple Morse code decoder. While the Morse
  code is now mostly superceded by voice and digital data communication channels,
  it still has its use in some applications around the world.

  The Morse code encodes every character as a sequence of "dots" and "dashes".
  For example, the letter A is coded as ·−, letter Q is coded as −−·−, and
  digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally
  capital letters are used. When the message is written in Morse code, a single
  space is used to separate the character codes and 3 spaces are used to
  separate words. For example, the message HEY JUDE in Morse code is
  ···· · −·−− ·−−− ··− −·· ·.

  NOTE: Extra spaces before or after the code have no meaning and should be
        ignored.

  In addition to letters, digits and some punctuation, there are some special
  service codes, the most notorious of those is the international distress
  signal SOS (that was first issued by Titanic), that is coded as ···−−−···.
  These special codes are treated as single special characters, and usually are
  transmitted as separate words.

  Your task is to implement a function that would take the morse code as input
  and return a decoded human-readable string.

  For example:
    MorseCodeDecoder.decode(".... . -.--   .--- ..- -.. .")
    //should return "HEY JUDE"

  NOTE: For coding purposes you have to use ASCII characters . and -, not
  Unicode characters.

  The Morse code table is preloaded for you as a dictionary, feel free to use it:
  Java: MorseCode.get(".--")

  Good luck!
*/

// Functional : Stream
import java.util.stream.Stream;
import java.util.stream.Collectors;

public class MorseCodeDecoder {
    public static String decode(String morseCode) {
        return Stream.of(morseCode.trim().split("   "))
            .map(w -> Stream.of(w.split(" "))
                .map(MorseCode::get)
                .collect(Collectors.joining(""))
            ).collect(Collectors.joining(" "));
    }
}

// Imperative : Loops
import java.util.stream.Stream;

public class MorseCodeDecoder {
    public static String decode(String morseCode) {

        StringBuilder sb = new StringBuilder();

        for(String w : morseCode.trim().split("   ")) {
          for(String c : w.split(" ")) {
            sb.append(MorseCode.get(c));
          }
          sb.append(" ");
        }

        return sb.toString().trim();
    }
}
