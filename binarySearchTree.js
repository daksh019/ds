class BSTNode {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BSTree {
  constructor(element) {
    this.root = new BSTNode(element, null, null);
  }

  findInsertionNode(data) {
    let currNode = this.root;
    let insertionNode = null;
    while (insertionNode === null) {
      if (data < currNode.data) {
        if (currNode.left === null) {
          insertionNode = currNode;
        } else {
          currNode = currNode.left;
        }
      } else if (data > currNode.data) {
        if (currNode.right === null) {
          insertionNode = currNode;
        } else {
          currNode = currNode.right;
        }
      }
    }
    return insertionNode;
  }

  insertData(data) {
    const toInsertNode = new BSTNode(data, null, null);
    if (this.root === null) {
      this.root = toInsertNode;
      return true;
    }

    const insertionNode = this.findInsertionNode(data);
    if (data < insertionNode.data) {
      insertionNode.left = toInsertNode;
    } else {
      insertionNode.right = toInsertNode;
    }
  }

  // inorder - visit and display values in ascending order
  traverseTreeInOrder(currNode) {
    // if there is a left node then it must be visited first coz of ascending order requirement.
    // since the right one is the greater than curr node it itself must be visited first.
    // then the right node must be visited.
    // let currNode = this.root;
    if (currNode.left) {
      this.traverseTreeInOrder(currNode.left);
    }
    console.log(currNode.data);
    if (currNode.right) {
      this.traverseTreeInOrder(currNode.right);
    }
  }

  // pre order - before visiting the left wing visit the node itself.
  traverseTreePreOrder(currNode) {
    console.log(currNode.data);
    if (currNode.left) {
      this.traverseTreePreOrder(currNode.left);
    }
    if (currNode.right) {
      this.traverseTreePreOrder(currNode.right);
    }
  }

  //post order - visit the left wing, then right wing and then itself
  traverseTreePostOrder(currNode) {
    if (currNode.left) {
      this.traverseTreePostOrder(currNode.left);
    }
    if (currNode.right) {
      this.traverseTreePostOrder(currNode.right);
    }
    console.log(currNode.data);
  }

  searchMinValue() {
    let currNode = this.root;
    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  searchMaxValue() {
    let currNode = this.root;
    while (currNode.right !== null) {
      currNode = currNode.right;
    }
    return currNode.data;
  }

  searchMinValueNodeInSubTree(node) {
    let currNode = node;
    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode;
  }

  findNode(value) {
    let currNode = this.root;
    while (currNode !== null) {
      if (value < currNode.data && currNode.left !== null) {
        currNode = currNode.left;
      } else if (value > currNode.data && currNode.right !== null) {
        currNode = currNode.right;
      } else if (value === currNode.data) {
        return currNode;
      } else {
        currNode = null;
      }
    }
    return null;
  }

  findNodeWithParent(value) {
    let currNode = this.root;
    let parentNode = null;
    while (currNode !== null) {
      if (value < currNode.data && currNode.left !== null) {
        parentNode = currNode;
        currNode = currNode.left;
      } else if (value > currNode.data && currNode.right !== null) {
        parentNode = currNode;
        currNode = currNode.right;
      } else if (value === currNode.data) {
        return {
          currNode,
          parentNode,
        };
      } else {
        currNode = null;
      }
    }
    return null;
  }

  findValue(value) {
    let node = this.findNode(value);
    return node !== null;
  }

  removeNode(value) {
    let { currNode: toRemoveNode, parentNode } = this.findNodeWithParent(value);
    if (!toRemoveNode) {
      console.info("Node not found for value!", value);
      return false;
    }

    let minValueNode, tempNode;
    if (toRemoveNode.left && toRemoveNode.right) {
      minValueNode = this.searchMinValueNodeInSubTree(toRemoveNode.right);
      tempNode = new BSTNode(
        minValueNode.data,
        toRemoveNode.left,
        toRemoveNode.right
      );
    }

    if (parentNode === null) {
      // no parent - meaning it is root node.
      // If the root node doesn't have one side only promote the next node as root.
      if (toRemoveNode.left === null && toRemoveNode.right === null) {
        // root node is the single node in tree.
        this.root = null;
        return true;
      } else if (toRemoveNode.left === null) {
        this.root = toRemoveNode.right;
      } else if (toRemoveNode.right === null) {
        this.root = toRemoveNode.left;
      } else {
        // none is null. Meaning it has children on both sides.
        this.root = tempNode;
      }
    } else {
      // non root nodes.
      const appendDirection =
        parentNode.left === toRemoveNode ? "left" : "right";
      if (toRemoveNode.left === null && toRemoveNode.right === null) {
        parentNode[appendDirection] = null;
        return true;
      } else if (toRemoveNode.left === null) {
        parentNode[appendDirection] = toRemoveNode.right;
      } else if (toRemoveNode.right === null) {
        parentNode[appendDirection] = toRemoveNode.left;
      } else {
        // none is null. Meaning it has children on both sides.
        parentNode[appendDirection] = tempNode;
      }
    }

    toRemoveNode = null;
    return true;
  }
}

function initBST() {
  const exampleBst = new BSTree(23);
  exampleBst.insertData(45);
  exampleBst.insertData(16);
  exampleBst.insertData(37);
  exampleBst.insertData(3);
  exampleBst.insertData(99);
  exampleBst.insertData(22);
  return exampleBst;
}

function printTraversals(tree) {
  tree.traverseTreeInOrder(tree.root);
  console.log("===========================");
  // tree.traverseTreePreOrder(tree.root);
  // console.log("===========================");
  // tree.traverseTreePostOrder(tree.root);
}

function testDeletions() {
  console.log("testing for removal of 99");
  let exampleBst = initBST();
  console.log(exampleBst.removeNode(99));
  printTraversals(exampleBst);

  console.log("testing for removal of 23");
  // exampleBst = initBST();
  console.log(exampleBst.removeNode(23));
  printTraversals(exampleBst);

  console.log("testing for removal of 22 in continuation");
  console.log(exampleBst.removeNode(22));
  printTraversals(exampleBst);

  console.log("37", exampleBst.findValue(37));
  console.log("23", exampleBst.findValue(23));
  console.log("0", exampleBst.findValue(0));
  console.log("1000", exampleBst.findValue(1000));

  console.log("min value", exampleBst.searchMinValue());
  console.log("max value", exampleBst.searchMaxValue());
}

testDeletions();
