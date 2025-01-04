## `Stack` ##
===============
A stack is a linear data structure that follows the LIFO principle (Last In, First Out). The last element added to the stack is the first one to be removed. Operations in a stack occur only at one end, called the top.

`Operations`
--------------
Push: Add an element to the top of the stack.
Pop: Remove the top element from the stack.
Peek/Top: View the top element without removing it.

`Types of Stacks`
-----------------
`Static Stack`
---------------
Implemented using arrays.
Has a fixed size.
Limited by predefined memory.

`Dynamic Stack`
-----------------
Implemented using linked lists.
Can grow or shrink dynamically as needed.

`Applications-Based Stacks`
-----------------------------
Call Stack: Used in recursion and function calls.
Expression Evaluation Stack: Used for evaluating postfix expressions.
Undo/Redo Stack: Used in text editors or software with undo/redo functionality.





## `Queues` ##
================
A queue is a linear data structure that follows the FIFO principle (First In, First Out). The first element added to the queue is the first one to be removed. Operations in a queue occur at two ends:

Enqueue: Add an element at the rear (end) of the queue.
dequeue: Delete an element from the front.

`Simple Queue`
----------------
Operates on the basic FIFO principle.
Insertions occur at the rear, and deletions occur at the front.

`Circular Queue`
----------------
The last position connects to the first, forming a circle.
Prevents memory wastage by reusing empty slots.

`Priority Queue`
-------------------
Each element is associated with a priority.
Higher priority elements are dequeued before lower-priority ones.

`Double-Ended Queue (Deque)`
------------------------------
Insertions and deletions can occur at both ends (front and rear).
Types:
Input-Restricted Deque: Insertions allowed only at one end.
Output-Restricted Deque: Deletions allowed only at one end.

`Concurrent Queue`
-------------------
Designed for multi-threaded environments.
Ensures thread safety for enqueue and dequeue operations.





## `Bubble sort` ##
====================
`Definition`
-------------
Bubble Sort is a simple comparison-based sorting algorithm also known as sinking sort. It works by repeatedly iterating through the array to be sorted, comparing each pair of adjacent elements, and swapping them if they are in the wrong order. This process is repeated for multiple passes through the array until the entire array is sorted.

`Advantages`
-------------
Simplicity: Easy to understand and implement.

No Extra Space: Requires only a single additional memory space for the temporary variable used for swapping (i.e., it is an in-place sorting algorithm).

Stable: Maintains the relative order of equal elements.

`Disadvantages`
----------------
Inefficiency: One of the least efficient sorting algorithms for large datasets. The number of comparisons and swaps can be significantly higher compared to other algorithms.

Performance: Poor performance on average and worst-case scenarios, making it impractical for most applications.

Redundant Comparisons: Even after the array becomes sorted, it continues to compare and swap elements.

`Complexity`
--------------
Best-case Time Complexity: 𝑂(𝑛) when the array is already sorted.

Average-case Time Complexity: 𝑂(𝑛^2)

Worst-case Time Complexity: 𝑂(𝑛^2)

Space Complexity: 𝑂(1) because it is an in-place sorting algorithm.

`Best Case Scenario`
--------------------
In the best case scenario, the array is already sorted. The time complexity for this case is O(n) because the algorithm will only need to pass through the array once to verify that it is sorted.

`Average Case Scenario`
-----------------------
In the average case, the array elements are in random order. The time complexity for this case is O(n^2) because, on average, bubble sort will have to perform multiple passes through the array.

`Worst Case Scenario`
---------------------
In the worst case scenario, the array is sorted in reverse order. The time complexity for this case is O(n^2) because bubble sort will need to perform the maximum number of comparisons and swaps.

`Applications of Bubble Sort`
--------------------------------
Educational Purposes
Small Data Sets
Simple Checks
Simple databse management
Stability Required Sorts




02 . Selection sort
====================

Definition
------------
Selection sort is a simple comparison-based sorting algorithm. It works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the array and swapping it with the first unsorted element, effectively growing the sorted portion of the array from left to right.

Advantages
-----------
Simple to Implement: Easy to understand and implement.
In-Place: Does not require additional storage space.
Useful for Small Data Sets: Performs well with small arrays.

Disadvantages
-------------
Inefficient for Large Data Sets: Time complexity of O(n²) makes it impractical for large datasets.
Not Adaptive: Does not take advantage of the existing order in the array.
Unstable: Does not preserve the relative order of equal elements.

Complexity
-----------
Time Complexity :-
Best Case: O(n²)
Average Case: O(n²)
Worst Case: O(n²)

Space Complexity :-  O(1) 

Bestcase , Averagecase and Worstcase scenario is same as bubble sort

Applications of Selection Sort
----------------------------
Embedded Systems Programming
Small Data Sets in Educational Tools
Basic Sorting Tasks in Simple Applications
Memory-Constrained Environments
Simulations and Prototyping

Insertion sort
==============

Definition
----------
Insertion sort is a simple and intuitive comparison-based sorting algorithm. It builds the final sorted array one element at a time by repeatedly taking the next unsorted element and inserting it into the correct position within the sorted portion of the array.

Steps
-----
1 . Start with the second element (since a single-element array is trivially sorted).
2 . Compare the current element with the elements in the sorted portion of the array.
3 . Shift elements in the sorted portion to the right to make space for the current element if needed.
4 . Insert the current element into the correct position.
5 . Repeat until all elements are sorted.

Advantages
----------
Simple to Implement: Easy to understand and implement.
Efficient for Small Data Sets: Performs well with small arrays.
Stable: Preserves the relative order of equal elements.
Adaptive: Efficient for nearly sorted arrays, with a time complexity approaching O(n).

Disadvantages
-------------
Inefficient for Large Data Sets: Time complexity of O(n²) makes it impractical for large datasets.
Quadratic Time Complexity: On average and in the worst case, it requires quadratic time to sort the array.

Complexity
----------
Time Complexity :-
	Best Case: O(n) when the array is already sorted.
	Average Case: O(n²)
	Worst Case: O(n²) when the array is sorted in reverse order.

Space Complexity :- 
	 O(1) as it is an in-place sorting algorithm.

Applications of Insertion sort
==============================
Small arrays in libraries
Online sorting
Database indexing
GUI Application
Adaptive algorithms

04 . Quick Sort
===============

Definition
-----------
Quick sort is an efficient, comparison-based, divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

Complexity
----------
Time Complexity :-
Best Case :-  O(n log n)
Average Case :-  O(n log n)
Worst Case :-  O(n²)
Space Complexity :-  O(log n) (due to the recursion stack)

Best Case Scenario
-----------------
In the best case, the pivot divides the array into two equal halves at each step, leading to a balanced tree of partitions. The time complexity for this case is O(n log n).

Average Case Scenario
--------------------
In the average case, the pivot generally divides the array into reasonably balanced partitions. The time complexity for this case is O(n log n).

Worst Case Scenario
------------------
The worst-case time complexity is O(n^2). This occurs when the pivot choice results in highly unbalanced partitions. For example, if the array is already sorted or nearly sorted, and the last element is always chosen as the pivot, the array is divided into one large subarray and one empty subarray, leading to O(n^2) complexity.

the worst-case scenario for quick sort arises when the pivot is consistently chosen poorly, such as always selecting the smallest or largest element in the array. In this situation, Quick Sort may require O(n^2) comparisons and swaps to complete the sorting process, which could be more efficient. For example, this worst-case scenario can occur when sorting an already sorted array or an array with many duplicate elements.

Advantages
----------
Efficient: Average time complexity is O(n log n), making it one of the fastest sorting algorithms.
In-Place Sorting: Requires minimal additional memory (O(log n) due to recursion).
Parallelizable: Can be easily parallelized as different parts of the array can be sorted independently.

Disadvantages
-------------
Worst-Case Complexity: Can degrade to O(n²) if the pivot selection is poor.
Recursive: Recursive calls can lead to a stack overflow if the recursion depth is too large.
unstable: Does not preserve the relative order of equal elements.

Applictions of quick sort
=========================
General purpose sorting
Indexing large dataset
Sorting data for dynamic web content
File systems
Database query processing

05 . Merge Sort
===============

Definition
----------
Merge sort is an efficient, stable, comparison-based, divide-and-conquer sorting algorithm. It works by dividing the array into smaller sub-arrays, sorting those sub-arrays, and then merging them back together to form a sorted array.

Complexity
----------
Time Complexity :-
Best Case :-  O(n log n)
Average Case :-  O(n log n)
Worst Case :-  O(n log n)
Space Complexity :-  O(n) (requires additional space proportional to the size of the array)

Advantages
----------
Consistent Performance: Guarantees O(n log n) time complexity.
Stable: Preserves the relative order of equal elements.
Parallelizable: Can be easily parallelized since each half can be processed independently.

Disadvantages
-------------
Space Complexity: Requires additional space proportional to the size of the array.
Not In-Place: Uses extra memory for the temporary arrays.

Applications of Merge sort
==========================
Large dataset
Used for sorting that doesnt fit for memory
When stable sorting need
Parallel computing
Complex datastructures

07 . In place sorting algorithm
================================
An in-place sorting algorithm is one that sorts the elements of an array using a constant amount of extra space.

Benifits
--------
Space efficiency
Performance

Non in plce sorting algorithm example :- merge sort

08 . Tabulation
===============
Tabulation is a bottom-up dynamic programming technique where you solve subproblems first and use their solutions to build up solutions to larger problems. It uses an iterative approach and typically involves filling up a table (often an array or matrix) with the solutions to subproblems, starting from the smallest subproblems and working up to the original problem.

09 . Sliding window
===================
The sliding window technique is used to efficiently solve problems involving subarrays or substrings by maintaining a window (a contiguous range of elements) that slides over the array or string. This method reduces the number of computations by reusing results from previous windows and adjusting the window's boundaries as needed.

10 . Memoization
================
Memoization is a technique used to improve the performance of recursive algorithms by storing the results of subproblems in a data structure (like a hash map or array) so that they can be reused when the same subproblem occurs again. Its a top down approach

11 . Rehashing
===============
rehashing is a technique used in the management of hash tables. A hash table is a data structure that maps keys to values using a hash function. When the hash table becomes too full or the performance of hash operations degrades, rehashing is performed to improve efficiency. 

 During rehashing, the hash table is resized (usually increased in size), and all existing keys are reinserted into the new hash table using a new hash function or a recalculation of the hash values.

12 . (A) Open addressing
====================
Quadratic probing
------------------
Quadratic probing is a collision resolution technique used in hash tables to handle situations where two or more keys hash to the same index in the table. The algorithm uses a quafratic function to calculate next slot to check

Linear probing
--------------
If a collision occure the algorithm checks the next slot in a sequencial manner unitl an empty slot is found

Double hashing
--------------
Double hashing involves using a secondary hash function to calculate the step size for probing

12 . (B) Separate chaining
===========================
Uses linked lists attached to each slot to keep a list of all elements that hash to the same value.

13 . Load factor
===============
In the context of hash tables, the load factor is a metric that indicates the ratio of the number of elements stored in the hash table to the total number of slots available.

Load Factor(α)= n / m
​
Where:
n = Number of elements (keys) currently in the hash table.
m = Number of slots (buckets) in the hash table.

When the load factor exceeds the chosen threshold, the hash table is resized. This usually involves:

Doubling the Size: The size of the hash table is typically doubled (or increased by another factor).
Rehashing: All existing elements are rehashed and inserted into the new, larger table.

14 . Hash table
===============
Hash tables are a lower-level data structure that directly handles the storage and retrieval of key-value pairs using a hash function.

The hash function maps keys to indices in an array where the values are stored.

Unlike JavaScript objects, hash tables do not have built-in methods or properties. 

Javascript  object is a special implementation of hash table datastructure. However object class adds its own keys. keys that you input  may conflict and  overwrite the inherited default properties

Hash tables are designed to have constant time complexity for insertion, deletion, and lookup operations

How do we go form using a string as an index to number as an index ?
A hashing function accepts the string key. Convert it to a hash code using a defined logic and then maps it into a numeric index that is within in the bounds of the array

How hashtable achieving constant time complexity ?
A hash table achieves average-case constant time complexity 𝑂(1) for insertion, deletion, and lookup operations by using a hash function to distribute keys uniformly across an array

How Hash Tables Work?
Hash Function
------------------
A hash function takes an input (key) and returns an index in an array where the corresponding value should be stored.
A good hash function distributes keys uniformly across the array to minimize collisions.

Indexing
-----------
The output of the hash function is used as an index to insert, find, or delete an element in the array.

Handling Collisions
-------------------------
Collisions occur when the hash function maps multiple keys to the same index. 

There are several methods to handle collisions:
-------------------------------------------------------
Chaining: Each array index points to a linked list of entries that hash to the same index.

Open Addressing: All elements are stored within the array itself, and upon a collision, the algorithm searches for the next available slot.


Time Complexity
--------------
Best Case
---------
  Insertion :- O(1)
  Deletion :-  O(1)
  Lookup :- O(1)

Average Case
------------
  Insertion :- O(1)
  Deletion :- O(1)
  Lookup :- O(1)

Worst Case
----------
 Insertion :- O(n)
  Deletion :- O(n)
  Lookup :- O(n)

Space Complexity
----------------
Space Complexity :-  O(n)

15 . Applications
=================

Applications of Stack
--------------------
Expression Evaluation
Syntax Parsing
Undo Mechanisms
Call Stack Management
Depth-First Search (DFS)

Applications of Queue
--------------------
Printer Spooling
Task Scheduling
Breadth-First Search (BFS)
Multi-Threading and Resource Management

Applications of Hash Table
------------------------
Database Indexing
Caches
Symbol Tables in Compilers
Associative Arrays
Fast Data Retrieval Systems

Stability
=========
Stability in a sorting algorithm means that if two elements have the same value, their relative order will remain the same before and after sorting. In other words, equal elements keep their original order relative to each other in the sorted output.

Stable Sorts 
-----------
Bubble Sort
Insertion Sort
Merge Sort

Unstable Sorts
--------------
Selection Sort
Quick Sort

Stack
======
Underflow happens when we try to pop an item from an empty stack. Overflow happens when we try to push more items on a stack than it can hold.

Better sort
===========
Array
-----
1 . QuickSort
Generally the fastest sorting algorithm for large datasets due to its average-case time complexity of O(nlogn) and good cache performance.

2 . Merge sort
Stable sort with a guaranteed O(nlogn) time complexity in all cases (best, average, and worst).

Linked list
-----------
1 . Merge sort
Mergesort is particularly well-suited for linked lists. It can be implemented with O(1) extra space and maintains the O(nlogn) time complexity. The splitting and merging operations are more efficient with linked lists compared to arrays because they can be done in place without additional memory.

2 . Insertion sort
Simple to implement and works well with small datasets or nearly sorted lists. Its best-case time complexity is O(n).

Large Array: Quicksort or Mergesort.
Small Array: Insertion Sort or Selection Sort.
Almost Sorted Array: Insertion Sort.
Least Sorted Array: Quicksort or Mergesort.
Small Linked List: Insertion Sort.
Large Linked List: Mergesort.
Almost Sorted Linked List: Insertion Sort.
Least Sorted Linked List: Mergesort.
Doubly Linked List: Similar to singly linked lists; use Insertion Sort for small/almost sorted data and Mergesort for large/least sorted data.

Large data set
==============
Array
------
quick sort - o(n log n) in place algorithm

If stability required we can choose merge sort also with complexity o(n log n)

Linked list 
-----------
merge sort - due to its efficient merging process and sequential access nature. and o(n log n)

Small data set 
==============
Array
-----
Insertion sort
Selection sort
