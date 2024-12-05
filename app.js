require('./xyz.js') //one module into another
var myName = "Namaste NodeJS";
const { calculateSum, calculateMultiply } = require('./calculate');
const data = require('./data.json')
// const { x, calculateSum } = require('./sum.js');
// import calculateSum from './sum.js';
// import {calculateSum, x} from './sum.js';
// const obj = require('./sum.js');
var a = 10;
var b = 20;
console.log(data);
calculateSum(a, b);
calculateMultiply(a, b);
// console.log(x);
// console.log(myName);
// console.log(a + b);
// console.log(window); // ReferenceError: window is not defined
// console.log(frames); //ReferenceError: frames is not defined
// console.log(self); //ReferenceError: self is not defined
// console.log(this);  // empty object
// console.log(global); // <ref *1> Object [global]
// console.log(globalThis); // <ref *1> Object [global]
// console.log(globalThis === global); //true

// console.log(globalThis === this && globalThis === window && globalThis === frames && globalThis === self); // false