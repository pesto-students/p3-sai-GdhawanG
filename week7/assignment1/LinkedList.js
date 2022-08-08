class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
    this.maxSize = 10;
  }

  push(value) {
    if (this.size == this.maxSize) throw "list overflow";
    let newNode = new Node(value);
    if (this.size == 0) {
      this.head = this.tail = newNode;
    } else {
      this.tail = this.tail.next = newNode;
    }
    this.size++;
    return this;
  }

  log() {
    let aux = [];
    if (this.size == 0) {
      console.log("---list is empty---");
      return;
    }
    aux.push(this.head.value);
    let current = this.head;
    while (current.next) {
      let nextNode = current.next;
      aux.push(nextNode.value);
      current = nextNode;
    }
    console.log(aux.join(" -> "));
    return;
  }
}

try {
  let list = new LinkedList();
  list.push(10);
  list.push(20);
  list.push(30);
  list.push(40);
  list.push(50);
  list.log();
} catch (error) {
  console.error(error);
}
