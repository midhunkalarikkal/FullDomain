class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    isEmpty(){
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    prepend(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.head = node;
        }else{
            let prev = this.head;
            while(prev.next){
                prev = prev.next;
            }
            prev.next = node;
        }
        this.size++;
    }

    traverse(){
        if(!this.isEmpty()){
            let current = this.head;
            let list = "";
            while(current){
                list += current.value + " -> ";
                current = current.next;
            }
            list += "null";
            return list;
        }else{
            return " Linked list is empty";
        }
    }

    insert(value, index){
        if(index < 0 || index > this.size){
            return "Invalid index";
        }

        if(index == 0){
            this.prepend(value);
        }else{
            const node = new Node(value);
            let current = this.head;
            for(let i = 0; i < index - 1; i++){
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            this.size++;
        }
    }

    removeFromIndex(index){
        if(index < 0 || index >= this.size){
            return "Invalid index";
        }
        let removedNode;
        if(index === 0){
            removedNode = this.head;
            this.head = this.head.next;
        }else{
            let current = this.head;
            for(let i = 0; i < index - 1; i++){
                current = current.next;
            }
            removedNode = current.next;
            current.next = removedNode.next;
        }
        this.size--;
        return removedNode.value
    }

    removeValue(value){
        let current = this.head;
        let prev = current;
        if(!this.isEmpty()){
            if(current !== null && current.value === value){
                this.head = current.next;
                this.size--;
                return;
            }

            while(current !== null && current.value !== value){
                prev = current;
                current = current.next;
            }

            if(current === null){
                return "Value not found";
            }

            prev.next = current.next;
            this.size--;
            return `${value} removed from the linked list.`;
        }
    }

    convertToArray(){
        if(!this.isEmpty()){
            let arr = [];
            let current = this.head;
            while(current){
                arr.push(current.value);
                current = current.next;
            }
            return arr;
        }
    }
}

const linkedList = new SinglyLinkedList();
console.log(linkedList.isEmpty());
console.log(linkedList.getSize());
linkedList.prepend(2);
linkedList.prepend(6);
linkedList.prepend(4);
linkedList.prepend(8);
linkedList.append(10);
linkedList.append(4);
linkedList.append(78);
linkedList.append(90);
linkedList.insert(100,5);
console.log(linkedList.removeFromIndex(3));
console.log(linkedList.isEmpty());
console.log(linkedList.getSize());
console.log(linkedList.traverse());
console.log(linkedList.removeValue(100));
console.log(linkedList.getSize());
console.log(linkedList.traverse());
console.log(linkedList.convertToArray());