export interface LinkedListNodeProps {
  next?: LinkedListNode;
  prev?: LinkedListNode;
  data: any;
}

export default class LinkedListNode {
  next?: LinkedListNode;

  prev?: LinkedListNode;

  data: any;

  constructor({ next, prev, data }: LinkedListNodeProps) {
    this.next = next;
    this.prev = prev;
    this.data = data;
  }
}
