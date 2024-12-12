import LinkedList from "./linked-list.js";

const HashMap = function (capacity, loadFactor) {
  let hashMap = [];

  const hash = function (key) {
    const primeFactor = 31;
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * primeFactor + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  };

  const validateIndex = function (index) {
    if (index < 0 || index >= hashMap.length)
      throw new Error("Error: Index Out of Bound");
  };

  const set = function (key, value) {
    let hashCode = hash(key);
    validateIndex(hashCode);
    console.log('setting the provided data');
  }

  const get = function (key) {
    let hashCode = hash(key);
    validateIndex(hashCode);
    console.log('getting the requested data');
  };

  return {
    set,
    get,
  };
};

export default HashMap;
