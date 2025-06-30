/**
 * Problem-3: Conditional Odd Number Series Generator
 * With a single integer as the input, generate the following until a = x
 * [series of numbers as shown in below examples]
 *
 * Output: (examples)
 * 1) input a = 1, then output : 1
 * 2) input a = 2, then output : 1
 * 3) input a = 3, then output : 1, 3, 5
 * 4) input a = 4, then output : 1, 3, 5
 * 5) input a = 5, then output : 1, 3, 5, 7, 9
 * 6) input a = 6, then output : 1, 3, 5, 7, 9
 * 7) input a = x, then output : 1, 3, 5, 7, .......
 *
 * Pattern Analysis:
 * - For odd numbers (1, 3, 5, 7, ...): Generate first n odd numbers
 * - For even numbers (2, 4, 6, 8, ...): Generate first (n-1) odd numbers
 */

/**
 * Generate odd numbers based on conditional logic.
 *
 * @param {number} n - Input number
 * @returns {number[]} Array of odd numbers based on the condition
 */
function generateConditionalOddSeries(n) {
  if (n <= 0) {
    return [];
  }

  const count = n % 2 === 1 ? n : n - 1; 

  const oddNumbers = [];
  let currentOdd = 1;

  for (let i = 0; i < count; i++) {
    oddNumbers.push(currentOdd);
    currentOdd += 2;
  }

  return oddNumbers;
}

/**
 * Alternative implementation using formula approach.
 *
 * @param {number} n - Input number
 * @returns {number[]} Array of odd numbers based on the condition
 */
function generateConditionalOddSeriesFormula(n) {
  if (n <= 0) {
    return [];
  }

  const count = n % 2 === 1 ? n : n - 1;

  return Array.from({ length: count }, (_, i) => 2 * (i + 1) - 1);
}

function main() {
  console.log("=== Conditional Odd Number Series Generator ===");
  console.log("Problem-3: Generate odd numbers based on conditional logic");
  console.log(
    "Rule: If input is odd, generate n odd numbers; if even, generate (n-1) odd numbers"
  );
  console.log("Use generateConditionalOddSeries(n) to generate the series.");
}

// Run the main function if this file is executed directly
if (require.main === module) {
  main();
}
