// 代码生成时间: 2025-10-18 17:55:15
const _ = require('lodash');

/**
 * Test a function for compatibility issues.
 * @param {Function} func - The function to test.
 * @param {Object[]} testCases - Array of test cases with input and expected output.
 * @returns {Object} - An object containing the results of the tests.
 */
function testFunctionCompatibility(func, testCases) {
  const results = [];
  testCases.forEach(testCase => {
    try {
      const result = func(testCase.input);
      if (_.isEqual(result, testCase.expectedOutput)) {
        results.push({
          description: testCase.description,
          passed: true,
          output: result
        });
      } else {
        results.push({
          description: testCase.description,
          passed: false,
          expectedOutput: testCase.expectedOutput,
          actualOutput: result
        });
      }
    } catch (error) {
      results.push({
        description: testCase.description,
        passed: false,
        error: error.message
      });
    }
  });
  return results;
}

/**
 * Run compatibility tests on a list of functions.
 * @param {Function[]} funcs - An array of functions to test.
 * @param {Object[]} testCases - Array of test cases with input and expected output.
 * @returns {Object} - An object containing the results of all tests.
 */
function runCompatibilityTests(funcs, testCases) {
  const results = {};
  funcs.forEach(func => {
    results[func.name] = testFunctionCompatibility(func, testCases);
  });
  return results;
}

// Example usage:
/*
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;

const testCases = [
  { description: 'Addition test', input: [1, 2], expectedOutput: 3 },
  { description: 'Multiplication test', input: [2, 3], expectedOutput: 6 }
];

const testResults = runCompatibilityTests([add, multiply], testCases);
console.log(testResults);
*/
