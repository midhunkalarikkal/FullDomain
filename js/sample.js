class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class binarySearchTree{
    constructor(){
        this.root = null;
        this.size = 0;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const node = new Node(value);
        if(this.isEmpty()){
            this.root = node
        }else{
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = node;
                        break;
                    }
                    current = current.left;
                }else if(value > current.value){
                    if(current.right === null){
                        current.right = node;
                        break;
                    }
                    current = current.right;
                }
            }
        }
        this.size++
    }

    inOrder(root = this.root, result = []){
        if(root !== null){
            this.inOrder(root.left, result);
            result.push(root.value);
            this.inOrder(root.right,result);
        }
        return result;
    }

    totalCount(){
        return this.size;
    }
}

const bst = new binarySearchTree();
console.log("isEmpty : ",bst.isEmpty());
console.log("Adding elemets");
bst.insert(1)
bst.insert(3)
bst.insert(6)
bst.insert(2)
bst.insert(8)
bst.insert(10)
bst.insert(14)
bst.insert(12)
console.log("Size of tree : ",bst.totalCount());
console.log("isEmpty : ",bst.isEmpty());
console.log("Inorder traversal : ",bst.inOrder());