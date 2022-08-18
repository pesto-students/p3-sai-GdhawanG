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
    if (value < 1 || value > 103) throw "value out of bounds";
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
   @function loop - To find if there's a loop in the singly linked list
   Time complexity = O(N)
   Space complexity = O(1)
  */
  loop() {
    if (this.size == 0) throw new Error("Empty List");
    if (this.size == 1) return false;
    let cur = this.head;
    let isLoop;
    for (let i = 0; i < this.size; i++) {
      if (cur.next == null) {
        isLoop = "no loop";
      } else {
        console.log(cur, cur.next);
        cur = cur.next;
        cur.next = cur.next;
        isLoop = "loop exists";
      }
    }
    console.log(isLoop);
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
  list.loop();
  list.tail.next = list.head; // create loop
  list.loop();
} catch (error) {
  console.error(error);
}
