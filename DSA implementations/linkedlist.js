

class LinkedList {
    constructor(value) {
        this.head = { value, next: null }
        this.tail = this.head
    }

    // insert value to tail of the linked list - constant time
    // { value, next: { value, next: { value, next: null } } }
    // tail = node -> { value, next: null } -> the last value
    insert(value) {
        const node = { value, next: null }
        this.tail.next = node
        this.tail = node
    }

    //remove tail from linked list
    //make the last pointer point to null
    removeTail() {
        let currentNode = this.head
        while(currentNode.next !== this.tail) {
            currentNode = currentNode.next
            console.log('currentNode2', currentNode)
        }

        currentNode.next = null
        this.tail = currentNode
        return this.tail
    }

    // return bool value if node is the head
    isHead(node) {
        return node === this.head
    }

    // return bool value if node is the tail
    isTail(node) {
        return node === this.tail
    }

    // return bool if linked list contains value
    contains(value) {
        let currentNode = this.head

        while(currentNode.value !== value && currentNode.next !== null) {
            currentNode = currentNode.next
        }

        return currentNode.value === value
    }
}

const myLinkedList = new LinkedList(1)

myLinkedList.insert(2)
myLinkedList.insert(3)
console.log(myLinkedList)
myLinkedList.removeTail()
myLinkedList.removeTail()
console.log(myLinkedList)

console.log(myLinkedList.isHead(myLinkedList.head))
console.log(myLinkedList.isTail(myLinkedList.tail))
console.log(myLinkedList.contains(2))