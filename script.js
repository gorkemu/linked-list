class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    let newNode = new Node(value);
    let current;

    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;

      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = newNode;
    }
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  size() {
    let current = this.head;
    let counter = 0;

    while (current != null) {
      counter++;
      current = current.nextNode;
    }

    return counter;
  }

  headNode() {
    return this.head;
  }

  tail() {
    let current = this.head;
    while (current.nextNode) {
      current = current.nextNode;
    }
    return current;
  }

  at(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
      if (current == null) return "No such index";
    }
    return current;
  }

  pop() {
    let current = this.head;
    let prev = null;
    while (current.nextNode) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
  }

  contains(value) {
    let current = this.head;
    while (current != null) {
      if (current.value == value) return true;
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current != null) {
      if (current.value == value) return index;
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current != null) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }
    string += "null";
    return string;
  }

  insertAt(value, index) {
    if (index > this.size()) {
      console.log(
        `The list has ${this.size()} nodes, index can be maximum ${this.size()}`
      );
      return;
    } else if (index < 0) {
      console.log("Index can't be less than 0");
      return;
    } else if (index === 0) {
      this.prepend(value);
      return;
    }

    let current = this.head;
    let temp;

    for (let i = 0; i < index; i++) {
      temp = current;
      current = current.nextNode;
    }

    temp.nextNode = new Node(value, current);
  }

  removeAt(index) {
    if (index >= this.size()) {
      console.log(
        `The list has ${this.size()} nodes, index can be maximum ${
          this.size() - 1
        }`
      );
      return;
    } else if (index < 0) {
      console.log("Index can't be less than 0");
      return;
    } else if (index === 0) {
      let current = this.head;
      this.head = current.nextNode;
      return;
    }

    let current = this.head;
    let prev;

    for (let i = 0; i < index; i++) {
      prev = current;
      current = current.nextNode;
    }

    prev.nextNode = current.nextNode;
  }
}
