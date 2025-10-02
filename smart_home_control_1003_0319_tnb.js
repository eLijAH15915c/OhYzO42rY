// 代码生成时间: 2025-10-03 03:19:28
const _ = require('lodash');

// Device control functions
const deviceControlFunctions = {
  turnOn: device => {
    console.log(`Turning on ${device}...`);
    return Promise.resolve(device + ' turned on.');
  },
  turnOff: device => {
    console.log(`Turning off ${device}...`);
    return Promise.resolve(device + ' turned off.');
  },
  adjustBrightness: (light, level) => {
    console.log(`Adjusting brightness of ${light} to ${level}...`);
    return Promise.resolve(`${light} brightness set to ${level}.`);
  },
  changeColor: (light, color) => {
    console.log(`Changing color of ${light} to ${color}...`);
    return Promise.resolve(`${light} color changed to ${color}.`);
  },
};

class SmartHome {
  /**
   * Control smart devices in the home.
   * @param {Object} devices - An object containing device names as keys and device objects as values.
   */
  constructor(devices) {
    this.devices = devices;
  }

  /**
   * Turns on a specified device.
   * @param {String} deviceName - The name of the device to turn on.
   * @returns {Promise} - A promise that resolves with a success message or rejects with an error.
   */
  turnOnDevice(deviceName) {
    const device = this.devices[deviceName];
    if (!device) {
      return Promise.reject(new Error(`Device ${deviceName} not found.`));
    }
    return deviceControlFunctions.turnOn(deviceName);
  }

  /**
   * Turns off a specified device.
   * @param {String} deviceName - The name of the device to turn off.
   * @returns {Promise} - A promise that resolves with a success message or rejects with an error.
   */
  turnOffDevice(deviceName) {
    const device = this.devices[deviceName];
    if (!device) {
      return Promise.reject(new Error(`Device ${deviceName} not found.`));
    }
    return deviceControlFunctions.turnOff(deviceName);
  }

  /**
   * Adjusts the brightness of a light device.
   * @param {String} lightName - The name of the light to adjust.
   * @param {Number} level - The new brightness level (0-100).
   * @returns {Promise} - A promise that resolves with a success message or rejects with an error.
   */
  adjustLightBrightness(lightName, level) {
    if (level < 0 || level > 100) {
      return Promise.reject(new Error('Brightness level must be between 0 and 100.'));
    }
    return deviceControlFunctions.adjustBrightness(lightName, level);
  }

  /**
   * Changes the color of a light device.
   * @param {String} lightName - The name of the light to change color.
   * @param {String} color - The new color of the light.
   * @returns {Promise} - A promise that resolves with a success message or rejects with an error.
   */
  changeLightColor(lightName, color) {
    return deviceControlFunctions.changeColor(lightName, color);
  }
}

// Example usage
const devices = {
  livingRoomLight: {
    name: 'Living Room Light',
    type: 'light',
  },
  bedroomLight: {
    name: 'Bedroom Light',
    type: 'light',
  },
  kitchenFan: {
    name: 'Kitchen Fan',
    type: 'fan',
  },
};

const smartHome = new SmartHome(devices);

smartHome.turnOnDevice('livingRoomLight')
  .then(message => console.log(message))
  .catch(error => console.error(error.message));

smartHome.turnOffDevice('kitchenFan')
  .then(message => console.log(message))
  .catch(error => console.error(error.message));

smartHome.adjustLightBrightness('bedroomLight', 50)
  .then(message => console.log(message))
  .catch(error => console.error(error.message));

smartHome.changeLightColor('livingRoomLight', 'blue')
  .then(message => console.log(message))
  .catch(error => console.error(error.message));