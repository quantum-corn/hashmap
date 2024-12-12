const Node = function (key, value, nextNode = null) {
  return {
    [key]: value,
    nextNode: nextNode,
  };
};

const LinkedList = function () {
  let headNode = null;
  let tailNode = null;
  let length = 0;

  const append = function (key, value) {
    let newNode = Node(key, value);
    if (tailNode == null) {
      headNode = newNode;
      tailNode = newNode;
    } else {
      tailNode.nextNode = newNode;
      tailNode = newNode;
    }
    length++;
  };

  const traverse = function (func) {
    let currentNode = headNode;
    let result = {
      value: null,
      done: false,
    };
    let index = 0;
    while (currentNode != null) {
      result = func(currentNode, index, result);
      index++;
      if (result.done == true) break;
      currentNode = currentNode.nextNode;
    }
    return result.value;
  };

  const get = function (key) {
    let value = null;
    value = traverse((node, index, result) => {
      if (node.hasOwnProperty(key)) {
        result.value = node[key];
        result.done = true;
      }
      return result;
    });
    return value;
  };

  return {
    append,
    get
  };
};

export default LinkedList;
