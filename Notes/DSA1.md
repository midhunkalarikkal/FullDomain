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
- Used to find a specific value or an element from a collection or dataset.  
- Examples: Linear Search, Binary Search, Interpolation Search  

3. Sorting Algorithms  
- Arrange data in a specific order (ascending or descending), often to prepare for searching or analysis.  
- Examples: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, Heap Sort  

4. Recursion  
- A technique where a function calls itself to solve sub-problems.  
- Examples: Factorial, Fibonacci, Tree Traversal, Tower of Hanoi  

5. Divide and Conquer  
- Break the main problem into smaller sub-problems, solve them independently, and combine results.  
- Examples: Merge Sort, Quick Sort, Binary Search, Closest Pair of Points  

6. Greedy Algorithm
- Always makes the locally optimal choice at each step, hoping that this will lead to the globally optimal solution.
- At every step of the algorithm, we make a choice that looks the best at the moment. To make the choice, we sometimes sort the array or use a priority queue, so that we can always get the next optimal choice quickly.
- After making a choice, we check for constraints (if there are any) and keep picking until we find the solution.
- Examples: Activity Selection, Fractional Knapsack, Kruskal’s MST, Prim’s MST, Huffman Coding  

7. Backtracking  
- Backtracking is a problem-solving algorithmic technique that involves finding a solution incrementally by trying different options and undoing them if they lead to a dead end. It is commonly used in situations where we need to explore multiple possibilities to solve a problem, like searching for a path in a maze or solving puzzles like Sudoku.
- Examples: N-Queens, Sudoku Solver, Rat in a Maze, Subset Sum, Permutations  

8. Dynamic Programming (DP)  
- Dynamic Programming (DP) is a method for solving complex problems by breaking them down into smaller overlapping subproblems,
- solving each subproblem only once, and storing the results (usually in a table or memory) to avoid redundant computations.
- Examples: Fibonacci (Memoization), 0/1 Knapsack, LCS, Edit Distance, Coin Change, Matrix Chain Multiplication  

9. Bit Manipulation  
- Operate on binary representations of numbers to optimize time and space.  
- Examples: Check power of 2, Count set bits, XOR operations, Find unique element, Swap without temp  

10. Graph Algorithms  
- Used for problems involving vertex and edges like relationships, paths, connectivity.  
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





## `Some IMP algorithms good to know` ##
=========================================
`Kruskal’s Algorithm` -	A Greedy algorithm used to find the Minimum Spanning Tree (MST) of a graph. It picks the smallest weight edge and connects components without forming cycles. Useful for network design.

`Prim’s Algorithm` - Greedy algorithm used to find the MST. It starts from any node and keeps adding the minimum edge connected to the tree.

`Dijkstra’s Algorithm` - A Greedy algorithm used to find the shortest path from a source node to all other nodes in a weighted graph (non-negative weights).

`Huffman Coding` - Huffman Coding is a greedy algorithm used to compress data by assigning shorter binary codes to more frequent characters and longer codes to less frequent characters, reducing the overall size of the data.

`Bellman-Ford Algorithm` - Similar to Dijkstra, but can handle negative weights. Slower but more versatile.

`Floyd-Warshall Algorithm` - A dynamic programming approach used to Find the shortest paths between all pairs of nodes in a graph.

`Knapsack Problem` - A Dynamic Programming approach. Given items with weights and values, maximize value without exceeding the bag capacity. Two types: 0/1 and fractional.





## `Searching` ##
==================
`Linear search`
-----------------
Iterates through each element in an array sequentially
linear search has a time complexity of O(n)
Linear search works efficiently on both sorted and unsorted array

`Binary search`
-----------------
Works only on sorted arrays (ascending or descending order).
Divide and conquer technique.
Repeatedly divides the search range in half.
Compares the middle element with the target:
    If equal → target found.
    If target is smaller → search left half.
    If target is larger → search right half.
Reduces the problem size logarithmically each time.
Time Complexity: O(log n)





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
Dynamic Programming (DP) is a method for solving complex problems by breaking them down into simpler overlapping subproblems. It is particularly useful for optimization problems where the solution can be recursively defined in terms of the solutions to smaller instances of the same problem.

`Memoize Approach`
--------------------
The Memoize Approach is a technique used in dynamic programming where intermediate results of subproblems are stored (usually in a table or dictionary) to avoid redundant calculations.

`Bottom-Up Approach`
---------------------
The Bottom-Up Approach in dynamic programming involves solving smaller subproblems first and using their solutions to build up the solution to the larger problem.





## `Memory Allocation` ##
==========================
Memory allocation is the process of reserving a portion of memory within a computer program for storing data and instructions.

`Bit` vs `Nibble` vs `Byte`
---------------------------
Bit :- The smallest unit of data in a computer, representing a binary value of 0 or 1.
Nibble :- a group of 4 bits
Byte :- A group of 8 bits, which together can represent 256 different values (from 0 to 255). Bytes are often used to encode a single character of text in a computer.

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





## `Stack` vs `Heap` Memory ##
==============================
`Stack Memory`
---------------
- Used for **static memory allocation** (like local variables and function calls).
- **Memory allocation and deallocation** is automatically managed by the system (LIFO order).
- **Faster access** compared to heap memory.
- **Limited in size** (can lead to stack overflow if overused).
- Stores:
  - **Primitive data types** 
  - **References (not objects)** of non-primitive types,
  - **Function call information** (like return addresses and parameters).

`Heap Memory`
--------------
- Heap memory is a region of a computer's memory where dynamic memory allocation takes place. It is used for the runtime allocation of memory needed for objects and data structures.
- Memory is managed explicitly by the programmer.
- Larger in size, Flexibility, Life time control, Global access, Non contiguous
- Accessing data in the heap memory is slower than in the stack because it involves pointers and dynamic allocation.
- If dynamically allocated memory isn’t properly freed or released, it stays reserved — leading to memory leaks.
- When memory is allocated and deallocated in small chunks, gaps (fragments) are created. This can reduce the usable continuous space, even if enough memory is free overall.
- **Reference data types** like arrays, objects, and functions (in JS) are stored in heap memory.





## `Memory Leaks` ##
=====================
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
- **Failure to Release Memory**
- **Dangling Pointers** :- Pointers that still reference a memory location after it has been freed.
- **Circular References** :- Objects referencing each other, preventing the memory manager from deallocating them even though they are no longer in use.

`Detecting Memory Leaks`
-------------------------
- Manual Code Review
- Automated Tools
- Profiling and Monitoring

`Preventing Memory Leaks`
--------------------------
- Good Programming Practices
- Smart Pointers in low level langyages
- Garbage Collection
- Regular Testing





## `Complexity Analysis` ##
============================
Complexity analysis is the study of how the performance of an algorithm or data structure operation scales with the size of the input. It primarily focuses on time complexity and space complexity.

`Time Complexity`
-------------------
Measures the amount of time an algorithm takes to complete a function of the input size 𝑛

`Space Complexity`
------------------
Measures the amount of memory an algorithm uses in relation to the input size 𝑛

`Complexity Measures`
-----------------------
O(1) - Constant time.
O(log n) -  Logarithmic time.
O(n) -  Linear time.
O(n log n): - Linearithmic time.
O(n^2) -  Quadratic time.
O(2^n) - Exponential time.
O(n!) - Factorial time.





## `Array` ##
=============
- An array is a collection of items stored at contiguous memory locations. Items are accessed using an index.
- In JavaScript, arrays are not strictly typed. This means they can hold different types of data (heterogeneous), such as numbers, strings, objects, etc., in the same array.

`Complexity analysis`
---------------------
`Access`
    Time complexity : - O(1), Accessing an element by index is direct
    Space complexity : - O(1), No extra space is used for access.
`Search`
    Time Complexity:
        Unsorted Array: O(n) – We have to check each element.
        Sorted Array (Binary Search): O(log n) (only if sorted and binary search is used)
    Space Complexity: O(1), Searching doesn't require additional space.
`Insertion`
    Time Complexity
        At End (e.g., push): O(1)
        At Beginning (e.g., unshift): O(n) – all elements need to shift.
        At Middle (e.g., splice): O(n) – depends on how many items are moved.
    Space Complexity
        if no resizing O(1)  
        if new array is created during insertion (like immutably) O(n) 
`Deletion`
    Time Complexity
        From End (e.g., pop): O(1)
        From Beginning (e.g., shift): O(n) – all elements shift.
        From Middle (e.g., splice): O(n)
    Space Complexity: O(1) (if no new array is made)
`Iteration`
    Time Complexity : - O(n), Each element is visited once.
    Space Complexity : - O(1) if no extra space is used.

`Applications`
---------------
Used for implementing lists, matrices, tables, etc.
Used for Image Pixels (2D Array)
Used for Browser History
Used for Implementing Other Data Structures like stack, queue, heap and hash
Used in dynamic programming for storing intermediate results

`Multi-Dimensional Array`
-------------------------
A multidimensional array is an array containing one or more arrays as its elements, where each inner array can also contain arrays, forming a structure with two or more dimensions.
Example: 
[
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]
Used for representing spatial data, tensors in machine learning, etc.

`Static Array`
--------------
Fixed size during its lifetime. Arrays in C/C++ with a predefined size. Efficient but less flexible.

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
A dense array is an array where most or all of the indices are occupied with valid elements.

`Homogeneous Array`
--------------------
Stores elements of the same data type.

`Heterogeneous Array`
---------------------
Stores elements of different data types (available in languages like Python or JavaScript).

`Associative Array`
--------------------
An associative array (also known as a map, dictionary, or object) is a data structure that stores key–value pairs, where:
- Each value is associated with a unique key.
- Keys can be strings (and in some languages, other types too).

`Circular Array`
-----------------
A circular array is a linear data structure that uses a single, fixed-size buffer as if it were connected end-to-end.
When the end of the array is reached, it wraps around to the beginning.

`Bit Array`
------------
A Bit Array is a compact array structure that stores bits (0s and 1s) instead of regular data types.
It is memory-efficient, especially useful when you only need to represent true/false or on/off states.





## `Linked List` ##
====================
- A linked list is a linear data structure where elements, called nodes, are connected using pointers. Each node contains two components:
- Data: The actual value stored in the node.
- Pointer (or Link): A reference to the next node in the sequence.
- Unlike arrays, linked lists do not store elements in contiguous memory locations. They are dynamic in size, allowing efficient insertion and deletion of elements.
- No resizing needed like arrays.
- Useful when frequent insertions/deletions are needed.

`Complexity Analysis`
---------------------
`Access`
  Time Complexity   : O(n) – Need to traverse to the index
  Space Complexity  : O(1) – No extra space for access

`Search`
  Time Complexity   : O(n) – Linear search through nodes
  Space Complexity  : O(1)

`Insertion`
  Time Complexity
    At Beginning    : O(1) – Direct pointer update
    At End (with tail pointer): O(1)
    At End (without tail): O(n) – Traverse to last node
    At Middle       : O(n) – Traverse to position
  Space Complexity  : O(1) – No extra space is used

`Deletion`
  Time Complexity
    From Beginning  : O(1)
    From End        : O(n) – Need to find previous node
    From Middle     : O(n) – Traverse to node
  Space Complexity  : O(1)

`Iteration / Traversal`
  Time Complexity   : O(n)
  Space Complexity  : O(1)

`Application`
--------------
Used for implementing stacks and queues
Used for Browser history
Used for slide show navigations
Used for polynomial arithmetic
Used for HashMap Collision Handling
    In hash tables, linked lists are used to handle collisions via separate chaining.

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
    A pointer to the previous node.
    Data.
    A pointer to the next node.
- Traversal is bidirectional (both forward and backward).

`Circular Linked List`
-----------------------
The last node points back to the first node, forming a circle.
Can be:
    Singly Circular Linked List: The last node's next pointer points to the first node. Example: [Data1] -> [Data2] -> [Data3] -> [Data1]
    Doubly Circular Linked List: The last node's next pointer points to the first node, and the first node's previous pointer points to the last node. Example: [Data1] <-> [Data2] <-> [Data3] <-> [Data1]

`Header Linked List`
---------------------
A special node (header node) is added at the beginning of the llinked ist, often storing metadata (like size or type). This node does not store user data.

`Multi-Linked List`
---------------------
Each node can have multiple pointers. Used in advanced data structures like graphs, adjacency lists, and trees.

`Advantages of Linked List over an Array`
-------------------------------------------
Dynamic Size
Efficient Insertions/Deletions
Efficient Memory Allocation through non Contiguous Memory Allocation
Flexibility in Data Structures Implementation (e.g., stacks, queues)

`Disadvantages of Linked Lists`
---------------------------------
Increased Memory Usage
No Random Access
Complexity in Implementation
Inefficient Search Operations
Extra Overhead for Pointers
Difficulties with Reverse Traversal (in singly linked lists)





## `Asymptotic Notations` ##
=============================
Asymptotic notations are mathematical tools used to analyze the performance of an algorithms, particularly their time complexity and space complexity.

`Omega Notation (Ω)`
--------------------
Omega (Ω) gives the best-case time complexity of an algorithm.

`Theta Notation (Θ)`
----------------------
Theta (Θ) gives the average-case time complexity (or sometimes "tight bound" – when best and worst cases are same).





## `Virtual Memory` ##
=======================
Virtual memory is a memory management technique used by computer operating systems to provide an "idealized abstraction of the storage resources that are actually available on a given machine." It creates an illusion for users of a very large (main) memory.

`How it Works`
--------------
Logical Addressing: Virtual memory makes applications think they have more memory than what is physically available by creating a virtual layer between RAM and the memory they use.

Paging: The system breaks RAM and virtual memory into small blocks called pages. If RAM is full, less-used data is moved to pages.

Swapping: When a program needs data that was moved to page storage, the system brings it back to RAM and swaps out other data if needed. This keeps the illusion of having more memory.

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
Amortized analysis is a way to measure the average time for a sequence of operations in a data structure.





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
No Duplicates Allowed: Cannot contain duplicate elements.
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
-----
Key-Value Pairs: Stores data in key-value pairs.
Any Data Type for Keys: Keys can be of any data type (including objects and functions).
No Prototype Chain: Does not inherit property from any prototype.
Efficient for Large Data Sets: Designed to handle a large number of key-value pairs efficiently.
Common Methods: set, get, has, delete, clear, forEach.





## `ASCII` ##
=============
American Standard Code for Information Interchange. A character encoding standard for electronic communication, representing text in computers.

32 - Space: The space character.

48-57 - Digits (0-9): Represents numeric digits.
Example: 48 is '0', 49 is '1', ..., 57 is '9'.

65-90 - Uppercase Letters (A-Z): Represents uppercase letters.
Example: 65 is 'A', 66 is 'B', ..., 90 is 'Z'.

97-122 - Lowercase Letters (a-z): Represents lowercase letters.
Example: 97 is 'a', 98 is 'b', ..., 122 is 'z'.





## `UNICODE` ##
================
A universal character encoding standard that assigns a unique code to every character in every language.

UTF-8:
Uses 1 to 4 bytes to represent each character.
Compatible with ASCII (first 128 characters are same as ASCII).
Efficient for texts with mostly English characters.
Widely used on the web, APIs, and databases.

UTF-16:
Uses 2 or 4 bytes to represent each character.
Better for representing non-English characters like Asian scripts or emojis.
Commonly used in systems like Windows, Java, and .NET.





## `How strings are stored in memory` ##
=========================================
`In javascript`
----------------
JavaScript stores strings as sequences of UTF-16 code units.
Each character in the string is represented by one or two 16-bit values.

`In low level languages`
------------------------
Strings are stored as arrays of characters ending with a null character


