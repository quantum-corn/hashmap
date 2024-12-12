const Node = function (value, nextNode = null) {
  return {
    value: value,
    nextNode: nextNode,
  };
};

const LinkedList = function () {
  let headNode = null;
  let tailNode = null;
  let length = 0;

  const append = function (value) {
    let newNode = Node(value);
    if (tailNode == null) {
      headNode = newNode;
      tailNode = newNode;
    } else {
      tailNode.nextNode = newNode;
      tailNode = newNode;
    }
    length++;
  };

  return {
    append,
  };
};

export default LinkedList;
