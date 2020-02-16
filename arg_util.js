/* eslint-disable no-restricted-globals */
/* eslint-disable no-eval */
const { ArgumentParser } = require('argparse');

// eslint-disable-next-line no-unused-vars
const algorithm = require('./algorithm.js');

const parser = new ArgumentParser({
    version: '1.0.15',
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
        help: `polynomial formatted as "[[exponent1, coefficient1], [exponent2, coefficient2], ...,]"  
        example: y=x^2 + 2x + 2 would be -p "[2,1], [1,2], [0,2], ]"
        `,
        defaultValue: '[[3, 1],]',
    },
);

function checkCoefficients(str) {
    const errorMessage = 'Invalid polynomial format, use -h for help';
    const polyRegex = /\[\s*(\[\s*-?\d+\.?\d*\s*,\s*-?\d+\.?\d*\s*\]\s*,\s*)+\]/;
    if (str.match(polyRegex) === null) {
        throw new Error(errorMessage);
    }
    return eval(str);
}

function getParams() {
    const args = parser.parseArgs();
    if (isNaN(args.lower)) {
        throw new Error('lower bound is NaN');
    }
    if (isNaN(args.upper)) {
        throw new Error('upper bound is NaN');
    }
    if (isNaN(args.step) || (args.step < 0)) {
        throw new Error('step is NaN or < 0');
    }
    if (args.upper <= args.lower) {
        throw new Error('upper bound <= lower bound');
    }

    const coefficientArray = checkCoefficients(args.polynomial);
    return {
        lower: args.lower,
        upper: args.upper,
        step: args.step,
        algorithm: eval(`algorithm.${args.algorithm}`),
        polynomialData: new Map(coefficientArray),
    };
}


exports.getParams = getParams;
