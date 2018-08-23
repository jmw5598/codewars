
/*
  The function takes in 2 inputs x and y, and should return x to the power of y

  Simple, right? But you're NOT allowed to use Math.pow();

  Obs: x and y will be naturals, so DON'T take fractions into consideration;

  Great coding <3
*/

function power(x, y) {
  return x**y;
}

function power(x,y) {
  if(x === 1) return 1;
  let result = 1;
  for(let i = 0; i < y; i++) result *= x;
  return result;
}
