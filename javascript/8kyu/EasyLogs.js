/*
  Add two logs with base X, with the value of A and B. Example log A + log B
  where the base is X.
*/

function logs(x , a, b){
  const logbase = Math.log(x);
  return Math.log(a) / logbase + Math.log(b) / logbase;
}
