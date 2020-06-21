// Linked list is a data structure used to hold list of items.
// It can be traverse in forward direction.
// A random access is possible only with a list or an array. Not with linked list.

// The advantage of a linked list is that its very easy for insertion and deletion of a new node.
// A node in the linked list contains the value of the element that it holds and
// the reference to the next node in the list.

// If this node is the last node in the list then the next must be null.
// If this node is the first one then it be referenced as the head of the list.

// The linked list must support following capabilities:

// listSize or length (property) - the size of the list.
// pos(property) - the pos of the header in the list.

// clear(function) - to empty the list.
// toString(function) - to return the represenation of list as a list of csv.
// find(function) - Returns element at current position;
// insert(function) - Inserts new element after existing element
// append(function) - Adds new element to end of list.
// remove(function) - Removes element from list
class LinkedListNode {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}

class LinkedList {
  constructor(element) {
    this.head = new LinkedListNode(element, null);
  }

  findNode(item) {
    let currNode = this.head;
    while (currNode !== null) {
      if (currNode.element === item) {
        return currNode;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  findPreviousNode(item) {
    let currNode = this.head;
    let prevNode = null;
    while (currNode !== null) {
      if (currNode.element === item) {
        return prevNode;
      } else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }
    return prevNode;
  }

  insertElement(afterItem, item) {
    let insertionNode = this.findNode(afterItem);
    if (insertionNode === null) {
      return false;
    } else {
      const node = new LinkedListNode(item, insertionNode.next);
      insertionNode.next = node;
      return true;
    }
  }

  removeElement(item) {
    let toRemoveNode = this.findNode(item);
    if (toRemoveNode === null) {
      return false;
    } else {
      const previousNode = this.findPreviousNode(toRemoveNode.element);
      if (previousNode === null) {
        // this is the heade node.
        this.head = toRemoveNode.next;
      } else {
        previousNode.next = toRemoveNode.next;
        toRemoveNode = null;
      }
      return true;
    }
  }

  displayList() {
    let node = this.head;
    while (node !== null) {
      console.log(node.element);
      node = node.next;
    }
  }
}

const exampleLinkedList = new LinkedList("apple");
exampleLinkedList.insertElement("apple", "mango");
exampleLinkedList.insertElement("mango", "banana");
exampleLinkedList.removeElement("mango");

console.log(exampleLinkedList.findNode("banana"));
console.log(exampleLinkedList.findNode("apple"));

exampleLinkedList.removeElement("apple");
exampleLinkedList.displayList();
