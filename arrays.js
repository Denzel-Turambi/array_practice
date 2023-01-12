var names = ["Denz", "Chris", "Tim", "Rich"];
var ages = [22, 18, 19, 27];
var booleans = [true, true, false, true];

console.log(names.pop());
// pop() removes the last element from the array and prints the element as an output.
ages.push(28, 16);
// push() adds one or more elements to the end of an array.
console.log(ages);
// this should output a the same array but with added elements at the end.
console.log(booleans.unshift(false, true));
console.log(booleans);
// unshift() adds one or more elements to the beginning of an array.