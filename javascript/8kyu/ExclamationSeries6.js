/*
  Remove n exclamation marks in the sentence from left to right. n is positive
  integer.

  Examples
    remove("Hi!",1) === "Hi"
    remove("Hi!",100) === "Hi"
    remove("Hi!!!",1) === "Hi!!"
    remove("Hi!!!",100) === "Hi"
    remove("!Hi",1) === "Hi"
    remove("!Hi!",1) === "Hi!"
    remove("!Hi!",100) === "Hi"
    remove("!!!Hi !!hi!!! !hi",1) === "!!Hi !!hi!!! !hi"
    remove("!!!Hi !!hi!!! !hi",3) === "Hi !!hi!!! !hi"
    remove("!!!Hi !!hi!!! !hi",5) === "Hi hi!!! !hi"
    remove("!!!Hi !!hi!!! !hi",100) === "Hi hi hi"

  Note
    Please don't post issue about difficulty or duplicate.
*/

// Recursive
function remove(s,n){
  if(n === 0) return s;
  const index = s.indexOf('!');
  return remove(s.substring(0, index) + s.substring(index + 1, s.length), n - 1 );
}

// Iterative
function remove(s, n) {
  let result = s;
  for(let i = 0; i < n; i++) {
    let index = result.indexOf('!');
    result = result.substring(0, index) + result.substring(index + 1, result.length);
  }
  return result;
}
