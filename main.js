import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

list.prepend("dog");
list.prepend("cat");

console.log(`Size:  ${list.size()}`);
console.log(`Head:  ${list.head()}`);
console.log(`Tail:  ${list.tail()}`);
console.log(list.toString());

console.log(list.at(1));
console.log(list.at(-2));

list.pop();
console.log(list.toString());

console.log(list.contains("cat"));
console.log(list.contains("dog"));

console.log(list.findIndex(1));

list.insertAt(2, "cow", "bird", 9);
console.log(list.toString());

list.removeAt(3);
console.log(list.toString());
