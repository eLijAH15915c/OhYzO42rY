// 代码生成时间: 2025-09-24 14:01:08
const _ = require('lodash');

/**
 * Generates a random number within a specified range.
 *
 * @function getRandomNumber
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} A random number between min and max.
 */
function getRandomNumber(min, max) {
  return _.random(min, max);
}

/**
 * Generates a random string of a specified length.
 *
 * @function getRandomString
 * @param {number} length - The length of the string to generate.
 * @returns {string} A random string of the specified length.
 */
function getRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Generates a random email address.
 *
 * @function generateRandomEmail
 * @returns {string} A random email address.
 */
function generateRandomEmail() {
  const domain = 'example.com';
  return `${getRandomString(8)}@${domain}`;
}

/**
 * Generates a random user object with name, email, and age.
 *
 * @function generateRandomUser
 * @returns {Object} A random user object.
 */
function generateRandomUser() {
  try {
    const name = getRandomString(10);
    const email = generateRandomEmail();
    const age = getRandomNumber(18, 65);
    return {
      name,
      email,
      age
    };
  } catch (error) {
    console.error('Error generating random user:', error);
    throw error;
  }
}

/**
 * Main function to generate and log test data.
 *
 * @function generateTestData
 * @param {number} count - The number of test data entries to generate.
 */
function generateTestData(count) {
  if (!_.isNumber(count) || count <= 0) {
    throw new Error('Count must be a positive number.');
  }

  const testData = _.times(count, generateRandomUser);
  console.log(testData);
}

// Example usage:
generateTestData(5);
