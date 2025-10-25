// 代码生成时间: 2025-10-25 11:24:37
 * documentation, and following best practices for maintainability and scalability.
 */

const _ = require('lodash');

/**
 * Configuration Manager class
 * @class ConfigManager
 */
class ConfigManager {
  /**
   * Creates an instance of ConfigManager.
   * @param {Object} config - Initial configuration object
   */
  constructor(config) {
    if (!_.isObject(config)) {
      throw new Error('ConfigManager requires an object as initialization parameter.');
    }
    this.config = config;
  }

  /**
   * Retrieves a value from the config object.
   * @param {string} key - The key to retrieve the value for
   * @returns {any} The value associated with the key, or null if not found
   */
  getValue(key) {
    return _.get(this.config, key, null);
  }

  /**
   * Sets a value in the config object.
   * @param {string} key - The key to set the value for
   * @param {any} value - The value to set
   * @returns {void}
   */
  setValue(key, value) {
    _.set(this.config, key, value);
  }

  /**
   * Deletes a key from the config object.
   * @param {string} key - The key to delete
   * @returns {void}
   */
  deleteKey(key) {
    _.unset(this.config, key);
  }

  /**
   * Retrieves the entire config object.
   * @returns {Object} The current config object
   */
  getConfig() {
    return this.config;
  }
}

// Example usage:
// const configManager = new ConfigManager({ theme: 'dark', language: 'en' });
// console.log(configManager.getValue('theme')); // Output: 'dark'
// configManager.setValue('theme', 'light');
// console.log(configManager.getConfig()); // Output: { theme: 'light', language: 'en' }
// configManager.deleteKey('language');
// console.log(configManager.getConfig()); // Output: { theme: 'light' }

module.exports = ConfigManager;