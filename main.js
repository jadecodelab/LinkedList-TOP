import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

// console.log(list.pop());

list.append(1);
list.append(2);
list.append(3);

console.log(list.toString());

list.insertAt(3, 4, 5);
console.log(list.toString());

list.insertAt(-3, 4, 5);
console.log(list.toString());
// console.log(list.pop());
// console.log(list.headNode);

// list.prepend(99);
// list.prepend(45);

// console.log(list.headNode);
// // console.log(list.size());

// console.log(list.at(0));
// console.log(list.at(2));
// console.log(list.at(5));
