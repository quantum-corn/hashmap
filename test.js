import HashMap from "./hashmap.js";

const test = HashMap(16, 0.75);

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log(test.has('wolf'));
console.log(test.get('wolf'));
console.log(test.has('jacket'));
console.log(test.get('jacket'));
test.set('jacket', 'black');
console.log(test.get('jacket'));

test.set('moon', 'silver');

console.log(test.remove('moon'));
console.log(test.remove('toy'));

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
console.log(test.keys());
