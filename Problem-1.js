/**
 * Problem-1: Calculator Class
 * Create a small calculator which performs operations such as Addition, Subtraction,
 * Multiplication and Division using class.
 *
 * Calculator inputs: 'a', 'b' and 'type of operation'
 * Datatype: 'a' = double, 'b' = double, 'type of operation' = string
 */

class Calculator {
  /**
   * Initialize the calculator.
   */
  constructor() {
    console.log("Calculator initialized.");
  }

  /**
   * Perform calculation based on the operation type.
   *
   * @param {number} a - First number
   * @param {number} b - Second number
   * @param {string} operation - Type of operation ('add', 'subtract', 'multiply', 'divide')
   * @returns {number} Result of the calculation
   */
  calculate(a, b, operation) {
    const op = operation.toLowerCase().trim();

    switch (op) {
      case "add":
      case "addition":
      case "+":
        return this.add(a, b);
      case "subtract":
      case "subtraction":
      case "-":
        return this.subtract(a, b);
      case "multiply":
      case "multiplication":
      case "*":
        return this.multiply(a, b);
      case "divide":
      case "division":
      case "/":
        return this.divide(a, b);
      default:
        throw new Error(`Invalid operation: ${operation}`);
    }
  }

  /**
   * Add two numbers.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add(a, b) {
    return a + b;
  }

  /**
   * Subtract second number from first number.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract(a, b) {
    return a - b;
  }

  /**
   * Multiply two numbers.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply(a, b) {
    return a * b;
  }

  /**
   * Divide first number by second number.
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Quotient of a and b
   */
  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return a / b;
  }
}

function main() {
  const calc = new Calculator();

  console.log("=== Calculator Demo ===");
  console.log("Calculator class created successfully!");
  console.log(
    "Use the Calculator class methods: add(), subtract(), multiply(), divide()"
  );
  console.log("Or use the calculate() method with operation strings.");
}

if (require.main === module) {
  main();
}

