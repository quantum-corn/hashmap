import LinkedList from "./linked-list.js";

const HashMap = function (capacity, loadFactor) {
  let hashMap = new Array(capacity);
  let dataLength = 0;

  const hash = function (key) {
    const primeFactor = 31;
    let hashCode = 0;
    for (let i = 0; i < key.length; i++) {
      hashCode = (hashCode * primeFactor + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  };

  const validateIndex = function (index) {
    if (index < 0 || index >= hashMap.length) throw new Error("Error: Index Out of Bound");
  };

  const set = function (key, value) {
    if (dataLength >= capacity * loadFactor) expand();
    let hashCode = hash(key);
    validateIndex(hashCode);
    if (hashMap[hashCode] == null) hashMap[hashCode] = new LinkedList();
    if (!has(key)) {
      hashMap[hashCode].append(key, value);
      dataLength++;
    } else hashMap[hashCode].get(key)[key] = value;
  };

  const get = function (key) {
    let hashCode = hash(key);
    validateIndex(hashCode);
    let content = hashMap[hashCode];
    if (content == null) return null;
    else return content.get(key)[key];
  };

  const has = function (key) {
    let hashCode = hash(key);
    validateIndex(hashCode);
    if (hashMap[hashCode] == null) return false;
    let content = hashMap[hashCode].get(key);
    if (content == null) return false;
    else return true;
  };

  const remove = function (key) {
    if (!has(key)) return false;
    else {
      let hashCode = hash(key);
      hashMap[hashCode].remove(key);
      if (hashMap[hashCode].keys() == null) delete hashMap[hashCode];
      dataLength--;
      return true;
    }
  };

  const length = function () {
    return dataLength;
  };

  const clear = function () {
    hashMap = new Array(capacity);
  };

  const keys = function () {
    let keySet = [];
    for (let content of hashMap)
      if (content != null) {
        keySet = keySet.concat(content.keys());
      }
    return keySet;
  };

  const values = function () {
    let keySet = keys();
    let valueSet = [];
    for (let key of keySet) {
      let value = get(key);
      valueSet.push(value);
    }
    return valueSet;
  };

  const entries = function () {
    let keySet = keys();
    let valueSet = values();
    let entrySet = [];
    for (let i = 0; i < keySet.length; i++)
      entrySet.push([keySet[i], valueSet[i]]);
    return entrySet;
  };

  const expand = function () {
    let entrySet = entries();
    capacity = capacity * 2;
    hashMap = new Array(capacity);
    for (let entry of entrySet) set(entry[0], entry[1]);
  };

  return {
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
};

export default HashMap;
