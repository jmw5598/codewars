/*
  Imagine you are in a universe where you can just perform the following
  arithematic operations. Addition(+), Subtraction(-), Multiplication(*),
  Division(/). You are given given a postfix expression. Postfix expression is
  where operands come after operator. Each operator and operand are seperated by
  a space. You need to evaluate the expression.

  For example: 25 45 + is equivalent of 25 + 45, hence the answer would be 70.
  Instead if you are given 20 40 + 60 *, it is equivalent of (20+40) * 60, hence
  the answer should be 3600. 20 40 60 + * is equivalent of 20 * (40 + 60) = 2000.

  Create a method 'evaluate' that takes a string as input and returns a long
  resulted in the evaluation. Just concentrate on happy paths. Assume that
  expression is always valid and division is always an integer division.
*/

import java.util.Stack;

public class PostfixExpression {
    public static long evaluate(String s) {

        Stack<Long> stack = new Stack<>();
        String[] strs = s.split(" ");

        for(int i = 0; i < strs.length; i++) {
            switch (strs[i]) {
                case "+":
                    stack.push(stack.pop() + stack.pop());
                    break;
                case "-":
                    stack.push(-stack.pop() + stack.pop());
                    break;
                case "*":
                    stack.push(stack.pop() * stack.pop());
                    break;
                case "/":
                    long div = stack.pop();
                    stack.push(stack.pop() / div);
                    break;
                default:
                    stack.push(Long.parseLong(strs[i]));
                break;
            }
        }
        return stack.pop();
    }
}
