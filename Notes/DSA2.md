## `Stack` ##
===============
- A stack is a linear data structure that follows the LIFO principle (Last In, First Out).
- The last element added to the stack is the first one to be removed. 
- Operations in a stack occur only at one end, called the top.
- Underflow happens when we try to pop an item from an empty stack. 
- Overflow happens when we try to push more items to the fully loaded stack.

`Complexity analysis`
---------------------
`Access`
    Time Complexity   : O(n) – Need to traverse to access a specific element.
    Space Complexity  : O(1) – No extra space is used for access.
`Search`
    Time Complexity   : O(n) – May require checking each element from top to bottom.
    Space Complexity  : O(1) – Searching doesn’t require additional space.
`Insertion`
    Time Complexity   : O(1) – Push adds to the top of the stack.
    Space Complexity  : O(1) – No extra space is used if resizing is not required.
`Deletion`
    Time Complexity   : O(1) – Pop removes from the top of the stack.
    Space Complexity  : O(1) – No additional space is used.
`Iteration`
    Time Complexity   : O(n) – Each element is visited once.
    Space Complexity  : O(1) – If no extra space is used during traversal.

`Applications`
--------------
Used in function call stack (recursion).
Used in undo/redo functionality in applications.
Used in backtracking algorithms (e.g., N-Queens problem).
Used in expression evaluation (e.g., postfix notation).
Used in browser history functionality (forward/backward navigation).

`Operations`
--------------
Push: Add an element to the top of the stack.
Pop: Remove the top element from the stack.
Peek/Top: View the top element without removing it.

`Types of Stacks`
-----------------
`Static Stack`
---------------
Implemented using arrays. Has a fixed size. Limited by predefined memory.

`Dynamic Stack`
---------------
Implemented using linked lists. Can grow or shrink dynamically as needed.





## `Queues` ##
==============
- A queue is a linear data structure that follows the FIFO principle (First In, First Out).
- The first element added to the queue is the first one to be removed.
- Operations in a queue occur at two ends
- Enqueue: Add an element at the rear (end) of the queue.
- Dequeue: Delete an element from the front of the queue.

`Complexity analysis`
---------------------
`Access`  
    Time Complexity   : O(n) – Direct access by index is not typical in queue; traversal needed.  
    Space Complexity  : O(1) – No extra space is used for access.
`Search`  
    Time Complexity   : O(n) – May need to check each element from front to rear.  
    Space Complexity  : O(1) – Searching doesn’t require additional space.
`Insertion`  
    Time Complexity   : O(1) – Enqueue adds at the rear of the queue.  
    Space Complexity  : O(1) – No extra space is used if resizing is not required.
`Deletion`  
    Time Complexity   : O(1) – Dequeue removes from the front of the queue.  
    Space Complexity  : O(1) – No additional space is used.
`Iteration`  
    Time Complexity   : O(n) – Each element is visited once from front to rear.  
    Space Complexity  : O(1) – If no extra space is used during traversal.

`Applications`
--------------
Used in scheduling algorithms (e.g., CPU scheduling).
Used in printer queues and job scheduling.
Used in messaging systems (e.g., message queues).
Used in implementing breadth-first search (BFS).

`Simple Queue`
----------------
Operates on the basic FIFO principle.

`Circular Queue`
----------------
The last position connects to the first, forming a circle. Prevents memory wastage by reusing empty slots.

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
A Concurrent Queue is a type of queue that is designed to be safely used by multiple threads or processes at the same time, without corrupting the data.





## `Bubble sort` ##
====================
Bubble Sort is a simple comparison-based sorting algorithm also known as sinking sort. It works by repeatedly iterating through the array to be sorted, comparing each pair of adjacent elements, and swapping them if they are in the wrong order. This process is repeated for multiple passes through the array until the entire array is sorted.

`Complexity Analysis`
----------------------
- Best-case Time Complexity: 𝑂(𝑛) when the array is already sorted.
- Average-case Time Complexity: 𝑂(𝑛^2)
- Worst-case Time Complexity: 𝑂(𝑛^2)
- Space Complexity: 𝑂(1) because it is an in-place sorting algorithm.

`Advantages`
-------------
- Simplicity: Easy to implement and understand.
- Stable sorting algorithm: Maintains the relative order of equal elements.
- In-place sorting algorithm
- Adaptive algorithm

`Disadvantages`
----------------
- Inefficiency for large set of data
- Poor performance on average and worst-case scenarios.
- Redundant Comparisons: Even after the array becomes sorted, it continues to compare.

`Best Case Scenario`
--------------------
In the best case scenario, the array is already sorted.

`Average Case Scenario`
-----------------------
In the average case scenario, the array elements are in random order.

`Worst Case Scenario`
---------------------
In the worst case scenario, the array is sorted in reverse order.

`Applications`
--------------
- Educational purposes – Ideal for teaching sorting due to simplicity and easy-to-visualize steps.
- Very small datasets – Occasionally used in micro-controllers or small scripts where performance isn't a concern.
- Detecting nearly sorted data – It’s adaptive and can perform well when the list is mostly sorted.





## `Selection sort` ##
=======================
Selection sort is a simple comparison-based sorting algorithm. It works by repeatedly selecting the smallest (or largest) element from the unsorted portion of the array and swapping it with the first unsorted element, effectively growing the sorted portion of the array from left to right.

`Complexity Analysis`
---------------------
Time Complexity :-
- Best Case: O(n²)
- Average Case: O(n²)
- Worst Case: O(n²)
 
Selection sort always goes through the entire array to find the minimum or maximum element, even if the array is already sorted.
So, unlike some other algorithms, there is no improvement in the best case.

Space Complexity :-  O(1) 

`Advantages`
-----------
Simple to Implement: Easy to understand and implement.
In-Place: Does not require additional storage space.
Useful for Small Data Sets: Performs well with small arrays.
It has performance advantages over more complicated algorithms in certain situations, particularly where auxiliary memory is limited.

`Disadvantages`
----------------
Inefficient for Large Data Sets
Poor performance on average and worst xase scenario
Not Adaptive: Does not take advantage of the existing order in the array.
Unstable: Does not preserve the relative order of equal elements.

`Applications of Selection Sort`
--------------------------------
- Small fixed-size lists – E.g., finding the top 5 or bottom 5 values without full sorting.
- Memory-constrained systems – It makes fewer swaps, so it’s sometimes used when write operations are costly (like EEPROM).
- Leaderboard updates – When inserting a new score into a sorted list of top players.





## `Insertion sort` ##
======================
Insertion sort is a simple and intuitive comparison-based sorting algorithm. It builds the final sorted array one element at a time by repeatedly taking the next unsorted element and inserting it into the correct position within the sorted portion of the array.

`Complexity analysis`
----------------------
Time Complexity :-
	Best Case: O(n) when the array is already sorted.
	Average Case: O(n²)
	Worst Case: O(n²) when the array is sorted in reverse order.
Space Complexity :- 
	 O(1) as it is an in-place sorting algorithm.

`Advantages`
--------------
Simple to Implement: Easy to understand and implement.
Efficient for Small Data Sets: Performs well with small arrays.
Stable algorithm
Adaptive algorithm
In-place algorithm

`Disadvantages`
-----------------
Inefficient for Large Data Sets: Time complexity of O(n²) makes it impractical for large datasets.

`Applications of Insertion sort`
--------------------------------
- Online sorting – Sorting data as it comes in (streaming input).
- Nearly sorted lists – Very efficient (O(n)) when the list is already mostly sorted.
- Small datasets – Often used as a final pass in algorithms like Quick Sort or Merge Sort for small subarrays.
- Text editors – While typing, characters may be inserted in the right place in a sorted list.





## `Quick Sort` ##
===================
Quick Sort is an efficient, comparison-based, divide-and-conquer sorting algorithm.
It works by choosing a "pivot" element and rearranging the other elements into two parts:
  - Elements less than the pivot go to the left.
  - Elements greater than the pivot go to the right.
  - This process is called partitioning.
  - After partitioning:
    - The pivot is now in its correct sorted position.
    - The same steps are recursively applied to the left and right parts.
    - This continues until the entire array is sorted.

`Complexity Analysis`
------------------------
Time Complexity :-
  Best Case :- O(n log n)
  Average Case :- O(n log n)
  Worst Case :- O(n²)
Space Complexity :- O(log n) (due to the recursion stack)

`Best Case Scenario`
---------------------
In the best case, the pivot divides the array into two equal halves at each step, leading to a balanced tree of partitions. The time complexity for this case is O(n log n).

`Average Case Scenario`
------------------------
In the average case, the pivot generally divides the array into reasonably balanced partitions. The time complexity for this case is O(n log n).

`Worst Case Scenario`
----------------------
The worst-case time complexity is O(n^2). This occurs when the pivot choice results in highly unbalanced partitions. For example, if the array is already sorted or nearly sorted, and the last element is always chosen as the pivot, the array is divided into one large subarray and one empty subarray, leading to O(n^2) complexity.

the worst-case scenario for quick sort arises when the pivot is consistently chosen poorly, such as always selecting the smallest or largest element in the array. In this situation, Quick Sort may require O(n^2) comparisons and swaps to complete the sorting process, which could be more inefficient. For example, this worst-case scenario can occur when sorting an already sorted array or an array with many duplicate elements.

`Advantages`
--------------
Efficient: Average time complexity is O(n log n), making it one of the fastest sorting algorithms.
In-Place Sorting: Requires minimal additional memory (O(log n) due to recursion).
Parallelizable: Can be easily parallelized as different parts of the array can be sorted independently.

`Disadvantages`
-----------------
Worst-Case Complexity: Can degrade to O(n²) if the pivot selection is poor.
Recursive: Recursive calls can lead to a stack overflow if the recursion depth is too large.
unstable: Does not preserve the relative order of equal elements.
Non adaptive

`Applictions of quick sort`
-----------------------------
- General-purpose sorting – Used in many language libraries (like Python’s sort() internally uses Timsort, which includes QuickSort).
- Database systems – For in-memory sorting operations.
- File systems – To sort directory entries or file metadata.
- Web applications – Sorting lists or tables client-side efficiently.





## `Merge Sort` ##
===================
Merge sort is an efficient, stable, comparison-based, divide-and-conquer sorting algorithm. It works by dividing the array into smaller sub-arrays, sorting those sub-arrays, and then merging them back together to form a sorted array.

`Complexity Analysis`
------------------------
Time Complexity :-
 Best Case :-  O(n log n)
 Average Case :-  O(n log n)
 Worst Case :-  O(n log n)
Space Complexity :-  O(n) (requires additional space proportional to the size of the array)

`Advantages`
--------------
Consistent Performance: Guarantees O(n log n) time complexity.
Stable: Preserves the relative order of equal elements.
Parallelizable: Can be easily parallelized since each half can be processed independently.

`Disadvantages`
-----------------
Space Complexity: Requires additional space proportional to the size of the array.
Not In-Place: Uses extra memory for the temporary arrays.

`Applications of Merge sort`
------------------------------
- Sorting large datasets
- Parallel processing – Can be easily divided across multiple cores or threads.
- Linked lists – Performs better than quicksort when applied to linked lists (due to no random access requirement).
- Stable sorting required





## `Hash table` ##
===================
- Hash table is a data structure used to store key-value pairs.
- Uses a hash function to convert keys (like strings) into numeric indices in an array.

`How it Works`
1. The key (e.g., "name") is passed into a hash function.
2. The hash function converts it to a number (hash code).
3. That number is mapped to an index within the array.
4. The value is stored at that index.

`Why Use Hash Tables?`
- Fast lookup, insertion, and deletion on average time complexity O(1).
- Efficient storage of data where quick access by key is needed.

`JavaScript Objects vs Hash Tables`
- JavaScript objects work like hash tables internally.
- But objects inherit keys from their prototype (can lead to conflict).
- Hash tables are lower-level with no built-in methods or inherited keys.

`How is O(1) achieved?`
- Good hash functions spread keys uniformly across the array.
- Avoid too many collisions (same index for different keys) by uses seperate chaining and open addressing for resolving collitions.

`Complexity Analysis`
---------------------
`Access`  
   Time Complexity    : O(1) (average case) – Direct access using the key via hash function.  
   Space Complexity   : O(n) – Stores n key-value pairs in an array.
`Search`  
   Time Complexity    
      Average Case    : O(1) – Directly find value using the key.  
      Worst Case      : O(n) – All keys collide and are stored in one bucket (rare).  
   Space Complexity   : O(1)
`Insertion`  
   Time Complexity    
      Average Case    : O(1) – Key is hashed and value is stored.  
      Worst Case      : O(n) – All keys go to the same index (collision).  
   Space Complexity   : O(1) – Unless resizing occurs.
`Deletion`  
   Time Complexity    
      Average Case    : O(1)  
      Worst Case      : O(n)  
   Space Complexity   : O(1)
`Resize (Rehashing)  `
   Time Complexity    : O(n) – When the array grows to maintain performance.  
   Space Complexity   : O(n)
`Note`
- With a good hash function, collisions are rare and O(1) is typical.
- Load factor is maintained (e.g., 0.75) to ensure efficient operations.

`Applications`
--------------
- Implementing maps/dictionaries.
- Caching (storing computed results for fast access).
- Indexing databases (key-based lookup).
- Symbol tables in compilers.
- Routing tables in networks.
- Storing user sessions in web applications.
- Password storage with hashing.
- Counting frequencies (word count, logs, analytics).

`How Hash Tables Work?`
-----------------------
1. Hash Function
------------------
A hash function takes an input (key) and returns an hash code as an index of the array where the corresponding value should be stored.
A good hash function distributes keys uniformly across the array to minimize collisions.

2. Indexing
---------------
The output of the hash function is used as an index to insert, find, or delete an element in the array.

3. Handling Collisions
-------------------------
Collisions occur when the hash function maps multiple keys to the same index. 

`There are several methods to handle collisions`
-------------------------------------------------
`Seperate Chaining` : Separate Chaining handles collisions by storing multiple elements at the same index in a linked list or similar structure.
Each index in the hash table points to a list of key-value pairs that hash to the same index.
```js
Index 3 → [ (k1, v1) → (k2, v2) ]
```
- Easy to implement
- Handles many collisions well
- Requires extra space for linked lists
- Lookup can be slower if many keys collide

`Open Addressing` : Open Addressing handles collisions by finding another empty slot within the hash table array using a probing sequence (like linear probing or quadratic probing or double hashing).

  `Linear probing` - If a collision occure the algorithm checks the next slot in a sequencial manner until an empty slot is found

  `Quadratic probing` - The algorithm uses a quafratic function to calculate next available empty slot

  `Double hashing` - using a secondary hash function to calculate the step size for probing

`Rehashing`
------------
When the hash table becomes too full or the performance of hash operations degrades, rehashing is performed to improve efficiency. 
During rehashing, the hash table is resized, and all existing keys are reinserted into the new hash table using a new hash function or a recalculation of the hash values.

`Load factor`
-------------
The load factor is a metric that indicates the ratio of the number of elements stored in the hash table to the total number of slots available.

Load Factor(α) = n / m
n = Number of elements (keys) currently in the hash table.
m = Number of slots (buckets) in the hash table.

When the load factor exceeds the chosen threshold, the hash table is resized.





## `Better sort` ##
===================
`Array`
---------
1 . QuickSort
Generally the fastest sorting algorithm for large datasets due to its average-case time complexity of O(nlogn) and good cache performance.

2 . Merge sort
Stable sort with a guaranteed O(nlogn) time complexity in all cases (best, average, and worst).

`Linked list`
---------------
1 . Merge sort
Mergesort is particularly well-suited for linked lists. It can be implemented with O(1) extra space and maintains the 
O(n log n) time complexity. The splitting and merging operations are more efficient with linked lists compared to arrays because they can be done in place without additional memory.

2 . Insertion sort
Simple to implement and works well with small datasets or nearly sorted lists. Its best-case time complexity is O(n).

Large Array: Quicksort or Mergesort.
Large Linked List: Mergesort.

Small Array: Selection sort or Insertion sort.
Small Linked List: Insertion Sort.

Almost Sorted Array or Linked List: Insertion Sort.

Least Sorted Array: Quicksort or Mergesort.
Least Sorted Linked List: Mergesort.

Doubly Linked List: Similar to singly linked lists; use Insertion Sort for small/almost sorted data and Mergesort for large/least sorted data.





## `Stability` ##
=================
Stability in a sorting algorithm means that if two elements have the same value, their relative order will remain the same before and after sorting. In other words, equal elements keep their original order relative to each other in the sorted output.

Stable Sorts 
---------------
Bubble Sort
Insertion Sort
Merge Sort

Unstable Sorts
------------------
Selection Sort
Quick Sort





## `In place sorting algorithm` ##
====================================
An in-place sorting algorithm is one that sorts the elements of an array using a constant amount of extra space.

Benifits
--------
Space efficiency
Performance

In places Sorting algorithms
-----------------------------
Bubble sort
Selection sort
Insertion sort
Quick sort

Non - In place sorting algorithm - Merge sort





## `Adaptive Sorting Algorithms` ##
======================================
The algorithm takes advantage of existing order in the input (i.e., performs better on nearly sorted data).

Adaptive
---------
Bubble sort
Insertion sort

Non-Adaptive
-------------
Selection
Quick sort
merge sort





## `Tabulation` ##
===================
Tabulation is a bottom-up dynamic programming technique where you solve subproblems first and use their solutions to build up solutions to larger problems.

## `Sliding window` ##
=======================
The sliding window technique is used to efficiently solve problems involving subarrays or substrings by maintaining a window (a contiguous range of elements) that slides over the array or string. This method reduces the number of computations by reusing results from previous windows and adjusting the window's boundaries as needed.

## `Memoization` ##
====================
Memoization is a technique used to improve the performance of recursive algorithms by storing the results of subproblems in a data structure (like a hash map or array) so that they can be reused when the same subproblem occurs again. Its a top down approach
