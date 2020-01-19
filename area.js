/* eslint-disable no-eval */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */

const area = require('./area_lib.js');
const argUtil = require('./arg_util.js');

let parms = null;
try {
    params = argUtil.getParams();
} catch (err) {
    console.log(err.message);
    process.exit(1);
}
const bounds = new area.Bounds(params.lower, params.upper, params.step);
const polynomial = new area.Polynomial(params.polynomialData);
const algorithm = params.algorithm;

console.log(
    `Area under ${polynomial} with bounds ${bounds} 
    with algorithm ${algorithm.name} is: 
    ${area.areaUnderCurve(polynomial, bounds, algorithm)}`,
);
