import StackArray from "./../../src/js/data-structures/stack-array.js";
import Stack from "./../../src/js/data-structures/stack.js";

const stack = new Stack(); // new StackArray();

// using WeakMap to store Stack items we ensure true privacy
// console.log(Object.getOwnPropertyNames(stack));
// console.log(Object.keys(stack));
// console.log(stack.items);

console.log("stack.isEmpty() => ", stack.isEmpty()); // outputs true

stack.push(5);
stack.push(8);

console.log("stack after push 5 and 8 => ", stack.toString());

console.log("stack.peek() => ", stack.peek()); // outputs 8

stack.push(11);

console.log("stack.size() after push 11 => ", stack.size()); // outputs 3
console.log("stack.isEmpty() => ", stack.isEmpty()); // outputs false

stack.push(15);

stack.pop();
stack.pop();

console.log("stack.size() after push 15 and pop twice => ", stack.size()); // outputs 2

console.log("stack.toString() => ", stack.toString());
