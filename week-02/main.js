// main.js
import Stack from "./stack.js";

let stack = new Stack();

console.log("new stack");
stack.print();
console.log("push 5 and 8");
stack.push(5);
stack.push(8);
stack.print();

// TODO: 應該還要做哪些測試，以驗證自己開發的 stack 是沒有問題的？
console.log("peek");
console.log(stack.peek());
console.log("pop");
stack.pop();
stack.print();
console.log("pop");
stack.pop();
stack.print();
