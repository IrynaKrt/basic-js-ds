const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {

  constructor() {
    this.nodeList;
    this.lastNode;
  }

  getUnderlyingList() {
    return this.nodeList;
  }

  enqueue(value) {
    if (this.nodeList) {
      let enqueueNode = new ListNode(value);

      this.lastNode.next = enqueueNode;
      this.lastNode = enqueueNode;
    } else {
      this.nodeList = new ListNode(value);
      this.lastNode = this.nodeList;
    }
  }

  dequeue() {
    let currValue = this.nodeList.value;

    this.nodeList = this.nodeList.next;
    return currValue;
  }
}

module.exports = {
  Queue
};
