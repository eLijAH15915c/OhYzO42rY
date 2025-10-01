// 代码生成时间: 2025-10-01 19:56:35
const _ = require('lodash');

// Helper function to calculate the cumulative standard normal distribution value
function cumulativeStandardNormalDistribution(x) {
  const coefficients = [
    -0.00005206,
    0.00030323,
    -0.00144073,
    0.00209354,
    -0.00752892,
    0.01452611,
    -0.02328941,
    0.03242436,
    -0.04240902,
    0.04930140,
    -0.05167991,
    0.05275945
  ];
  let sum = 0;
  for (let i = 0; i < coefficients.length; i++) {
    sum += coefficients[i] * Math.pow(x, i + 1);
  }
  return sum / (Math.sqrt(2 * Math.PI) * Math.exp(-0.5 * x * x)) + 1 / 2;
}

// The Black-Scholes formula for the price of a European call option
function blackScholesCall(S, K, T, r, sigma) {
  if (S < 0 || K < 0 || T < 0 || r < 0 || sigma < 0) {
    throw new Error('Input parameters must be positive.');
  }
  const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  return S * cumulativeStandardNormalDistribution(d1) - K * Math.exp(-r * T) * cumulativeStandardNormalDistribution(d2);
}

// The Black-Scholes formula for the price of a European put option
function blackScholesPut(S, K, T, r, sigma) {
  if (S < 0 || K < 0 || T < 0 || r < 0 || sigma < 0) {
    throw new Error('Input parameters must be positive.');
  }
  const d1 = (Math.log(S / K) + (r + 0.5 * sigma * sigma) * T) / (sigma * Math.sqrt(T));
  const d2 = d1 - sigma * Math.sqrt(T);
  return K * Math.exp(-r * T) * cumulativeStandardNormalDistribution(-d2) - S * cumulativeStandardNormalDistribution(-d1);
}

// Export the functions
module.exports = {
  blackScholesCall,
  blackScholesPut
};
