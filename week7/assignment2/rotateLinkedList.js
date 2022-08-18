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
    this.maxSize = 104;
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

  /*
  @function rotate - To left-shift the linked list
 Time complexity = O(N)
 Space complexity = O(1)
*/
  rotate(k) {
    if (this.size == 0) throw new Error("Empty List");
    if (this.size == 1) return this;
    if (k <= 0 || k > this.size)
      throw new Error("can't rotate/shift by this value");
    for (let index = 0; index < k; index++) {
      this.tail.next = this.head;
      this.head = this.head.next;
      this.tail = this.tail.next;
      this.tail.next = null;
    }
    return this;
  }
}

try {
  let list = new LinkedList();
  list.push(2);
  list.push(4);
  list.push(7);
  list.push(8);
  list.push(9);
  list.log();
  list.rotate(3);
  list.log();
} catch (error) {
  console.error(error);
}
