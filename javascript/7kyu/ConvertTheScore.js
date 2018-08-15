/*
  You are working at a lower league football stadium and you've been tasked
  with automating the scoreboard.

  The referee will shout out the score, you have already set up the voice
  recognition module which turns the refs voice into a string, but the spoken
  score needs to be converted into an array for the scoreboard!

    e.g. "The score is four nil" should return [4,0]

  Note:
    The score wont go above 9 goals either side ( [9,9] ), and the ref won't
    say the same string every time e.g.

    "new score: two three"
    "two two"
    "Arsenal just conceded another goal, two nil"

  Please rate and enjoy!
*/

function scoreboard(string) {
  let nums = string.split(' ');
  nums = nums.splice(nums.length - 2, nums.length);
  return [scoreboard.numbers[nums[0]], scoreboard.numbers[nums[1]]];
}

scoreboard.numbers = {
  'nil'    : 0,
  'one'    : 1,
  'two'    : 2,
  'three'  : 3,
  'four'   : 4,
  'five'   : 5,
  'six'    : 6,
  'seven'  : 7,
  'eight'  : 8,
  'nine'   : 9
}
