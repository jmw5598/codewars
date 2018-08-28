/*

*/

public class MyFirstInterpreter {

  private String code;

  public MyFirstInterpreter(String code) {
    this.code = code;
  }

  public String interpret() {

    String output = "";
    int memory = 0;
    char[] instructions = code.toCharArray();

    for(char i : instructions) {
      switch(i) {
        case '+':
          if(memory == 255) memory = 0;
          else ++memory;
          break;
        case '.':
          output += (char) memory;
          break;
      }
    }

    return output;
  }
}
