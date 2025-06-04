
## `Data Structure` ##
========================
Data structures are ways of organizing and storing data so that it can be accessed and modified efficiently.

`Types of Data Structures`
----------------------------
Primitive Data Structures:
Number , String , boolean , undefined , null , symbol , bigint

Non-Primitive Data Structures: 
Linear Datastructures : Array ,  Linked list , Stack , Queue
Heirarchical or Tree based Datastructure : Binary tree , Binary search tree ,  Heap , AVL tree , Red black tree
Hashing Datastructures : Hash table , Map , Weak map
Graph based Datastructures : Graph
Other : Set , Weakset , Priority queue

`Common Data Structures`
---------------------------
Arrays: A collection of elements identified by index or key.

Linked Lists: A sequence of elements, where each element points to the next.

Stacks: LIFO (Last In, First Out) structure where elements are added and removed from the top.

Queues: FIFO (First In, First Out) structure where elements are added at the back and removed from the front.

Trees: Hierarchical data structure with a root element and child elements forming a tree-like pattern.

Graphs: A set of vertexes connected by edges.

Hash Tables: Key-value pairs for efficient data retrieval.

`Operations on Data Structures`
--------------------------------
Insertion: Adding a new element.
Deletion: Removing an element.
Traversal: Accessing each element exactly once.
Searching: Finding the location of an element.
Sorting: Arranging elements in a specific order.

`Importance of Data Structures`
---------------------------------
Efficiency: Optimizes the use of memory and processing time.
Reusability: Helps in building reusable components.
Scalability: Manages large volumes of data effectively.
Abstraction: Simplifies complex data relationships and operations.

`Advantages`
-------------
Efficient Data Management
Efficient Memory Management
Improved Code Organization
Optimized Performance
Scalability

`Disadvantages`
----------------
Complexity
Development Time
Memory Overhead
Performance Trade-offs
Rigid Structure





## `Algorithms` ##
====================
Algorithms are step-by-step procedures or formulas for solving a problem or performing a task.

`Characteristics of Algorithms`
---------------------------------
- Well-Defined steps.
- Zero or more inputs are provided.
- Produces at least one output.
- Terminates after a finite number of steps.
- Steps are simple enough to be executed with available resources.

`Importance of Algorithms`
----------------------------
- Efficiency: Optimizes performance and resource usage.
- Problem-Solving: Provides methods to tackle complex problems.
- Predictability: Helps in estimating the performance of solutions.
- Optimization: Improves existing solutions by refining steps and operations.





## `Types of Algorithms` ##
===========================
1. Brute Force Algorithms  
- Brute Force is a straightforward problem-solving approach that tries all possible solutions to find the correct one, without using any optimization or shortcuts. Simple to implement but often inefficient (especially for large inputs).
- Examples: Linear Search, Trial Division (Prime check), Generate all subsets  

2. Searching Algorithms  
- Used to find a specific value or element from a collection or dataset.  
- Examples: Linear Search, Binary Search, Interpolation Search  

3. Sorting Algorithms  
- Arrange data in a specific order (ascending or descending), often to prepare for searching or analysis.  
- Examples: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort  

4. Recursion  
- A technique where a function calls itself to solve sub-problems.  
- Examples: Factorial, Fibonacci, Tree Traversal, Tower of Hanoi  

5. Divide and Conquer  
- Break the problem into smaller sub-problems, solve them independently, and combine results.  
- Examples: Merge Sort, Quick Sort, Binary Search, Closest Pair of Points  

6. Greedy Algorithms  
- A class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum solution.
- At every step of the algorithm, we make a choice that looks the best at the moment. To make the choice, we sometimes sort the array so that we can always get the next optimal choice quickly. We sometimes also use a priority queue to get the next optimal item.
- After making a choice, we check for constraints (if there are any) and keep picking until we find the solution.
- Examples: Activity Selection, Fractional Knapsack, Kruskal’s MST, Prim’s MST, Huffman Coding  

7. Backtracking  
- Builds the solution step-by-step and abandons a path (backtracks) when it doesn’t satisfy constraints.  
- Examples: N-Queens, Sudoku Solver, Rat in a Maze, Subset Sum, Permutations  

8. Dynamic Programming (DP)  
- Solve complex problems by breaking them into overlapping sub-problems and storing solutions.  
- Examples: Fibonacci (Memoization), 0/1 Knapsack, LCS, Edit Distance, Coin Change, Matrix Chain Multiplication  

9. Bit Manipulation  
- Operate on binary representations of numbers to optimize time and space.  
- Examples: Check power of 2, Count set bits, XOR operations, Find unique element, Swap without temp  

10. Graph Algorithms  
- Used for problems involving nodes and edges — relationships, paths, connectivity.  
- Examples: BFS, DFS, Dijkstra’s Algorithm, Bellman-Ford, Topological Sort, Kruskal’s and Prim’s  

11. String Algorithms  
- Used for pattern matching, string manipulation, and compression.  
- Examples: KMP, Rabin-Karp, Z-Algorithm, Longest Palindromic Substring, Trie  

12. Randomized Algorithms  
- Use random input or choices during execution to achieve simplicity or better performance.  
- Examples: Randomized Quick Sort, Monte Carlo Method, Reservoir Sampling, Miller-Rabin  

13. Hashing Algorithms  
- Convert data into a fixed-size hash to allow fast lookup, insert, and delete.  
- Examples: Hash Maps, Hash Tables, Collision Handling, Anagram Grouping  

14. Geometry Algorithms  
- Used in problems involving 2D/3D space, shapes, and coordinates.  
- Examples: Convex Hull, Closest Pair of Points, Line Intersection, Area of Polygon  

15. Machine Learning Algorithms  
- Used for predictions, classifications, and clustering based on data patterns.  
- Examples: Linear Regression, Decision Trees, K-Means Clustering, Naive Bayes, Neural Networks  





## `Searching` ##
==================
`Linear search`
-----------------
Iterates through each element in an array sequentially
linear search has a time complexity of O(n)
Linear search works efficiently on both sorted and unsorted array

`Binary search`
-----------------
Requires the array to be sorted. It repeatedly divides the search interval in half by comparing the middle element with the target value. Depending on the comparison, it eliminates half of the remaining elements from consideration.
Binary search operates with a time complexity of O(log n)





## `Recursion` ##
===================
Recursion is a programming technique in which a function calls itself directly or indirectly in order to solve a problem. Each recursive call works on a smaller instance of the same problem, and the solution to the problem is built up from these smaller instances.

`Recursion advantages`
-----------------------
Simplifies code
Solve complex problems
Reduced code length
Fit for divide and conquer algorithm
Inherent Stack Management : - The call stack in recursion automatically manages the state of each function call, reducing the need for explicit stack management in the code.

`Recursion disadvantages`
--------------------------
Performance Overhead :- Each recursive call adds a new frame to the call stack, which can lead to significant performance overhead, especially for deep recursion.

Stack Overflow :- Deep recursion can cause stack overflow errors if the recursion depth exceeds the stack size limit of the programming environment.

Memory Usage :- Recursive solutions often use more memory due to the additional stack frames for each function call, which can be problematic for memory-constrained environments.





## `Iterative` vs `Recursion` ##
================================
`Definition`
--------------
Iterative :- Utilizes loops (for, while) to repeat a set of instructions until a certain condition is met.
Recursive :- A function calls itself directly or indirectly to solve a problem, with a base case to stop the recursion.

`Structure`
-------------
Iterative :-
Uses looping constructs.
Typically involves a single function that contains the loop.

Recursive :-
A function that calls itself.
Requires a base case to terminate the recursive calls and prevent infinite loops.

`Performance`
--------------
Iterative :-
Generally more efficient in terms of time and space complexity.
Uses constant space for loop control variables.

Recursive :-
Can lead to high memory usage due to multiple stack frames if not optimized (e.g., via memoization).
Risk of stack overflow for deep recursion if the recursion depth exceeds the call stack limit.

`Use of Stack`
---------------
Iterative :-
Utilizes the program’s main stack frame and does not add extra stack frames.
Explicit stack data structures can be used if needed.

Recursive :-
Each recursive call adds a new frame to the call stack.
Inherent stack management for maintaining state across function calls.





## `Dynamic Programming` ##
==============================
Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler subproblems. It is particularly useful for optimization problems where the solution can be recursively defined in terms of the solutions to smaller instances of the same problem.

`Memoize Approach`
--------------------
The Memoize Approach is a technique used in dynamic programming where intermediate results of subproblems are stored (usually in a table or dictionary) to avoid redundant calculations. When a function is called, it first checks if the result is already computed and stored. If so, it returns the stored result; otherwise, it computes the result, stores it, and then returns it.

`Bottom-Up Approach`
---------------------
The Bottom-Up Approach in dynamic programming involves solving smaller subproblems first and using their solutions to build up the solution to the larger problem. This approach typically involves filling out a table in a systematic way, starting with the simplest cases and progressing to more complex cases, ensuring that all subproblem solutions are available when needed for solving the larger problem.





## `Memory Allocation` ##
============================
Memory allocation is the process of reserving a portion of memory within a computer program for storing data and instructions.

`Bit` vs `Byte`
---------------
Bit :-
 The smallest unit of data in a computer, representing a binary value of 0 or 1.
Byte :-
 A group of 8 bits, which together can represent 256 different values (from 0 to 255). Bytes are often used to encode a single character of text in a computer.

`Memory Address`
-----------------
A memory address is a unique identifier used to locate a specific byte or a block of bytes in the computer's memory. It allows the processor to access data stored in memory during program execution.

`Contiguous Memory Allocation`
-------------------------------
Contiguous memory allocation refers to the storage of data in consecutive memory locations. This approach ensures that all parts of the data are stored next to each other, which can improve access speed and simplify memory management but may lead to fragmentation.

`Non-Contiguous Memory Allocation`
-----------------------------------
Non-contiguous memory allocation allows data to be stored in separate, non-adjacent memory locations. This method helps to utilize memory more efficiently and can reduce fragmentation, but it often requires more complex memory management and can slow down data access.





## `Types of Memory Allocation` ##
===================================
`Static Memory Allocation`
----------------------------
Memory is allocated at compile time.
Fixed size, cannot be changed during execution.
Typically used for global and static variables.

`Dynamic Memory Allocation`
----------------------------
Memory is allocated at runtime.
Provides flexibility to allocate and deallocate memory as needed.





## `Heap` vs `Stack Memory` ##
==============================
`Heap Memory`
--------------
Heap memory is a region of a computer's memory where dynamic memory allocation takes place. It is used for the runtime allocation of memory needed for objects and data structures.

Memory is managed explicitly by the programmer.
Larger in size, Flexibility, Life time control, Global access, Non contiguous
slower access compared to stack memory, Memory Leak, Fragmentation
Refernce types are stored in heap eg : array , function , object

`Stack Memory`
---------------
Used for static memory allocation.
Automatically managed by the system.
Limited in size, but faster access compared to heap memory.
primitive types are stored in stack





## `Memory Leaks` ##
=======================
A memory leak occurs when a computer program incorrectly manages memory allocations, causing memory that is no longer needed to not be released. Over time, this can lead to decreased performance.

`Symptoms`
-----------
Increased Memory Usage
Reduced Performance
Frequent Garbage Collection (in managed languages)
System Instability
Application Crashes

`Causes of Memory Leaks`
-------------------------
Failure to Release Memory

Dangling Pointers :-
 Pointers that still reference a memory location after it has been freed.

Circular References :-
 Objects referencing each other, preventing the memory manager from deallocating them even though they are no longer in use.

`Detecting Memory Leaks`
-------------------------
Manual Code Review: Carefully reviewing the code to ensure all allocated memory is properly freed.

Automated Tools: Using tools designed to detect memory leaks, such as Valgrind, Purify, or built-in debugging features in development environments.

Profiling and Monitoring: Monitoring memory usage patterns to detect unusual increases in memory usage over time.

`Preventing Memory Leaks`
--------------------------
Good Programming Practices: Ensuring every malloc or calloc call is paired with a free call.

Smart Pointers: Using smart pointers in languages like C++ (e.g., std::shared_ptr, std::unique_ptr) to automate memory management.

Garbage Collection: Using languages with automatic garbage collection (e.g., Java, Python) which handle memory deallocation automatically.

Regular Testing: Regularly running tests to check for memory leaks during development.





## `Complexity Analysis` ##
============================
Complexity analysis is the study of how the performance of an algorithm or data structure operation scales with the size of the input. It primarily focuses on time complexity and space complexity.

`Time Complexity`
-------------------
Measures the amount of time an algorithm takes to complete as a function of the input size 𝑛

O(1) - Constant time.
O(log n) -  Logarithmic time.
O(n) -  Linear time.
O(n log n): - Linearithmic time.
O(n^2) -  Quadratic time.
O(2^n) - Exponential time.
O(n!) - Factorial time.

`Space Complexity`
------------------
Measures the amount of memory an algorithm uses in relation to the input size 𝑛

O(1) -  Constant space.
O(log n) -  Logarithmic space.
O(n) -  Linear space.
O(n log n) -  Linearithmic space.
O(n^2) -  Quadratic space.
O(2^n) -  Exponential space.
O(n!) -  Factorial space.

1. `Arrays`
-----------
Access -  O(1)
Search -  O(n)
Insertion -  O(n) (shifting elements)
Deletion - O(n) (shifting elements)

2. `Linked Lists`
------------------
Singly Linked List / Doubly Linked List
----------------------------------------
Access -  O(n) -> Accessing an element requires traversal from the head (or tail), making it linear in complexity.
Search -  O(n) -> Searching for a specific value requires traversal, as there is no direct indexing.
Insertion -  O(1) (if inserting at the head) otherwise o(n)
Deletion -  O(1) (if deleting at the head) otherwise o(n)

3. `Stacks`
------------
Access -  O(n)
Search -  O(n)
Insertion -  O(1) (push operation)
Deletion -  O(1) (pop operation)

4. `Queues`
-------------
Access -  O(n)
Search -  O(n)
Insertion -  O(1) (enqueue operation)
Deletion -  O(1) (dequeue operation)

5. `Hash Tables`
------------------
Access - O(1) (average case), O(n) (worst case, due to collisions)
Search -  O(1) (average case), O(n) (worst case)
Insertion -  O(1) (average case), O(n) (worst case)
Deletion -  O(1) (average case), O(n) (worst case)

6. `Trees`
-----------
Binary Search Tree (BST)
---------------------------
Access -  O(log n) (average case), O(n) (worst case)
Search -  O(log n) (average case), O(n) (worst case)
Insertion -  O(log n) (average case), O(n) (worst case)
Deletion -  O(log n) (average case), O(n) (worst case)

Balanced Trees (e.g., AVL, Red-Black Tree)
---------------------------------------------
Access -  O(log n)
Search -  O(log n)
Insertion -  O(log n)
Deletion -  O(log n)

7. `Heaps`
------------
Binary Heap
--------------
Access -  O(n)
Search - O(n)
Insertion -  O(log n)
Deletion -  O(log n) (delete min/max)

8. `Graphs`
------------
Adjacency Matrix
----------------
Access: O(1)
Search: O(v) (Check all the vertices)
Insertion: O(1)
Deletion: O(1)

Adjacency List
--------------
Access -  O(V)
Search -  O(V + E) (checking all vertices and edges)
Insertion -  O(1) (adding an edge)
Deletion -  O(E) (removing an edge)





## `Array` ##
=============
An array is a collection of items stored at contiguous memory locations. The items can be of the same data type, and they are accessed using an index.
In JavaScript, arrays are inherently heterogeneous, meaning we can store different types of data

`Multi-Dimensional Array`
-------------------------
Contains more than two dimensions.
Example (3D): [[[1,2],[3,4]], [[5,6],[7,8]]]
Used for representing spatial data, tensors in machine learning, etc.

`Static Array`
--------------
Fixed size during its lifetime.
Example: Arrays in C/C++ with a predefined size.
Efficient but less flexible.

`Dynamic Array`
-----------------
 A dynamic array automatically resizes itself when it reaches its capacity. It typically starts with a small fixed size, and as elements are added, it allocates a new, larger array (usually double the current size) and copies the existing elements to this new array.

`Sparse array`
----------------
A sparse array in JavaScript is an array where not all indices have assigned values. It contains "holes" where some indices are skipped or undefined. Sparse arrays are created by intentionally leaving some indices empty.
```js
const sparseArray = [1, , 3, , 5];
```

`Jagged Array`
---------------
An array of arrays where each sub-array can have different lengths.

`Dense array`
----------------
A dense array stores all its values, including zeros, in a contiguous block of memory without explicitly storing indices for each element.

`Homogeneous Array`
--------------------
Stores elements of the same data type.
Example: [1, 2, 3, 4] (all integers).

`Heterogeneous Array`
---------------------
Stores elements of different data types (available in languages like Python or JavaScript).
Example: [1, "apple", true] (int, string, boolean).

`Associative Array`
--------------------
Stores key-value pairs instead of index-based values.
Example: Objects in JavaScript, Python dictionaries.

`Circular Array`
-----------------
An array treated as if it wraps around when the end is reached.
Example: Used in circular queues.

`Bit Array`
------------
Stores bits (0 or 1) compactly.
Example: Used in memory-efficient data structures.





## `Linked List` ##
====================
A linked list is a linear data structure where elements, called nodes, are connected using pointers. Each node contains two components:

Data: The actual value stored in the node.
Pointer (or Link): A reference to the next node in the sequence.
Unlike arrays, linked lists do not store elements in contiguous memory locations. They are dynamic in size, allowing efficient insertion and deletion of elements.

`Singly Linked List`
--------------------
- Each node contains
    Data.
    A pointer to the next node in the list.
    The last node points to null.

- Traversal is unidirectional (only forward).
- Example: [Data1] -> [Data2] -> [Data3] -> null

`Doubly Linked List`
----------------------
- Each node contains
    Data.
    A pointer to the next node.
    A pointer to the previous node.
- Traversal is bidirectional (both forward and backward).
- Example: null <- [Data1] <-> [Data2] <-> [Data3] -> null

`Circular Linked List`
-----------------------
The last node points back to the first node, forming a circle.
Can be:
    Singly Circular Linked List: The last node's next pointer points to the first node. Example: [Data1] -> [Data2] -> [Data3] -> [Data1]
    Doubly Circular Linked List: The last node's next pointer points to the first node, and the first node's previous pointer points to the last node. Example: [Data1] <-> [Data2] <-> [Data3] <-> [Data1]

`Header Linked List`
---------------------
A special node (header node) is added at the beginning of the list, often storing metadata (like size or type).
This node does not store user data.

`Multi-Linked List`
---------------------
Each node can have multiple pointers.
Used in advanced data structures like graphs, adjacency lists, and trees.





## `Applications of different DS` ##
=======================================
`Array`
---------
Used for implementing lists, matrices, tables, etc.
Used in dynamic programming for memoization and tabulation.
Used in sorting algorithms (e.g., quicksort, mergesort).
Used in binary search due to random access capability.
Used in representing sparse arrays efficiently.

`Singly Linked List`
---------------------
Used in stacks and queues.
Used in undo functionality in applications (e.g., text editors).
Used for implementing hash tables to handle collisions.
Used in adjacency lists for representing graphs.
Used in memory management systems (e.g., malloc() and free() in C).

`Doubly Linked List`
---------------------
Used for implementing advanced data structures like dequeues.
Used in navigation systems (e.g., forward and backward buttons).
Used for implementing LRUs (Least Recently Used) in caching.
Used in undo/redo functionality with efficient traversal in both directions.
Used for implementing adjacency lists for bidirectional graphs.

`Stack`
---------
Used in function call stack (recursion).
Used in undo/redo functionality in applications.
Used in backtracking algorithms (e.g., N-Queens problem).
Used in expression evaluation (e.g., postfix notation).
Used in browser history functionality (forward/backward navigation).

`Queue`
---------
Used in scheduling algorithms (e.g., CPU scheduling).
Used in printer queues and job scheduling.
Used in messaging systems (e.g., message queues).
Used in implementing breadth-first search (BFS) in graphs.

`Hash Tables`
--------------
Used in implementing associative arrays and dictionaries.
Used in symbol tables in compilers and interpreters.
Used in implementing caches (e.g., web caches, memoization).
Used in database indexing and retrieval systems.
Used in implementing counting and frequency queries efficiently.

`Tree`
-------
Used in hierarchical data representation (e.g., file systems).
Used in organizing data for efficient searching and sorting.
Used in decision-making processes (e.g., decision trees).
Used in representing parse trees in compilers.
Used in representing organizational structures.

`Heap`
-------
Used in priority queues for efficient retrieval of the highest (or lowest) priority element.
Used in implementing heap sort for sorting elements efficiently.
Used in scheduling algorithms (e.g., job scheduling).
Used in graph algorithms like Dijkstra's algorithm for finding shortest paths.
Used in memory management systems (e.g., memory allocation).

`Graph`
--------
Used in social networks for representing connections between users.
Used in maps and navigation systems for representing routes between locations.
Used in recommendation systems for item-to-item relationships.
Used in network protocols for routing and connectivity.
Used in dependency management systems in software engineering.





## `Asymptotic Notations` ##
=============================
Asymptotic notations are mathematical tools used to analyze the performance of algorithms, particularly their time complexity and space complexity.

`Ranking`
----------
In the context of algorithm analysis, ranking refers to the classification of algorithms based on their performance, usually measured by their time and space complexities. It helps in comparing the efficiency of different algorithms.

`Omega Notation (Ω)`
--------------------
Omega notation describes the lower bound of an algorithm's time or space complexity. It represents the best-case scenario, giving the minimum amount of time or space an algorithm will require as the input size grows.

`Theta Notation (Θ)`
----------------------
Theta notation provides a tight bound on an algorithm's time or space complexity. It represents both the upper and lower bounds, giving an exact asymptotic behavior of the algorithm as the input size grows.





## `Virtual Memory` ##
=========================
`Definition`
-------------
Virtual memory is a memory management technique used by computer operating systems to provide an "idealized abstraction of the storage resources that are actually available on a given machine." It creates an illusion for users of a very large (main) memory.

`How it Works`
--------------
Logical Addressing: Virtual memory makes applications think they have more memory than what is physically available by creating a virtual layer between RAM and the memory they use.

Paging: The system breaks RAM and virtual memory into small blocks called pages. If RAM is full, less-used data is moved to storage (a page file on Windows or swap space on Linux).

Swapping: When a program needs data that was moved to storage, the system brings it back to RAM and swaps out other data if needed. This keeps the illusion of having more memory.

`Advantages`
-------------
Allows execution of large applications with limited physical memory.
Provides isolation and protection between processes.
Increases system stability and security by preventing applications from interfering with each other.

`Disadvantages`
-----------------
Can lead to performance issues if the system heavily relies on swapping (thrashing).
Requires complex hardware and software management.





## `Amortized Analysis` ##
=============================
`Definition`
--------------
Amortized analysis is a way to measure the average time for a sequence of operations in a data structure. It spreads the cost of expensive operations over several cheaper ones to show the overall efficiency.

`How it Works`
--------------
Instead of looking at each operation separately, it calculates the average time for a group of operations. This gives a better understanding of how an algorithm performs in the long run.





## `Linked list` ##
======================
`Advantages of Linked List over an Array`
-------------------------------------------
Dynamic Size
Efficient Insertions/Deletions
No Memory Wastage
Ease of Reordering
Efficient Memory Allocation
No Need for Contiguous Memory Allocation
Flexibility in Data Structures Implementation (e.g., stacks, queues)
Better Utilization of Storage

`Disadvantages of Linked Lists`
---------------------------------
Increased Memory Usage
No Random Access
Complexity in Implementation
Inefficient Search Operations
Extra Overhead for Pointers
Difficulties with Reverse Traversal (in singly linked lists)





## `Array` vs `Set` ##
======================
`Array`
-------
Ordered Collection: Maintains the order of elements.
Duplicates Allowed: Can contain duplicate elements.
Index-Based Access: Elements can be accessed by their index.
Fixed Size (sometimes): In some languages, arrays have a fixed size.
Common Methods: push, pop, shift, unshift, splice.

`Set`
------
Unordered Collection: Does not maintain the order of elements.
No Duplicates: Cannot contain duplicate elements.
No Index-Based Access: Elements cannot be accessed by index.
Dynamic Size: Grows as elements are added.
Common Methods: add, delete, has, clear.





## `Object` vs `Map` ##
=======================
`Object`
-------
Key-Value Pairs: Stores data in key-value pairs.
String Keys Only: Keys are always strings (or symbols in ES6+).
Prototype Chain: Inherits properties from its prototype chain.
Limited Size: Not designed for a large number of key-value pairs.
Common Methods: Object.keys, Object.values, Object.entries.

`Map`
---
Key-Value Pairs: Stores data in key-value pairs.
Any Data Type for Keys: Keys can be of any data type (including objects and functions).
No Prototype Chain: Does not inherit property from any prototype.
Efficient for Large Data Sets: Designed to handle a large number of key-value pairs efficiently.
Common Methods: set, get, has, delete, clear, forEach.





## `ASCII` ##
================
American Standard Code for Information Interchange. A character encoding standard for electronic communication, representing text in computers.

32 - Space: The space character.

48-57 - Digits (0-9): Represents numeric digits.
Example: 48 is '0', 49 is '1', ..., 57 is '9'.

65-90 - Uppercase Letters (A-Z): Represents uppercase letters.
Example: 65 is 'A', 66 is 'B', ..., 90 is 'Z'.

97-122 - Lowercase Letters (a-z): Represents lowercase letters.
Example: 97 is 'a', 98 is 'b', ..., 122 is 'z'.





## `UNICODE` ##
==================
A universal character encoding standard that assigns a unique code to every character in every language.
UTF-8   :-   A variable-width character encoding for Unicode. It can encode every character in the Unicode character set using one to four bytes.





## `How strings are stored in memory` ##
============================================
`In javascript two types`
--------------------------
primitive and object string

`Primitive`
-----------
let str = "Hello"
stored as a sequence of UTF-16 code units

`String object`
---------------
let strObj = new String("Hello");

`In low level languages`
------------------------
Strings are stored as arrays of characters ending with a null character


