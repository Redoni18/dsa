class HashTable {
    constructor(val) {
        this._storage = new Array(val)
        this.tableSize = val

    }

    insert(key, value) {
        const index = this._hash(key, this.tableSize)

        // initialize empty array if index doesn't exist
        if(!this._storage[index]) this._storage[index] = []


        const arrayAtIndex = this._storage[index];

        // iterate through the hashtable to check for duplicate keys
        let isDuplicate = false;
        for (let i = 0; i < arrayAtIndex.length; i++) {
            const keyValueArray = arrayAtIndex[i];
            if (keyValueArray[0] === key) {
                keyValueArray = [key, value]
                //overwrite the existing key value pair
                arrayAtIndex[i] = keyValueArray
            }
        }

        // store it if non-duplicate
        if (!isDuplicate) {
            this._storage[index].push([key, value]);
        }
    }

    retrieve(key) {
        const index = this._hash(key, this.tableSize)
        const arrayAtIndex = this._storage[index]
        let keyValueArray = []
        if(arrayAtIndex) {
            for(let i = 0; i < arrayAtIndex.length; i++) {
                keyValueArray = arrayAtIndex[i]
                if(keyValueArray[0] === key) return keyValueArray[1]
            }
        }
    }

    remove(key) {
        const index = this._hash(key, this.tableSize)
        const arrayAtIndex = this._storage[index]
        let keyValueArray = []
        if(arrayAtIndex) {
            for(let i = 0; i < arrayAtIndex.length; i++) {
                keyValueArray = arrayAtIndex[i]
                if(keyValueArray[0] === key) {
                    arrayAtIndex.splice(i, 1);
                    return
                }
            }
        }
    }

    _hash(str, n) {
        let hash = 0;
        const primeMultiplier = 31;
    
        for (let i = 0; i < str.length; i++) {
            hash = (hash * primeMultiplier + str.charCodeAt(i)) % n;
        }
    
        return hash;
    }
}

const myHt = new HashTable(25)

console.log(myHt)
myHt.insert('1', 1)
myHt.insert('2', 3)
myHt.insert('3', 2)
myHt.insert('4', 2)
myHt.insert('5', 2)

myHt.insert('11', 1)
myHt.insert('22', 3)
myHt.insert('33', 2)
myHt.insert('44', 2)
myHt.insert('55', 2)

myHt.insert('111', 1)
myHt.insert('222', 3)
myHt.insert('333', 2)
myHt.insert('444', 2)
myHt.insert('555', 2)

myHt.insert('1111', 1)
myHt.insert('2222', 3)
myHt.insert('3333', 2)
myHt.insert('4444', 2)
myHt.insert('5555', 2)

myHt.insert('11111', 1)
myHt.insert('22222', 3)
myHt.insert('33333', 2)
myHt.insert('44444', 2)
myHt.insert('55555', 2)

myHt.insert('111111', 1)
myHt.insert('222222', 3)
myHt.insert('333333', 2)
myHt.insert('444444', 2)
myHt.insert('555555', 2)

myHt.insert('5555555', 2)

console.log(myHt.retrieve('555'))

myHt.remove('555555')
console.log(myHt._storage)