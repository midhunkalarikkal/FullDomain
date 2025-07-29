class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class singlyLinkedList {
    constructor(){
        this.head = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
        }else{
            let prev = this.head
            while(prev.next){
                prev = prev.next
             }
            prev.next = node
        }
        this.size++
    } 

    insert(value,index){
        if(index < 0 || index >= this.size){
            console.log("Invalid index!")
            return false
        }

        if(index === 0 ){
            this.prepend(value)
        }else{
            const node = new Node(value)
            let prev = this.head
            for(let i = 0; i < index -1; i++){
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeFromIndex(index){
        if(index < 0 || index >= this.size){
            console.log("Invalid index")
            return false
        }

        let removeNode;
        if(index === 0){
            removeNode = this.head
            this.head = this.head.next
        }else{
            let prev = this.head
            for(let i = 0; i < index-1; i++){
                prev = prev.next
            }
            removeNode = prev.next
            prev.next = removeNode.next
        }
        this.size--
        console.log("removed node :",removeNode)
    }

    removeSpecificValue(value){
        let current = this.head
        let previous = null

        if(this.isEmpty()){
            console.log("List is empty!")
            return false
        }

        if(current !== null && current.value === value){
            this.head = current.next
            this.size--
            console.log("Node removed : ",value)
            return
        }

        while(current !== null && current.value !== value){
            previous = current
            current = current.next
        }

        if(current === null){
            console.log("Value is not found in the list!")
            return false
        }

        previous.next = current.next
        this.size--
        console.log("Node removed with value : ",value)
        return
    }

    convertToArray(){
        if(!this.isEmpty()){
            let arr = []
            let current = this.head
            while(current){
                arr.push(current.value)
                current = current.next
            }
            console.log("Linked list converted to an array")
            console.log(arr)
        }else{
            console.log("list is empty!")
        }
    }

    reverseTraverse(){
        if(!this.isEmpty()){
            let arr = []
            let current = this.head
            while(current){
                arr.push(current.value)
                current = current.next
            }
            console.log("Linked list printing in reverse")
            for(let i = arr.length - 1; i >= 0; i--){
                console.log(arr[i])
            }
        }else{
            console.log("list is empty!")
        }
    }

    removeDuplicates(){
        if (this.isEmpty() || this.head.next === null) {
            return;
        }
    
        let current = this.head;

        while (current !== null) {
            let runner = current;

            while (runner.next !== null) {
                if (current.value === runner.next.value) {
                    runner.next = runner.next.next;
                    this.size--;
                } else {
                    runner = runner.next;
                }
            }
            current = current.next;
        }
    }

    traverse(){
        if(!this.isEmpty()){
            let current = this.head
            let listValues = ""
            while(current){
                listValues += ` ${current.value}`
                current = current.next
            }
            console.log("list values ")
            console.log(listValues)
        }else{
            console.log("linked is empty.")
        }
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;

        while (current !== null) {
            next = current.next;
            current.next = prev;
            prev = current;      
            current = next;      
        }
        this.head = prev;
        console.log("Linked list reversed");
    }

    findMidPoint() {
        if (this.isEmpty()) {
            return null;
        }
        let slowPointer = this.head;
        let fastPointer = this.head;
        
        while (fastPointer !== null && fastPointer.next !== null) {
            slowPointer = slowPointer.next;
            fastPointer = fastPointer.next.next;
        }
        
        console.log("Mid point : ",slowPointer.value);
    }
}
const list = new singlyLinkedList()

console.log("list is empty ? ",list.isEmpty())
console.log("list size : ",list.getSize())
list.prepend(10)
list.prepend(20)
list.traverse()
list.prepend(30)
list.prepend(40)
list.prepend(50)
list.prepend(60)
list.prepend(70)
list.traverse()
list.append(40)
list.append(60)
list.append(80)
list.append(20)
list.append(90)
list.append(100)    
list.traverse()
list.insert(888,4)
list.traverse()
list.removeFromIndex(5)
list.traverse()
list.convertToArray()
list.removeSpecificValue(888)
list.traverse()
list.reverseTraverse()
list.removeDuplicates()
list.traverse()
list.reverse()
list.traverse()
list.findMidPoint()