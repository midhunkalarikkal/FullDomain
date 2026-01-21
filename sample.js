// Given const nums = [1, 2, 3, 4], return a new array with each number doubled.
// const nums = [1, 2, 3, 4];
// const result = nums.map((num) => num*2);
// console.log(result);

// Convert an array of strings to uppercase. ["apple", "banana", "mango"] → ["APPLE", "BANANA", "MANGO"]
// const strArr = ["apple", "banana", "mango"];
// const result = strArr.map((str) => str.toUpperCase());
// console.log(result);

// Extract only the names from an array of objects: [{name:"A"}, {name:"B"}] → ["A","B"].
// const arr = [{name:"A"}, {name:"B"}];
// const result = arr.map((item) => item.name);
// console.log(result);

// Filter out even numbers from [1,2,3,4,5,6].
// const nums = [1,2,3,4,5,6];
// const result = nums.filter(num => num%2 === 0);
// console.log(result);

// From an array of ages [12, 25, 17, 30], keep only adults (age ≥ 18).
// const ages = [12, 25, 17, 30];
// const result = ages.filter( age => age > 18);
// console.log(result);

// Given users = [{active:true},{active:false}], keep only active users.
// const users = [{active:true},{active:false}];
// const result = users.filter(user => user.active);
// console.log(result);

// Find the first even number in [1,3,5,6,8].
// const nums = [1,3,5,6,8];
// const result = nums.find(num => num % 2 === 0);
// console.log(result);

// In an array of people, find the one whose name is "John".
// const names = ["midhun","jithin","john"];
// const result = names.find(name => name == "john");
// console.log(result);

// Find the first number greater than 50.
// const nums = [12,45,537,88];
// const result = nums.find(num => num > 50);
// console.log(result);

// Check if the array contains any even number. Input: [1, 3, 5, 7]
// const nums = [1, 3, 5, 7];
// const result = nums.some(num => num % 2 === 0);
// console.log(result);

// Check if any string has length greater than 5. Input: ["cat", "dog", "elephant"]
// const strArr = ["cat", "dog", "elephant"];
// const result = strArr.some(str => str.length > 5);
// console.log(result);

// Check if any student has marks less than 40.
// const students = [
//   { name: "A", marks: 45 },
//   { name: "B", marks: 32 },
//   { name: "C", marks: 50 }
// ]
// const result = students.some(student => student.marks < 40);
// console.log(result);

// Check if all numbers are even.
// const nums = [2, 4, 6, 8];
// const result = nums.every(num => num % 2 === 0);
// console.log(result);

// Check if all items in the cart have quantity > 0.
// const cart = [
//   { item: "Pen", qty: 2 },
//   { item: "Book", qty: 1 },
//   { item: "Pencil", qty: 3 }
// ]
// const result = cart.every(item => item.qty > 0);
// console.log(result);

// Check if all passwords are at least 8 characters long.
// const passwords = ["password123", "hello1234", "admin2024"];
// const result = passwords.every(password => password.length > 8);
// console.log(result);

// Find the sum of all numbers.
// const nums = [1, 2, 3, 4];
// const result = nums.reduce((acc,cv,ci,arr) => {
//     return acc + cv;
// },0);
// console.log(result);

// Find the maximum number using reduce.
// const nums = [10, 25, 7, 99, 3];
// const result = nums.reduce((acc,cv,ci,arr) => {
//     return cv > acc ? cv : acc;
// },0);
// console.log(result);

// Count how many times each letter appears in the string "hello".
// const str = "hello";
// const result = str.split("")
// .reduce((acc,cv,ci,arr) => {
//     if(acc[cv]) {
//         acc[cv] = ++acc[cv];
//     } else {
//         acc[cv] = 1;
//     }
//     return acc;
// },{});
// console.log(result);

// Group people by age
// const people = [
//   { name: "A", age: 20 },
//   { name: "B", age: 21 },
//   { name: "C", age: 20 },
//   { name: "D", age: 22 }
// ];
// const result = people.reduce((acc,cv,ci,arr) => {
//     acc[cv.age] = (acc[cv.age] || 0) + 1;
//     return acc;
// },{});
// console.log(result);

// call()1
// const user = { name: "Midhun" };
// function greet() {
//   console.log("Hello " + this.name);
// }
// greet.call(user);

// call()2
// const obj = {
//     name: "Midhun",
//     greet: function(a,b) {
//         console.log(`Hi ${this.name+" "+a+" "+b}`);
//     }
// }

// const user = {
//     name: "Jithin"
// }

// obj.greet.call(user,1,2);
// obj.greet.apply(user,[1,2]);
// const result = obj.greet.bind(user,1,2);
// result();

// Generator function to print 0 to 5;
// function* Generator(max) {
//     let num = 0;
//     while(num <= max) {
//         yield num;
//         num++;
//     }
// }

// const gen = Generator(5);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// Constructor function
// function Sample(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Sample.prototype.print = function() {
//     console.log(this.name , this.age);
// }

// const s = new Sample("midhun",25);
// s.print();

// object.values
// const obj = {
//     name: "Midhun",
//     age: 25,
//     place: "ktpm"
// }
// const result = Object.values(obj);
// console.log(result);
// const result1 = Object.entries(obj);
// console.log(result1);
// const result2 = Object.keys(obj);
// console.log(result2);

// Object.seal(obj);

// console.log("sealed obj", Object.isSealed(obj));
// obj.age = 26;
// obj.country = "India";
// console.log(obj);

// Object.freeze(obj);

// obj.age = 25;
// console.log(obj)

// Delete object property
// const obj = {
//     name: "Midhun",
//     age: 25,
//     place: "ktpm"
// }

// delete obj.place;
// console.log(obj);

// Call back example
// function one () {
//     console.log("Function One");
// }

// function two(callback) {
//     console.log("Function Two");
//     callback();
// }

// two(one);

// Callback HELL
// function createCart(cart, callback) {
//     setTimeout(() => {
//         console.log("Cart created : ", cart);
//         callback();
//     },1000);
// }

// function createPayment(cart, callback) {
//     setTimeout(() => {
//         console.log("Payment created : ",cart);
//         callback();
//     },1000);
// }

// function createOrder(cart, callback) {
//     setTimeout(() => {
//         console.log("Order createc: ",cart);
//         callback();
//     },1000);
// }

// createCart("cart", () => {
//     createPayment("cart", () => {
//         createOrder("cart",() => {
//             console.log("Done");
//         })
//     })
// })

// Promise
// const samplePromise = new Promise((resolve, reject) => {
//     let value = false;
//     if(value) {
//         resolve("Resolved");
//     } else {
//         reject("Rejected");
//     }
// });

// samplePromise.then((res) => {
//     console.log("res : ",res);
// }).catch((error) => {
//     console.error("error : ",error);
// })

// async function resolvePromise() {
//     try {
//         const res = await samplePromise;
//         console.log("res : ",res);
//     } catch (error) {
//         console.error("error : ",error);
//     }
// }

// resolvePromise();

// Multiple Promise
// const promiseOne = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise One Resolved");
//     },1000);
// });

// const promiseTwo = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("Promise Two Resolved");
//         reject("Promise Two Rejected");
//     },1000);
// });

// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Three Resolved");
//     },1000);
// });

// const result1 = Promise.all([promiseOne, promiseTwo, promiseThree]);
// result1.then((res) => {
//     console.log("Promise.all");
//     console.log("res : ",res);
// }).catch((error) => {
//     console.log("Promise.all");
//     console.error("error : ",error);
// });

// const result2 = Promise.allSettled([promiseOne, promiseTwo, promiseThree]);
// result2.then((res) => {
//     console.log("Promise.allSettled");
//     console.log("res : ",res);
// }).catch((error) => {
//     console.log("Promise.allSettled");
//     console.error("error : ",error);
// });

// const result3 = Promise.race([promiseOne, promiseTwo, promiseThree]);
// result3.then((res) => {
//     console.log("Promise.race");
//     console.log("res : ",res);
// }).catch((error) => {
//     console.log("Promise.race");
//     console.error("error : ",error);
// })

// const result4 = Promise.any([promiseOne, promiseTwo, promiseThree]);
// result4.then((res) => {
//     console.log("Promise.any");
//     console.log("res : ",res);
// }).catch((error) => {
//     console.log("Promise.any");
//     console.error("error : ",error);
// })

// promiseOne.then((res) => {
//     console.log("Promise one res : ",res);
//     return promiseTwo
// }).then((res) => {
//     console.log("Promise two res : ",res);
//     return promiseThree
// }).then((res) => {
//     console.log("Promise three res : ",res);
// }).catch((error) => {
//     console.error("error : ",error);
// })

// Currying
// function currying (x) {
//     return function(y) {
//         return function (z) {
//             return x* y * z;
//         }
//     }
// }

// console.log(currying(1)(2)(3));

// Pollyfill
// if(!Array.prototype.includes) {
//     Array.prototype.includes = function (element) {
//         return this.indexOf(element) !== -1
//     }
// }

// const nums = [1,2,3,4,5,6];
// const result = nums.includes(6);
// console.log(result);

// function to remove duplicates from even number array
// const arr = [2,4,4,6,8,10,10,2,4,44,22];
// function removeDuplicates(arr) {
//     let n = arr.length;
//     for(let i = 0; i < n; i++) {
//         for(let j = i+1; j < n; j++) {
//             if(arr[i] == arr[j]) {
//                 arr.splice(j,1);
//             }
//         }
//     }
//     return arr;
// }

// console.log(removeDuplicates(arr));

// remove a character from a string
// const str = "midhunn";
// const index = 6
// const result = str.slice(0, 6);
// console.log(result);

// freezing nested object
// function deepFreeze(obj) {
//     Object.freeze(obj);
//     for(let key in obj) {
//         if(obj[key] !== null && typeof obj[key] == "object") {
//             deepFreeze(obj[key]);
//         }
//     }
// };

// const obj = {
//     name: "Midhun",
//     address : {
//         city: "Kuttippuram",
//     }
// }

// Object.freeze(obj);

// console.log(Object.isFrozen(obj))

// obj.name = "Midhun K Paniker";
// obj.address.city = "Kochi";

// console.log(obj)

// deepFreeze(obj);

// obj.address.city = "Banglore";
// console.log(obj)

// Print fibinacci
// 0 1 1 2 3 5 8 13 21.....
// function fib(n) {
//     if(n == 0 || n == 1) return n;
//     return fib(n - 1) + fib(n - 2);
// }

// for(let i = 0; i < 10; i++) {
//     console.log(fib(i));
// }

const nums = [44, 63, 24, 53, 12, 5, 88, 3, 667, -92, 2];

// function bubbleSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let swapped = false;
//     for (let j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         swapped = true;
//       }
//     }
//     if (!swapped) break;
//   }
//   return arr;
// }

// console.log(bubbleSort(nums));

// function selectionSort(arr) {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let min = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     if (min !== i) {
//       [arr[min], arr[i]] = [arr[i], arr[min]];
//     }
//   }
//   return arr;
// }

// console.log(selectionSort(nums));

// function insertionSort(arr) {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     let curr = arr[i];
//     let prev = i - 1;
//     while (arr[prev] > curr && prev >= 0) {
//       arr[prev + 1] = arr[prev];
//       prev--;
//     }
//     arr[prev + 1] = curr;
//   }
//   return arr;
// }

// console.log(insertionSort(nums));

// function quickSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }

//   let n = arr.length;
//   let pivot = arr[n - 1];
//   let leftArr = [];
//   let rightArr = [];

//   for (let i = 0; i < n; i++) {
//     if (arr[i] === pivot) {
//       continue;
//     }
//     if (arr[i] < pivot) {
//       leftArr.push(arr[i]);
//     } else {
//       rightArr.push(arr[i]);
//     }
//   }

//   return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
// }

// console.log(quickSort(nums));

// function mergeSort(arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   let n = arr.length;
//   let mid = Math.floor(n / 2);
//   let left = mergeSort(arr.slice(0, mid));
//   let right = mergeSort(arr.slice(mid));
//   return merge(left, right);
// }

// function merge(left, right) {
//   let i = 0;
//   let j = 0;
//   let result = [];

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       result.push(left[i]);
//       i++;
//     } else {
//       result.push(right[j]);
//       j++;
//     }
//   }

//   while (i < left.length) {
//     result.push(left[i]);
//     i++;
//   }

//   while (j < right.length) {
//     result.push(right[j]);
//     j++;
//   }

//   return result;
// }

// console.log(mergeSort(nums));

// LINKED LIST
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

// class SinglyLinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0;
//   }

//   listSize() {
//     console.log(`Size of list is ${this.size}`);
//   }

//   isEmpty() {
//     return this.size === 0;
//   }

//   addAtHead(val) {
//     const node = new Node(val);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     console.log(`${val} added at head`);
//     this.size++;
//   }

//   addAtTail(val) {
//     const node = new Node(val);
//     if (this.isEmpty()) {
//       this.head = node;
//     } else {
//       let curr = this.head;
//       while (curr.next) {
//         curr = curr.next;
//       }
//       curr.next = node;
//     }
//     console.log(`${val} added at tail`);
//     this.size++;
//   }

//   addAtIndex(index, val) {
//     if (index < 0 || index > this.size) {
//       console.log("Invalid index");
//       return;
//     }

//     if (index == 0) {
//       this.addAtHead(val);
//       return;
//     }

//     if (index == this.size) {
//       this.addAtTail(val);
//       return;
//     }

//     let curr = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       curr = curr.next;
//     }
//     const node = new Node(val);
//     node.next = curr.next;
//     curr.next = node;
//     console.log(`${val} added at index ${index}`);
//     this.size++;
//   }

//   midPoint() {
//     if (this.isEmpty()) {
//       console.log(`List is empty`);
//       return;
//     }
//     let slow = this.head;
//     let fast = this.head;
//     while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }
//     console.log(`Mid point is ${slow.val}`);
//     return;
//   }

//   isCyclic() {
//     if (this.isEmpty()) {
//       console.log(`List is emoty`);
//       return;
//     }
//     let slow = this.head;
//     let fast = this.head;
//     while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//       if (slow == fast) {
//         console.log("List is having a cycle");
//         return;
//       }
//     }
//     console.log("List is not having a cycle");
//     return;
//   }

//   reverseList() {
//     if (this.isEmpty()) {
//       console.log("List is empty");
//       return;
//     }
//     console.log("Reversing list");
//     let prev = null;
//     let curr = this.head;
//     while (curr) {
//       let temp = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = temp;
//     }
//     this.head = prev;
//   }

//   deleteAtIndex(index) {
//     if(index < 0 || index > this.size) {
//         console.log("Invalid index");
//         return;
//     }

//     if(this.isEmpty()) {
//         console.log("List is empty");
//         return;
//     }

//     if(index === 0) {
//         this.head = this.head.next;
//         this.size--;
//         return;
//     }

//     console.log(`Deleting node from index ${index}`);
//     let curr = this.head;
//     for(let i = 0; i < index - 1; i++) {
//         curr = curr.next;
//     }
//     curr.next = curr.next.next;
//     this.size--;
//     console.log(`${index} node deleted`);
//     return;
//   }

//   searchVal(val) {
//     if(this.isEmpty()) {
//         console.log("List is empty");
//         return;
//     }

//     console.log(`Searching value ${val}`);
//     let curr = this.head;
//     while(curr) {
//         if(curr.val == val) {
//             console.log(`${curr.val} is present`);
//             return;
//         } else {
//             curr = curr.next;
//         }
//     }
//     console.log(`${val} is not present`);
//     return;
//   }

//   deleteValue(val) {
//     if(this.isEmpty()) {
//         console.log("List is empty");
//         return;
//     }

//     console.log(`Deleting value ${val}`);
//     const sentinalNode = new Node();
//     sentinalNode.next = this.head;
//     let prev = sentinalNode;

//     while(prev && prev.next) {
//         if(prev.next.val === val) {
//             prev.next = prev.next.next;
//             console.log(`${val} removed from list`);
//             this.size--;
//         } else {
//             prev = prev.next;
//         }
//     }
//     this.head = sentinalNode.next;
//     return;
//   }

//   printList() {
//     if (this.isEmpty()) {
//       console.log("List is empty");
//       return;
//     }
//     console.log("Printing list");
//     let curr = this.head;
//     let list = "";
//     while (curr) {
//       list += curr.val + " -> ";
//       curr = curr.next;
//     }
//     list += "null";
//     console.log(list);
//     return;
//   }
// }

// const list = new SinglyLinkedList();
// list.printList();
// list.isEmpty();
// list.addAtHead(1);
// list.printList();
// list.addAtTail(2);
// list.printList();
// list.addAtHead(3);
// list.printList();
// list.addAtHead(7);
// list.printList();
// list.isEmpty();
// list.addAtHead(12);
// list.printList();
// list.addAtHead(14);
// list.printList();
// list.addAtIndex(2, 10);
// list.printList();
// list.reverseList();
// list.printList();
// list.listSize();
// list.isEmpty();
// list.midPoint();
// list.isCyclic();
// list.searchVal(10);
// list.printList();
// list.deleteAtIndex(2);
// list.printList();
// list.deleteValue(7);
// list.printList();

// STACK
// class Stack {
//     constructor() {
//         this.items = [];
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     pushValue(val) {
//         this.items[this.size] = val;
//         this.size++;
//         console.log(`${val} pushed to stack`);
//         return;
//     }

//     popValue() {
//         if(this.isEmpty()) {
//             console.log("Stack is empty");
//             return;
//         }

//         const removedValue = this.items[this.size - 1];
//         delete this.items[this.size - 1];
//         this.size--;
//         console.log(`${removedValue} is popped from stack`);
//         return;
//     }

//     peek() {
//         if(this.isEmpty()) {
//             console.log("Stack is empty");
//             return;
//         }

//         console.log(`${this.items[this.size - 1]} is at top`);
//         return;
//     }

//     printStack() {
//         if(this.isEmpty()) {
//             console.log("Stack is empty");
//             return;
//         }

//         console.log("Printing Stack");
//         for(let i = 0; i < this.size; i++) {
//             console.log(`${i} -> ${this.items[i]}`);
//         }
//         return;
//     }
// }

// const stack = new Stack();
// stack.pushValue(1);
// stack.pushValue(2);
// stack.pushValue(3);
// stack.pushValue(4);
// stack.pushValue(5);
// stack.pushValue(6);
// stack.peek();
// stack.printStack();
// stack.popValue();
// stack.printStack();

// QUEUE
// class Queue{
//     constructor() {
//         this.items = [];
//         this.size = 0;
//         this.front = 0;
//         this.rear = 0;
//     }

//     isEmpty() {
//         return this.size === 0 || this.rear === this.front;
//     }

//     enqueue(val) {
//         this.items[this.rear] = val;
//         this.size++;
//         this.rear++;
//         console.log(`${val} enqueued`);
//     }

//     dequeue() {
//         if(this.isEmpty()) {
//             console.log("Queue is empty");
//             return;
//         }
//         const removedValue = this.items[this.front];
//         delete this.items[this.front];
//         this.size--;
//         this.front++;
//         console.log(`${removedValue} dequeued`);
//         return;
//     }

//     printQueue() {
//         if(this.isEmpty()) {
//             console.log("Queue is empty");
//             return;
//         }
//         console.log("Printing queue");
//         for(let i = this.front; i < this.rear; i++) {
//             console.log(`${i} -> ${this.items[i]}`);
//         }
//         return;
//     }
// }

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.enqueue(6);
// queue.printQueue();
// queue.dequeue();
// queue.printQueue();

// BST
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.right = null;
//         this.left = null;
//     }
// }

// class BinarySearchTree {
//     constructor() {
//         this.root = null;
//     }

//     isEmpty() {
//         return this.root == null;
//     }

//     addNode(val) {
//         const node = new Node(val);
//         if(this.isEmpty()) {
//             this.root = node;
//         } else {
//             let curr = this.root;
//             while(true) {
//                 if(val < curr.val) {
//                     if(curr.left === null) {
//                         curr.left = node;
//                         console.log(`${val} added to the tree`);
//                         break;
//                     } else {
//                         curr = curr.left;
//                     }
//                 } else if(val > curr.val) {
//                     if(curr.right === null) {
//                         curr.right = node;
//                         console.log(`${val} added to the tree`);
//                         break;
//                     } else {
//                         curr = curr.right;
//                     }
//                 }
//             }
//         }
//     }

//     delete(val) {
//        this.root = this.deleteNode(this.root, val);
//        console.log(`${val} deleted`);
//        return;
//     }

//     deleteNode(root, val) {
//         if(root === null) return root;

//         if(val < root.val) {
//             root.left = this.deleteNode(root.left, val);
//         } else if(val > root.val) {
//             root.right = this.deleteNode(root.right, val);
//         } else {
//             if(!root.left) return root.right;
//             if(!root.right) return root.left;

//             root.val = this.min(root.right);
//             root.right = this.deleteNode(root.right, root.val);

//         }
//         return root;
//     }

//     isValidateBst(root = this.root, min = -Infinity, max = Infinity) {
//         if(root === null) {
//             return true;
//         }

//         if(root.val <= min || root.val >= max) {
//             return false;
//         }

//         return this.isValidateBst(root.left, min, root.val) && this.isValidateBst(root.right, root.val, max);
//     }

//     treeHeight(root = this.root) {
//         if(root === null) {
//             return 0;
//         }
//         const leftHeight = this.treeHeight(root.left);
//         const rightHeight = this.treeHeight(root.right);
//         return Math.max(leftHeight, rightHeight) + 1;
//     }

//     inOrder(root = this.root, result = []) {
//         if(root !== null) {
//             this.inOrder(root.left, result);
//             result.push(root.val);
//             this.inOrder(root.right, result);
//         }
//         return result;
//     }

//     preOrder(root = this.root, result = []) {
//         if(root !== null) {
//             result.push(root.val);
//             this.preOrder(root.left, result);
//             this.preOrder(root.right, result);
//         }
//         return result;
//     }

//     postOrder(root = this.root, result = []) {
//         if(root !== null) {
//             this.postOrder(root.left, result);
//             this.postOrder(root.right, result);
//             result.push(root.val);
//         }
//         return result;
//     }

//     bfs(root = this.root) {
//         if(root === null) {
//             console.log("Tree is empty");
//             return;
//         }

//         let queue = [];
//         let result = [];
//         queue.push(this.root);
//         while(queue.length) {
//             let curr = queue.shift();
//             result.push(curr.val);
//             if(curr.left) {
//                 queue.push(curr.left);
//             }
//             if(curr.right) {
//                 queue.push(curr.right);
//             }
//         }
//         return result;
//     }

//     min(root = this.root) {
//         if(root.left) {
//             return this.min(root.left);
//         } else {
//             return root.val;
//         }
//     }

//     max(root = this.root) {
//         if(root.right) {
//             return this.max(root.right);
//         } else {
//             return root.val;
//         }
//     }

//     search(root = this.root, val) {
//         if(!root)return false;

//         if(val === root.val) {
//             return true;
//         } else if (val < root.val) {
//             return this.search(root.left, val);
//         } else {
//             return this.search(root.right, val);
//         }
//     }
// }

// const tree = new BinarySearchTree();

// // Insert nodes
// tree.addNode(50);
// tree.addNode(30);
// tree.addNode(70);
// tree.addNode(20);
// tree.addNode(40);
// tree.addNode(60);
// tree.addNode(80);

// console.log("InOrder:", tree.inOrder());
// console.log("PreOrder:", tree.preOrder());
// console.log("PostOrder:", tree.postOrder());
// console.log("BFS:", tree.bfs());

// console.log("Min:", tree.min());
// console.log("Max:", tree.max());

// console.log("Height:", tree.treeHeight());

// console.log("Search 40:", tree.search(tree.root, 40));
// console.log("Search 90:", tree.search(tree.root, 90));

// console.log("Is Valid BST:", tree.isValidateBst());

// // Delete a leaf node
// tree.delete(20);
// console.log("After deleting 20 (leaf):", tree.inOrder());

// // Delete node with one child
// tree.delete(30);
// console.log("After deleting 30 (one child):", tree.inOrder());

// // Delete node with two children
// tree.delete(50);
// console.log("After deleting 50 (two children):", tree.inOrder());

// GRAPH
// class Grpah {
//   constructor() {
//     this.list = {};
//   }

//   addVertex(v) {
//     if (!this.list[v]) {
//       this.list[v] = new Set();
//     }
//   }

//   addEdge(v1, v2) {
//     if (!this.list[v1]) {
//       this, addVertex(v1);
//     }
//     if (!this.list[v2]) {
//       this.addVertex(v2);
//     }
//     this.list[v1].add(v2);
//     this.list[v2].add(v1);
//   }

//   hasEdge(v1, v2) {
//     return (
//       (this.list[v1] &&
//         this.list[v2] &&
//         this.list[v1].has(v2) &&
//         this.list[v2].has(v1)) ||
//       "No Edge Found"
//     );
//   }

//   printList() {
//     for (let vertex in this.list) {
//       console.log(`${vertex} -> ${[...this.list[vertex]]}`);
//     }
//   }

//   removeEdge(v1, v2) {
//     this.list[v1].delete(v2);
//     this.list[v2].delete(v1);
//   }

//   removeVertex(v) {
//     if (!this.list[v]) {
//       return "Not Found";
//     }

//     for (let adjacentVertex of this.list[v]) {
//       this.removeEdge(v, adjacentVertex);
//     }

//     delete this.list[v];
//   }
// }
// const g = new Grpah();

// // Add vertices
// g.addVertex("A");
// g.addVertex("B");
// g.addVertex("C");

// console.log("After adding vertices:");
// g.printList();

// // Add edges
// g.addEdge("A", "B");
// g.addEdge("A", "C");
// g.addEdge("B", "C");

// console.log("\nAfter adding edges:");
// g.printList();

// // Test hasEdge
// console.log("\nCheck edges:");
// console.log("A-B:", g.hasEdge("A", "B")); // true
// console.log("A-C:", g.hasEdge("A", "C")); // true
// console.log("B-D:", g.hasEdge("B", "D")); // false

// // Remove edge
// g.removeEdge("A", "B");
// console.log("\nAfter removing edge A-B:");
// g.printList();
// console.log("A-B:", g.hasEdge("A", "B")); // false

// // Remove vertex
// g.removeVertex("C");
// console.log("\nAfter removing vertex C:");
// g.printList();

// HASH TABLE
// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//     this.count = 0;
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.size;
//   }

//   set(key, value) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (!bucket) {
//       this.table[index] = [[key, value]];
//     } else {
//       const existing = bucket.find((item) => item[0] == key);
//       if (existing) {
//         existing[1] = value;
//       } else {
//         bucket.push([key, value]);
//       }
//     }
//     this.count++;
//     if (this.count / this.size > 0.7) {
//       this.resize();
//     }
//   }

//   get(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (bucket) {
//       const existing = bucket.find((item) => item[0] === key);
//       if (existing) {
//         return existing[1];
//       }
//     }
//     return undefined;
//   }

//   remove(key) {
//     const index = this.hash(key);
//     const bucket = this.table[index];
//     if (bucket) {
//       const itemIndex = bucket.findIndex((item) => item[0] == key);
//       if (itemIndex !== -1) {
//         bucket.splice(itemIndex, 1);
//       }
//     }
//     this.count--;
//   }

//   display() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(`${i} -> ${this.table[i]}`);
//       }
//     }
//   }

//   resize() {
//     const oldTable = this.table;
//     const newSize = this.size * 2;
//     this.table = new Array(newSize);
//     this.size = newSize;
//     this.count = 0;
//     for (let bucket of oldTable) {
//       if (bucket) {
//         for (let [key, value] of bucket) {
//           this.set(key, value);
//         }
//       }
//     }
//   }

//   getSize() {
//     return this.size;
//   }
// }

// const ht = new HashTable(50);
// ht.set("astin", "Aston martin");
// ht.set("bntl", "Bently");
// ht.set("cadil", "Cadilac");
// ht.set("dg", "Dodge");
// ht.set("fr", "Ferrari");
// ht.set("er1", "Entevour");
// ht.set("er2", "Mercedes");
// ht.set("er3", "Mercedes S Class");
// ht.display();
// console.log("Size of table : ", ht.getSize());
// ht.resize();
// console.log("Size of table : ", ht.getSize());

// HEAPSORT
// function heapSort(arr) {
//   let n = arr.length;
//   const heapifyDown = (arr, n, i) => {
//     let largest = i;
//     let left = 2 * i + 1;
//     let right = 2 * i + 2;

//     if (left < n && arr[left] > arr[largest]) {
//       largest = left;
//     }

//     if (right < n && arr[right] > arr[largest]) {
//       largest = right;
//     }

//     if (largest !== i) {
//       [arr[i], arr[largest]] = [arr[largest], arr[i]];
//       heapifyDown(arr, n, largest);
//     }
//   };

//   const buildHeap = (arr) => {
//     for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
//       heapifyDown(arr, n, i);
//     }
//   };

//   buildHeap(arr);

//   for (let i = n - 1; i > 0; i--) {
//     [arr[0], arr[i]] = [arr[i], arr[0]];
//     heapifyDown(arr, i, 0);
//   }

//   return arr;
// }

// console.log(heapSort([10, 5, 3, 4, 2]));

// MAXHRAP
// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }

//   getParentIndex(childIndex) {
//     return Math.floor((childIndex - 1) / 2);
//   }
//   getLeftChildIndex(parentIndex) {
//     return 2 * parentIndex + 1;
//   }
//   getRightChildIndex(parentIndex) {
//     return 2 * parentIndex + 2;
//   }
//   hasParent(index) {
//     return this.getParentIndex(index) >= 0;
//   }
//   hasLeftChild(index) {
//     return this.getLeftChildIndex(index) < this.heap.length;
//   }
//   hasRightChild(index) {
//     return this.getRightChildIndex(index) < this.heap.length;
//   }
//   parent(index) {
//     return this.heap[this.getParentIndex(index)];
//   }
//   leftChild(index) {
//     return this.heap[this.getLeftChildIndex(index)];
//   }
//   rightChild(index) {
//     return this.heap[this.getRightChildIndex(index)];
//   }

//   swap(indexOne, indexTwo) {
//     const temp = this.heap[indexOne];
//     this.heap[indexOne] = this.heap[indexTwo];
//     this.heap[indexTwo] = temp;
//   }

//   peek() {
//     if (this.heap.length === 0) {
//       return null;
//     }
//     return this.heap[0];
//   }

//   add(item) {
//     this.heap.push(item);
//     this.heapifyUp();
//   }

//   heapifyUp() {
//     let index = this.heap.length - 1;
//     while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
//       this.swap(this.getParentIndex(index), index);
//       index = this.getParentIndex(index);
//     }
//   }

//   remove() {
//     if (this.heap.length === 0) {
//       return null;
//     }
//     const item = this.heap[0];
//     this.heap[0] = this.heap[this.heap.length - 1];
//     this.heap.pop();
//     this.heapifyDown();
//     return item;
//   }

//   heapifyDown() {
//     let index = 0;
//     while (this.hasLeftChild(index)) {
//       let largesrChildIndex = this.getLeftChildIndex(index);
//       if (
//         this.hasRightChild(index) &&
//         this.rightChild(index) > this.leftChild(index)
//       ) {
//         largesrChildIndex = this.getRightChildIndex(index);
//       }
//       if (this.heap[index] >= this.heap[largesrChildIndex]) {
//         break;
//       } else {
//         this.swap(index, largesrChildIndex);
//       }
//       index = largesrChildIndex;
//     }
//   }
// }

// var heap = new MaxHeap();

// heap.add(10);
// heap.add(15);
// heap.add(30);
// heap.add(40);
// heap.add(50);
// heap.add(100);
// heap.add(40);
// console.log(heap.heap);

// console.log(heap.peek());
// console.log(heap.remove());

// console.log(heap.heap);

// function one () {
//   var a = 10;
//   return function two () {
//     console.log("a : ",a);
//   }
// }

// const result = one();
// result();

{/* <input type="text" placeholder="Type here..." id="input" /> */}

{/* <script> */}
  function debounce(fn, delay) {
    let timeout;
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, args), delay);
    }
  }

  const input = document.getElementById("input");
  input.addEventListener("onChange", debounc(() => {
    console.log("User stopped typing");
  },1000))
// </script>