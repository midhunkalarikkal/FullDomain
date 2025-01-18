class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    }

    insert(value){
        const newNode = new Node(value);
        if(this.isEmpty()){
            this.root = newNode;
        }else{
            let current = this.root;
            while(true){
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        break;
                    }
                    current = current.left;
                }else{
                    if(current.right === null){
                        current.right = newNode;
                        break;
                    }
                    current = current.right;
                }
            }
        }
    }

    inOrder(root = this.root, result = []){
        if(root !== null){
            this.inOrder(root.left, result);
            result.push(root.value);
            this.inOrder(root.right, result);
        }
        return result;
    }

    preOrder(root = this.root, result = []){
        if(root !== null){
            result.push(root.value);
            this.preOrder(root.left, result);
            this.preOrder(root.right, result);
        }
        return result;
    }

    postOrder(root = this.root, result = []){
        if(root !== null){
            this.postOrder(root.left,result);
            this.postOrder(root.right, result);
            result.push(root.value);
        }
        return result;
    }

    reverseOrder(root = this.root, result = []){
        if(root !== null){
            this.reverseOrder(root.right, result);
            result.push(root.value);
            this.reverseOrder(root.left, result);
        }
        return result;
    }

    search(root = this.root, value){
        if(!root){
            return "Not found";
        }else{
            if(value === root.value){
                return "Exist";
            }else if(value < root.value){
                return this.search(root.left, value);
            }else{
                return this.search(root.right, value);
            }
        }
    }

    bsfLevelOrder(){
        let queue = [];
        let result = [];
        queue.push(this.root);
        while(queue.length){
            let current = queue.shift();
            result.push(current.value);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
        return result;
    }

    min(root = this.root){
        if(root.left){
            return this.min(root.left);
        }else{
            return root.value;
        }
    }

    max(root = this.root){
        if(root.right){
            return this.max(root.right);
        }else{
            return root.value;
        }
    }

    midPoint(){
        const nodes = this.inOrder();
        const midIndex = Math.floor((nodes.length) / 2);
        return nodes[midIndex];
    }

    height(value){
        if(this.isEmpty()){
            return -1;
        }

        const computeHeight = (node) => {
            if(node === null){
                return -1;
            }
            return 1 + Math.max(computeHeight(node.left), computeHeight(node.right));
        }

        let current = this.root;
        while(current){
            if(value === current.value){
                return computeHeight(current);
            }else if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            }
        }
        return -1;
    }

    depth(value){
        if(this.isEmpty()){
            return false;
        }

        let current = this.root;
        let depth = 0;
        while(current){
            if(value === current.value){
                return depth;
            }else if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }
            depth++;
        }
        return -1
    }

    delete(value){
        this.root = this.deleteNode(this.root, value);
        return "Deleted";
    }

    deleteNode(root,value){
        if(root === null){
            return root;
        }

        // Step 1: Recursively find the node to delete
        if(value < root.value){
            root.left = this.deleteNode(root.left, value);
        }else if(value > root.value){
            root.right = this.deleteNode(root.right, value);
        }else{
            // Step 2: Node to be deleted is found
            // Case 1: Node has no children (leaf node)
            if(!root.left && !root.right){
                return null;
            }

            // Case 2: Node has one child
            if(!root.left){
                return root.right;
            }else if(!root.right){
                return root.left;
            }

            // Case 3: Node has two children
            // Find the in-order successor (smallest in the right subtree)
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value);
        }
        return root;
    }
    
    treeHeight(root = this.root){
        if(root === null){
            return 0;
        }
        const leftHeight = this.treeHeight(root.left);
        const rightHeight = this.treeHeight(root.right);
        return Math.max(leftHeight, rightHeight) + 1;
    }

    isValidateBst(root = this.root, min = -Infinity, max = Infinity){
        if(root === null){
            return true;
        }

        if(root.value <= min || root.value >= max){
            return false;
        }

        return this.isValidateBst(root.left, min, root.value) && this.isValidateBst(root.right, root.value, max);
    }
}

const bst = new BinarySearchTree();

bst.insert(8);
bst.insert(3);
bst.insert(10);
bst.insert(1);
bst.insert(6);
bst.insert(4);
bst.insert(7);
bst.insert(14);
bst.insert(13);

console.log("Inorder traversal : ",bst.inOrder());
console.log("Preorder traversal : ",bst.preOrder());
console.log("Postorder traversal : ",bst.postOrder());
console.log("Searching value 6 : ",bst.search(6));
console.log("Reverseorder traversal : ",bst.reverseOrder());
console.log("BfsLevelOrder traversal : ",bst.bsfLevelOrder());
console.log("Minimum value :",bst.min());
console.log("Maximum value : ",bst.max());
console.log("Mid point : ",bst.midPoint());
console.log("Root : ",bst.root);
bst.delete(7);
console.log("Root : ",bst.root);
console.log("Height of 6 : ",bst.height(6));
console.log("Depth of value 6 : ",bst.depth(6));
console.log("Heigh of the tree : ",bst.treeHeight());
console.log("Checking the tree is a valid Bst : ",bst.isValidateBst());