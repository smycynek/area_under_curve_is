/* eslint-disable no-eval */
const { ArgumentParser } = require('argparse');

const parser = new ArgumentParser({
    version: '0.0.1',
    addHelp: true,
    description: 'Area under a curve',
});
parser.addArgument(
    ['-l', '--lower'],
    {
        help: 'lower bound, default=0',
        type: Number,
        defaultValue: 0,
    },
);
parser.addArgument(
    ['-u', '--upper'],
    {
        help: 'upper bound, default=10',
        type: Number,
        defaultValue: 10,
    },
);
parser.addArgument(
    ['-s', '--step'],
    {
        help: 'step size, default=1',
        type: Number,
        defaultValue: 1,
    },
);
parser.addArgument(
    ['-a', '--algorithm'],
    {
        help: 'midpoint, simpson, or trapezoid, default=midpoint',
        choices: ['midpoint', 'simpson', 'trapezoid'],
        defaultValue: 'midpoint',
    },
);

parser.addArgument(
    ['-p', '--polynomial'],
    {
        help: 'polynomial formatted as "[[exponent1, coefficient1], [exponent2, coefficient2], ...]"',
        defaultValue: '[[3, 1]]',
    },
);


function getParams() {
    const args = parser.parseArgs();
    return {
        lower: args.lower,
        upper: args.upper,
        step: args.step,
        algorithm: args.algorithm,
        polynomialData: new Map(eval(args.polynomial)),
    };
}


exports.getParams = getParams;
