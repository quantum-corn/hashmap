import LinkedList from "./linked-list.js";

const HashMap = function (capacity, loadFactor) {
  let hashMap = new Array(capacity);

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
    if (hashMap[hashCode] == null) {
      hashMap[hashCode] = new LinkedList();
    }
    hashMap[hashCode].append(key, value);
  }

  const get = function (key) {
    let hashCode = hash(key);
    validateIndex(hashCode);
    let content = hashMap[hashCode];
    if (content == null) return null;
    else return content.get(key);
  };

  return {
    set,
    get,
    hashMap,
  };
};

export default HashMap;
