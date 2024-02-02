// Queue -> ordered list of elements where an element is inserted at the end of the queue and is removed from the front of the queue
// A queue work based on the First in, first out principle, which is different from a stack (LIFO)
// queue -> two main ops: insert (enqueue) and remove from the front (dequeue)

// another operation of the queue is called peek. Different from dequeue operation, the peek operation returns the element at the front without modifying the queue

// implement a queue with js


// elements is an object
class Queue {
    constructor() {
      this.elements = {};
      this.head = 0 // front
      this.tail = 0 // back
    }
  
    enqueue( element ) {
      this.elements[this.tail] = element
      this.tail++
    }
  
    dequeue() {
      const item = this.elements[this.head]
      delete this.elements[this.head]
      this.head++
  
      return item
    }
  
    peek() {
      return this.elements[this.head]
    }
  
    get length() {
      return this.tail - this.head
    }
  
    get isEmpty() {
        return this.length === 0;
    }
}

let q = new Queue();

for(let i = 0; i < 10; i++){
    q.enqueue(i)
}

console.log('elements', q.elements)

console.log('peek the first item in the queue', q.peek())

console.log('length before dequeue', q.length)

// while (!q.isEmpty) {
//     console.log(q.dequeue());
// }


console.log(q.dequeue());


console.log('length after dequeue', q.length)


q.enqueue(10)



// elements is an array 
// class SecondQueue {
//     constructor() {
//         this.elements = [];
//         this.head = 0;
//         this.tail = 0;
//     }

//     enqueue( element ) {
//         this.elements[this.tail] = element;
//         this.tail++
//     }

//     dequeue() {
//         const item = this.elements[this.head]
//         this.elements.splice(this.head, 1)
//         this.head++;
//         this.tail = this.elements.length
//         return item
//     }

//     peek() {
//         return this.elements[this.head]
//     }

//     get length() {
//         return this.elements.length
//     }

//     get isEmpty() {
//         return !this.elements.length
//     }
// }

// let q2 = new SecondQueue();

// for(let i = 0; i < 10; i++){
//     q2.enqueue(i)
// }

// console.log('elements:', q2.elements)

// console.log('peek the first item in the queue:', q2.peek())

// console.log('length before dequeue:', q2.length)

// // while (!q.isEmpty) {
// //     console.log(q.dequeue());
// // }


// console.log('dq:', q2.dequeue());


// console.log('length after dequeue:', q2.length)

// console.log('elements:', q2.elements)

// q2.enqueue(10)

// console.log('elements after nq:', q2.elements)
