/*
  Create a function that returns the sum of the two lowest positive numbers
  given an array of minimum 4 integers. No floats or empty arrays will be passed.

  For example, when an array is passed like [19, 5, 42, 2, 77], the output
  should be 7.

    [10, 343445353, 3453445, 3453545353453] should return 3453455.

  Hint: Do not modify the original array.
*/

// Submitted version.
using System.Linq;
public static class Kata
{
	public static int sumTwoSmallestNumbers(int[] numbers)
	{
		int[] sorted = numbers.OrderBy(a => a).ToArray();
    return sorted[0] + sorted[1];
	}
}

// Learned of Take() after submission
using System.Linq;
public static class Kata
{
	public static int sumTwoSmallestNumbers(int[] numbers)
	{
		return numbers.OrderBy(a => a).Take(2).Sum();
	}
}
