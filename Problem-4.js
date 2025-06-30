/**
 * Problem-4: Multiple Count Dictionary
 * Get the total count of numbers listed in the dictionary which are multiples of [1,2,3,4,5,6,7,8,9]
 *
 * Example:
 * input: [1,2,8,9,12,46,76,82,15,20,30]
 * Output: {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}
 *
 * Explanation:
 * - Count how many numbers in the input list are divisible by each number from 1 to 9
 */

/**
 * Count how many numbers in the input list are multiples of 1,2,3,4,5,6,7,8,9.
 *
 * @param {number[]} numbers - Array of integers to check
 * @returns {Object} Object with keys 1-9 and values as count of multiples
 */
function countMultiples(numbers) {
  const result = {};
  for (let i = 1; i <= 9; i++) {
    result[i] = 0;
  }

  for (let divisor = 1; divisor <= 9; divisor++) {
    let count = 0;
    for (const num of numbers) {
      if (num % divisor === 0) {
        count++;
      }
    }
    result[divisor] = count;
  }

  return result;
}

/**
 * Optimized version that iterates through numbers only once.
 *
 * @param {number[]} numbers - Array of integers to check
 * @returns {Object} Object with keys 1-9 and values as count of multiples
 */
function countMultiplesOptimized(numbers) {
  const result = {};
  for (let i = 1; i <= 9; i++) {
    result[i] = 0;
  }

  for (const num of numbers) {
    for (let divisor = 1; divisor <= 9; divisor++) {
      if (num % divisor === 0) {
        result[divisor]++;
      }
    }
  }

  return result;
}

function main() {
  console.log("=== Multiple Count Dictionary ===");
  console.log(
    "Problem-4: Count multiples of [1,2,3,4,5,6,7,8,9] in given list"
  );
  console.log(
    "Use countMultiples(numbers) to count multiples for each divisor 1-9."
  );
}

if (require.main === module) {
  main();
}
