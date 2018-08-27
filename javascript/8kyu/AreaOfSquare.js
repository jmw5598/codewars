/*
  Write the function squareArea(A) (square_area($A) in PHP) that finds the area
  of the red square when you have the length of the circular arc A.
*/

function squareArea(A){
  let circum =  4 * A;
  let radius = circum / (2 * Math.PI);
  return Math.round((radius ** 2) * 100) / 100;
}
