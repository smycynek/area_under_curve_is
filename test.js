/* eslint-disable no-console */
const area = require('./index.js');

const bounds = new area.Bounds(0, 3, 0.1); // 0-3
const polynomial = new area.Polynomial(new Map([[3, 1], [1, 1]])); // y = x^3 + x
let algorithm = area.simpson;

console.log(`Area under ${polynomial} with bounds ${bounds} with algorithm ${algorithm.name} is ${area.areaUnderCurve(polynomial, bounds, algorithm)}.`);
algorithm = area.trapezoid;
console.log(`Area under ${polynomial} with bounds ${bounds} with algorithm ${algorithm.name} is ${area.areaUnderCurve(polynomial, bounds, algorithm)}.`);
algorithm = area.midpoint;
console.log(`Area under ${polynomial} with bounds ${bounds} with algorithm ${algorithm.name} is ${area.areaUnderCurve(polynomial, bounds, algorithm)}.`);
