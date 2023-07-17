// class queue{
//     constructor (n1,n2,n3,n4,n5){
//         this.n1 = n1;
//         this.n2 = n2;
//         this.n3 = n3;
//         this.n4 = n4;
//         this.n5 = n5;
//     }
// }

// const myqueue = new queue(12,34,45,56,76,67)
// console.log(myqueue)


class queue {
    constructor() { //for create object
      this.items = [];
    }
  
    enqueue(element) {
      this.items.push(element);
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return "queue is empty";
      }
      return this.items.shift();
    }
  
    front() {
      if (this.isEmpty()) {
        return "queue is empty";
      }
      return this.items[0];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    print() {
      console.log(this.items);
    }
  }


  const myqueue = new queue();
myqueue.enqueue(10);
myqueue.enqueue(20);
myqueue.enqueue(30);
myqueue.enqueue(40);
myqueue.enqueue(50);
console.log(myqueue.front());
console.log(myqueue.dequeue());
console.log(myqueue.size());
myqueue.print();
myqueue.dequeue();
myqueue.print();