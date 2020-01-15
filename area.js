/* eslint-disable no-eval */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */

const area = require('./area_lib.js');
const argUtil = require('./arg_util.js');

const params = argUtil.getParams();
const bounds = new area.Bounds(params.lower, params.upper, params.step);
const algorithm = eval(`area.${params.algorithm}`);
const polynomial = new area.Polynomial(params.polynomialData);

console.log(
    `Area under ${polynomial} with bounds ${bounds} 
    with algorithm ${algorithm.name} is: 
    ${area.areaUnderCurve(polynomial, bounds, algorithm)}`,
);
