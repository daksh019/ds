class DLListNode {
  constructor(element, next, previous) {
    this.element = element;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor(element) {
    this.head = new DLListNode(element, null, null);
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
    while (currNode !== null) {
      if (currNode.element === item) {
        return currNode.previous;
      } else {
        currNode = currNode.next;
      }
    }
    return null;
  }

  insertElement(afterItem, item) {
    let insertionNode = this.findNode(afterItem);
    if (insertionNode === null) {
      return false;
    } else {
      const node = new DLListNode(item, insertionNode.next, insertionNode);
      insertionNode.next = node;
      return true;
    }
  }

  removeElement(item) {
    let toRemoveNode = this.findNode(item);
    if (toRemoveNode === null) {
      return false;
    } else {
      const previousNode = toRemoveNode.previous;
      if (previousNode === null) {
        // this is the head node.
        this.head = toRemoveNode.next;
        this.head.previous = null;
      } else {
        previousNode.next = toRemoveNode.next;
        toRemoveNode.next.previous = previousNode;
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

const exampleLinkedList = new DoublyLinkedList("apple");
exampleLinkedList.insertElement("apple", "mango");
exampleLinkedList.insertElement("mango", "banana");
exampleLinkedList.removeElement("mango");

console.log(exampleLinkedList.findNode("banana"));
console.log(exampleLinkedList.findNode("apple"));

exampleLinkedList.removeElement("apple");
console.log(exampleLinkedList.findNode("banana"));
exampleLinkedList.displayList();
