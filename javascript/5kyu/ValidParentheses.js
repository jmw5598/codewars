/*
  Write a function called that takes a string of parentheses, and determines if
  the order of the parentheses is valid. The function should return true if the
  string is valid, and false if it's invalid.

  Examples
    - "()"              =>  true
    - ")(()))"          =>  false
    - "("               =>  false
    - "(())((()())())"  =>  true

  Constraints
    0 <= input.length <= 100

  You may assume that the input string will only contain opening and closing
  parenthesis and will not be an empty string.
*/

/*
  Checks to see if first char is opening paren else returns false.
  Continues looping through the rest of the string chars, pushing open
  parentheses and matching pairs on closing (poping())
  Returns trues if the stack is empty, false if there is items left on the stack.
*/
function validParentheses(parens){
  let stack = [];

  if (parens[0] !== '(')
    return false;
  else
    stack.push(parens[0]);

  for(var i = 1; i < parens.length; i++) {
    if (stack[stack.length -1] === '(' && parens[i] === ')')
      stack.pop();
    else
      stack.push(parens[i]);
  }

  return stack.length === 0;
}
