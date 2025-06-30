/**
 * Problem-2: Odd Number Series Generator
 * With a single integer as the input, generate the following until a = x
 * [series of numbers as shown in below examples]
 *
 * Output: (examples)
 * 1) input a = 1, then output : 1
 * 2) input a = 2, then output : 1, 3
 * 3) input a = 3, then output : 1, 3, 5
 * 4) input a = 4, then output : 1, 3, 5, 7
 * 5) input a = x, then output : 1, 3, 5, 7, .......
 */

/**
 * Generate first n odd numbers starting from 1.
 *
 * @param {number} n - Number of odd numbers to generate
 * @returns {number[]} Array of first n odd numbers
 */
function generateOddSeries(n) {
  if (n <= 0) {
    return [];
  }

  const oddNumbers = [];
  let currentOdd = 1;

  for (let i = 0; i < n; i++) {
    oddNumbers.push(currentOdd);
    currentOdd += 2;
  }

  return oddNumbers;
}

/**
 * Alternative implementation using formula: nth odd number = 2n - 1
 *
 * @param {number} n - Number of odd numbers to generate
 * @returns {number[]} Array of first n odd numbers
 */
function generateOddSeriesFormula(n) {
  if (n <= 0) {
    return [];
  }

  return Array.from({ length: n }, (_, i) => 2 * (i + 1) - 1);
}

function main() {
  console.log("=== Odd Number Series Generator ===");
  console.log("Problem-2: Generate first n odd numbers");
  console.log(
    "Use generateOddSeries(n) to generate first n odd numbers starting from 1."
  );
}

// Run the main function if this file is executed directly
if (require.main === module) {
  main();
}
