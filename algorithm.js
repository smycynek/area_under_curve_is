/* eslint-disable no-unused-vars */
function midpoint(poly, lower, upper) {
    // Calculate midpoint slice from two polynomial evaluations and step size
    const value = poly.evaluate((upper + lower) / 2.0);
    return (upper - lower) * value;
}

function trapezoid(poly, lower, upper) {
    // Calculate trapezoid slice from two polynomial evaluations and step size
    const lowerValue = poly.evaluate(lower);
    const upperValue = poly.evaluate(upper);
    return (upper - lower) * ((lowerValue + upperValue) / 2.0);
}

function simpson(poly, lower, upper) {
    // Calculate parabola (Simpson) slice from two polynomial evaluations and step size
    const lowerValue = poly.evaluate(lower);
    const upperValue = poly.evaluate(upper);
    const midpointValue = poly.evaluate((lower + upper) / 2.0);
    return ((upper - lower) / 6.0) * (lowerValue + 4 * midpointValue + upperValue);
}
exports.simpson = simpson;
exports.midpoint = midpoint;
exports.trapezoid = trapezoid;
