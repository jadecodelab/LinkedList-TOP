import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend(99);
list.prepend(45);

console.log(list.headNode);
console.log(list.size());
