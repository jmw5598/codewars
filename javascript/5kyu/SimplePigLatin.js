/*
  Move the first letter of each word to the end of it, then add "ay" to the end
  of the word. Leave punctuation marks untouched.

  Examples
    - pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
    - pigIt('Hello world !');     // elloHay orldWay !
*/

// Function version (submitted)
function pigIt(str){
  return str.split(' ')
    .map(e => !e.match(/^[.,:!?]/) ? e.substring(1) + e[0] + 'ay' : e)
    .join(' ');
}

//-----------------
// OTHER SOLUTIONS
//-----------------

// Functional forEach
function pigIt(str){
  let result = [];
  str.split(' ').forEach(e => !e.match(/^[.,:!?]/) ?
      result.push(e.substring(1) + e[0] + 'ay') : result.push(e));
  return result.join(' ');
}

// For Loop version
function pigIt(str){
  let result = [], parts = str.split(' ');
  for(var i = 0; i < parts.length; i++) {
    if(!parts[i].match(/^[.,:!?]/))
      result.push(parts[i].substring(1) + parts[i].charAt(0) + 'ay');
    else
      result.push(parts[i]);
  }
  return result.join(' ');
}
