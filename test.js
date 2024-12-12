import HashMap from './hashmap.js'

const test = HashMap(16, 0.75);

console.log(test.get('Ash'));
test.set('Ash', 'Ketchum');
console.log(test.get('Ash'));