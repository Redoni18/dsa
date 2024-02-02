// Stack -> ordered list of elements where an element is inserted at the end of the stack and is removed from the end of the stack
// A stacks work based on the Last in, first out principle, which is different from a queue (FIFO)
// stack -> two main ops: push and pop


// implement a stack using an array

// let stack = []

// stack.push(1)
// console.log(stack)

// stack.push(2)
// console.log(stack)

// stack.push(3)
// console.log(stack)

// console.log(stack.pop()); //  3
// console.log(stack); // [1,2];

// console.log(stack.pop()); //  2
// console.log(stack); // [1];

// console.log(stack.pop()); //  1
// console.log(stack); // []; -> empty

// console.log(stack.pop())

//reverse a string using a js stack

function reverse(str) {
    let stack = []

    for(let i = 0; i < str.length; i++) {
        stack.push(str[i])
    }

    let reversedStr = ''

    while(stack.length > 0) {
        reversedStr += stack.pop()
    }

    return reversedStr
}

// console.log(reverse('JavaScript'))

// console.log('stack after third push', stack.elements)

class Stack {

    constructor() {
        this._storage = {},
        this._length = 0
    }

    push(value) {
        this._storage[this.length] = value
        this._length++
    }

    pop() {
        if(!this._length) return 'POP: No values in stack'

        const item = this._storage[this.length - 1]
        this._storage[this._length - 1] = undefined
        this._length--
        return item
    }

    peek() {
        if(!this._length) return 'PEEK: No values in stack'

        return this._storage[this._length - 1]
    }
}


const stack = new Stack()

// stack.push('Redon')
// stack.push('Emini')

console.log(stack._storage)
console.log(stack.peek())
// console.log(stack.storage)
// stack.push('Emini')
// console.log(stack.storage)