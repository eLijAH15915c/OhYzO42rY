// 代码生成时间: 2025-10-20 19:20:17
// Import lodash library
const _ = require('lodash');

// Define a class to represent a Wealth object
class Wealth {
    /**
     * Constructor for the Wealth class.
     * @param {number} initialAmount - The initial amount of wealth.
     */
    constructor(initialAmount) {
        this.amount = initialAmount;
    }

    /**
     * Deposits an amount to the wealth.
     * @param {number} amount - The amount to deposit.
     * @returns {number} The new amount of wealth.
     */
    deposit(amount) {
        if (!_.isNumber(amount) || amount < 0) {
            throw new Error('Invalid deposit amount');
        }
        this.amount += amount;
        return this.amount;
    }

    /**
     * Withdraws an amount from the wealth.
     * @param {number} amount - The amount to withdraw.
     * @returns {number} The new amount of wealth.
     */
    withdraw(amount) {
        if (!_.isNumber(amount) || amount < 0) {
            throw new Error('Invalid withdrawal amount');
        }
        if (this.amount < amount) {
            throw new Error('Insufficient funds');
        }
        this.amount -= amount;
        return this.amount;
    }

    /**
     * Calculates the balance of the wealth.
     * @returns {number} The current balance.
     */
    getBalance() {
        return this.amount;
    }
}

// Define a class to represent a WealthManager
class WealthManager {
    /**
     * Constructor for the WealthManager class.
     * @param {Wealth[]} wealths - An array of Wealth objects.
     */
    constructor(wealths) {
        this.wealths = wealths;
    }

    /**
     * Adds a new Wealth object to the manager.
     * @param {Wealth} wealth - The Wealth object to add.
     */
    addWealth(wealth) {
        if (!_.isArray(this.wealths)) {
            throw new Error('Wealths is not an array');
        }
        this.wealths.push(wealth);
    }

    /**
     * Calculates the total wealth managed by the manager.
     * @returns {number} The total wealth.
     */
    getTotalWealth() {
        return _.sum(this.wealths.map(wealth => wealth.getBalance()));
    }
}

// Example usage:
const mainWealth = new Wealth(1000);
const secondaryWealth = new Wealth(500);

const wealthManager = new WealthManager([mainWealth, secondaryWealth]);

try {
    console.log('Initial Total Wealth:', wealthManager.getTotalWealth());
    mainWealth.deposit(200);
    wealthManager.addWealth(new Wealth(300));
    console.log('Updated Total Wealth:', wealthManager.getTotalWealth());
} catch (error) {
    console.error('Error:', error.message);
}