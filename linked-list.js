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
        result.value = node;
        result.done = true;
      }
      return result;
    });
    return value;
  };

  const backstep = function (targetNode) {
    let previous = traverse((node, index, result) => {
      if (node.nextNode == targetNode)
        result = {
          value: node,
          done: true,
        };
      return result;
    });
    return previous;
  };

  const pop = function () {
    let last = tailNode;
    let previous = backstep(last);
    if (previous != null){
      previous.nextNode = null;
      tailNode = previous;
    } else {
      headNode = null;
      tailNode = null;
    }
    length--;
    return last;
  };

  const remove = function (key) {
    let currentNode = get(key);
    if (currentNode == tailNode) pop();
    else {
      let next = currentNode.nextNode;
      if (currentNode == headNode) {
        headNode = next;
      } else {
        let previous = backstep(currentNode);
        previous.nextNode = next;
      }
      length--;
    }
  };

  const keys = function () {
    let keys = traverse((node, index, result) => {
      if (result.value == null) result.value = [];
      result.value = result.value.concat(Object.keys(node)[0]);
      return result;
    });
    return keys;
  };

  return {
    append,
    get,
    remove,
    keys,
  };
};

export default LinkedList;
