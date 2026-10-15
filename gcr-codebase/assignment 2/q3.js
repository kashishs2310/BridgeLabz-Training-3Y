const x = 16.75;

const rounded = Math.round(x);

const squareRoot = Math.sqrt(x);

const power = Math.pow(x, 3);

const randomNum = Math.floor(Math.random() * 41) + 10;

console.log(`
===== Math Dashboard =====
Number          : ${x}
Rounded value   : ${rounded}
Square root     : ${squareRoot.toFixed(2)}
Power (x^3)     : ${power.toFixed(2)}
Random (10-50)  : ${randomNum}
==========================
`);