const HashMap = function (capacity, loadFactor) {
  const hash = function (key) {
    const primeFactor = 31;
    let hashCode = 0;
    for (i = 0; i < key.length; i++) {
      hashCode = (hashCode * primeFactor + key.charCodeAt(i)) % capacity;
    }
    return hashCode;
  };

  return {
    hash,
  };
};

const test = HashMap(16, 0.8);
console.log(test.hash('Ash'));
