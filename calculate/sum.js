//modules protect their variables and functions from leaking
// var x = "hello world"
function calculateSum(a, b) {
  const sum = a + b;
  console.log(sum);
}
module.exports = {calculateSum};
// export var x = "hello world"
// export function calculateSum(a, b) {
//   const sum = a + b;
//   console.log(sum);
// }


// export default calculateSum;