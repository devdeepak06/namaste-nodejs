console.log(globalThis); // <ref *1> Object [global]



console.log(this);  // empty object
// console.log(global); // <ref *1> Object [global]
// console.log(window); // ReferenceError: window is not defined
// console.log(frames); //ReferenceError: frames is not defined
// console.log(self); //ReferenceError: self is not defined
// console.log(globalThis === global); //true

// console.log(globalThis === this && globalThis === window && globalThis === frames && globalThis === self); // false