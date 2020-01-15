# area-under-curve
Area under curve in JavaScript

Work in Progress

Just a fun port of the Python
https://github.com/smycynek/area_under_curve

npm: https://www.npmjs.com/package/area-under-curve

Try it out:
`node ./node_modules/area-under-curve/area -h`

`node ./node_modules/area-under-curve/area -l 1 -u 5 -s .2 -p "[[3,1]]"`

Sample Output:
`Area under f(x)= x^3 + x with bounds Bounds: [0 - 3], stepSize: 0.1 with algorithm simpson is 24.75000000000004.`
`Area under f(x)= x^3 + x with bounds Bounds: [0 - 3], stepSize: 0.1 with algorithm trapezoid is 24.772500000000036.`
`Area under f(x)= x^3 + x with bounds Bounds: [0 - 3], stepSize: 0.1 with algorithm midpoint is 24.738750000000042`

Better module packaging/tests coming soon...
