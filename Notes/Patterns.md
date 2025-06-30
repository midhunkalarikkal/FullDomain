# 📘 1. PREFIX SUM – Efficient Range Sum Queries
-------------------------------------------------
## ✅ Problem Context:

We use the **prefix sum** technique to solve problems like:

🟩 "Query the sum of elements in a subarray (i to j)"  
🟨 This is common in problems involving multiple range sum queries.

-------------------------------------------------
## 🧠 Example:

Given an array:  
A = [1, 2, 3, 4, 5, 6, 7]

One query like sum(i=2, j=5) can be solved using a simple loop.  
But for **multiple queries**, using a loop for each will take:

⏱️ Time Complexity = O(n × m)  
n → size of array, m → number of queries

This becomes inefficient.

-------------------------------------------------
## ⚡ Solution: Prefix Sum Array

Create a prefix sum array `P` such that:

P[i] = A[0] + A[1] + A[2] + ... + A[i]

For the above array A:  
Prefix Sum P = [1, 3, 6, 10, 15, 21, 28]

Now to compute the sum of subarray A[i..j]:

▶️ If i == 0:  
    sum = P[j]  
▶️ If i > 0:  
    sum = P[j] - P[i - 1]

This reduces each query to O(1) time after O(n) preprocessing.

-------------------------------------------------
## 🧩 Related LeetCode Problems:

📌 Leetcode 303 – Range Sum Query - Immutable  
  - Precompute prefix sum for quick range queries.

📌 Leetcode 525 – Contiguous Array  
  - Use prefix sum and hashing to find max length subarray with equal 0s and 1s.

📌 Leetcode 560 – Subarray Sum Equals K  
  - Use prefix sum + hashmap to count subarrays whose sum equals K.

-------------------------------------------------
## ✅ Summary:

Prefix sum is a powerful tool when:
✔️ Multiple range sum queries exist  
✔️ We need to optimize brute-force O(n × m) to O(n + m)  
✔️ Subarray-based logic is involved





# 📘 2. TWO POINTER PATTERN – Efficient Dual Scanning
-------------------------------------------------
## ✅ Concept:

The **two pointer** technique involves solving problems by using **two indices** 
(starting from either end or both from the same side) and moving them **towards each other** 
or in a controlled way depending on the condition.

⚡ It helps reduce the time complexity from O(n²) to O(n) in many cases.

-------------------------------------------------
## 🧠 Example: Check if a String is a Palindrome

Input: "abcdcba"

Visual:
  a   b   c   d   c   b   a  
 ↑                       ↑  
start                  end  

### 🔧 Pseudocode:
```bash
start = 0
end = s.length - 1

while start < end:
if s[start] ≠ s[end]:
return false
start += 1
end -= 1
return true
```
✔️ This checks in O(n) time, instead of comparing all pairs (O(n²)).
-------------------------------------------------
## 🔁 Use Cases of Two Pointers:

1️⃣ Sorted array → Find two numbers that add to a target  
2️⃣ Reverse elements in-place  
3️⃣ Detect palindromes  
4️⃣ Merge sorted arrays  
5️⃣ Sliding window problems

-------------------------------------------------
## 🧩 Related LeetCode Problems:

📌 Leetcode 167 – Two Sum II (Input array is sorted)  
  - Use two pointers (start, end) to find two elements that sum to target

📌 Leetcode 15 – 3Sum  
  - Sort array, fix one number, use two pointers to find pairs that sum to -nums[i]

📌 Leetcode 11 – Container With Most Water  
  - Use two pointers from left and right, move inward to find max area

-------------------------------------------------
## ✅ Summary:

✔️ Efficient for sorted data  
✔️ Reduces nested loops to linear scans  
✔️ Works well with sliding window or subarray logic




# 📘 3. SLIDING WINDOW – Efficient Subarray/Substr Search
-------------------------------------------------
## ✅ Concept:

The sliding window pattern is used to solve problems involving:
✔️ Subarrays or substrings  
✔️ Finding maximums, minimums, or satisfying conditions across a range

It reduces brute-force O(n × k) logic to efficient O(n) by sliding a fixed or variable-sized window.

-------------------------------------------------
## 🧠 Example: Find Subarray of Size k with Maximum Sum

Input: 
array = [3, 2, 7, 5, 9, 6, 2]  
k = 3  
n = length of array

### 🔧 Pseudocode:

initialize:
    windowSum = sum of first k elements
    maxSum = windowSum
    maxStartIndex = 0

loop from i = 0 to n - k - 1:
    windowSum = windowSum - array[i] + array[i + k]

    if windowSum > maxSum:
        maxSum = windowSum
        maxStartIndex = i + 1

return subarray from maxStartIndex to maxStartIndex + k
       and maxSum

-------------------------------------------------
## 🔁 Use Cases:

1. Maximum sum subarray of size k  
2. Longest substring without repeating characters  
3. Minimum window substring containing all required characters

-------------------------------------------------
## 🧩 Related LeetCode Problems:

Leetcode 643 – Maximum Average Subarray I  
Leetcode 3   – Longest Substring Without Repeating Characters  
Leetcode 76  – Minimum Window Substring

-------------------------------------------------
## ✅ Summary:

✔️ Use when you need to process a subrange of elements  
✔️ Avoids recomputation by sliding the window  
✔️ Ideal for substring, subarray, and frequency problems




# 📘 4. FAST AND SLOW POINTERS – Cycle Detection & Midpoint Logic
-------------------------------------------------
## ✅ Concept:

The **fast and slow pointer** technique (also called Floyd’s Tortoise and Hare) is used to solve problems involving:

✔️ Cycle detection in linked lists or arrays  
✔️ Finding the midpoint of a linked list  
✔️ Detecting duplicates in special number sequences

It works by **moving two pointers at different speeds** – typically:
- Slow pointer → 1 step at a time  
- Fast pointer → 2 steps at a time

-------------------------------------------------
## 🧠 Use Cases:

1. **Detecting Cycle in Linked List**  
   If there is a cycle, the fast pointer will eventually meet the slow pointer.

2. **Finding Midpoint of Linked List**  
   When the fast pointer reaches the end, the slow pointer will be at the middle.

3. **Detecting Duplicate Number in Arrays**  
   (like in Floyd's cycle detection on index-based movement)

-------------------------------------------------
## 🔧 Pseudocode for Cycle Detection:

initialize:
    slow = head
    fast = head

while fast is not null and fast.next is not null:
    slow = slow.next
    fast = fast.next.next

    if slow == fast:
        return true

return false

-------------------------------------------------
## 🧩 Related LeetCode Problems:

Leetcode 141 – Linked List Cycle  
Leetcode 202 – Happy Number (detect cycle in digit square sum)  
Leetcode 287 – Find the Duplicate Number (cycle in number jumps)

-------------------------------------------------
## ✅ Summary:

✔️ Efficient for detecting cycles without extra space  
✔️ Helps find midpoints in O(n) time  
✔️ Often used in linked list and number sequence problems  
✔️ Time Complexity: O(n), Space: O(1)





# 📘 5. LINKED LIST IN-PLACE REVERSAL – Efficient Reversal Without Extra Space
-------------------------------------------------
## ✅ Concept:

In-place reversal is used to **reverse a singly linked list** without using additional memory like arrays or stacks.

Instead of storing the nodes elsewhere, we **rearrange the pointers** using three variables:

- `prev`: initially null  
- `current`: points to the current node  
- `next`: stores the next node temporarily during traversal

This method runs in **O(n)** time with **O(1)** space.

-------------------------------------------------
## 🧠 Example:

Original:  
1 → 3 → 5 → 7 → 9

Reversed:  
9 → 7 → 5 → 3 → 1

-------------------------------------------------
## 🔧 Pseudocode:

function reverseLinkedList(head):
    prev = null  
    current = head  

    while current is not null:
        next = current.next        // store next node
        current.next = prev        // reverse the pointer
        prev = current             // move prev forward
        current = next             // move current forward

    return prev  // new head of reversed list

-------------------------------------------------
## 🔁 Key Ideas:

✔️ Avoids extra space  
✔️ Only reassigns `next` pointers  
✔️ Works for entire or partial linked lists (with slight variations)

-------------------------------------------------
## 🧩 Related LeetCode Problems:

Leetcode 206 – Reverse Linked List (entire list)  
Leetcode 92  – Reverse Linked List II (partial reversal between positions)  
Leetcode 24  – Swap Nodes in Pairs (similar pointer manipulation logic)

-------------------------------------------------
## ✅ Summary:

✔️ Time Complexity: O(n)  
✔️ Space Complexity: O(1)  
✔️ Uses three pointers to reverse in-place  
✔️ Crucial for interviews and understanding pointer logic in linked lists





# 📘 6. MONOTONIC STACK – Efficient Next Greater Element (NGE)
-------------------------------------------------
## ✅ Concept:

This pattern uses a **stack** to find the **next greater or next smaller element** for each item in an array.

Instead of using a brute-force O(n²) approach, a monotonic stack allows us to solve the problem in **O(n)** time.

-------------------------------------------------
## 🧠 Example:

Input: [1, 4, 6, 3, 2, 7]  
Goal: For each element, find the next element to the right that is greater.  
If none exists, return -1 for that index.

-------------------------------------------------
## ⚙️ Algorithm (Pseudocode):

1. Let `n` be the length of the array  
2. Initialize an empty stack  
3. Create a result array of size `n`, filled with -1  

4. Loop through index `i` from 0 to n - 1:

    a. While the stack is not empty **and**  
       current element > element at index on top of stack:

        i.   Pop index from stack  
        ii.  Set result at that index = current element

    b. Push current index `i` onto the stack

5. Return the result array

-------------------------------------------------
## 🧩 LeetCode Problems:

Leetcode 496 – Next Greater Element I  
Leetcode 739 – Daily Temperatures (next warmer day)  
Leetcode 84  – Largest Rectangle in Histogram (next smaller elements)

-------------------------------------------------
## ✅ Summary:

✔️ Time Complexity: O(n)  
✔️ Space Complexity: O(n)  
✔️ Great for range-based comparisons in arrays  
✔️ Monotonic stack maintains increasing or decreasing order




# 📘 7. TOP K ELEMENTS – Finding K Largest, Smallest, or Frequent Elements
-------------------------------------------------
## ✅ Concept:

This pattern is used to find:

✔️ K largest elements  
✔️ K smallest elements  
✔️ K most frequent elements

Instead of sorting the entire array (O(n log n)), we use a **heap** to maintain only the top K elements, reducing time to **O(n log k)**.

-------------------------------------------------
## 🧠 Problem Example:

Input: [1, 5, 11, 9, 7, 2]  
Goal: Find the top 3 largest elements  
Output: [9, 11, 7] (any order)

-------------------------------------------------
## ⚙️ Algorithm to Find K Largest Elements:

1. Initialize a **min-heap** (size K)

2. Loop through each element in the array:
    
    a. Add the element to the heap  
    b. If heap size exceeds K, remove the smallest element (min-heap)

3. After the loop, the heap contains the K largest elements

4. Return the heap contents as the result

-------------------------------------------------
## ⚙️ Algorithm to Find K Smallest Elements:

1. Initialize a **max-heap** (size K)  
   (compare elements as negative if using a min-heap library)

2. Loop through each element:
    
    a. Add element to heap  
    b. If heap size exceeds K, remove the largest (top of max-heap)

3. Return heap contents

-------------------------------------------------
## ⚙️ Algorithm to Find K Most Frequent Elements:

1. Count frequency of each element using a hashmap

2. Push each (element, frequency) pair into a **min-heap** based on frequency

3. Keep heap size at K by popping the smallest frequency

4. Return the elements from the heap

-------------------------------------------------
## 🧩 LeetCode Problems:

Leetcode 215 – Kth Largest Element in an Array  
Leetcode 347 – Top K Frequent Elements  
Leetcode 373 – Find K Pairs with Smallest Sums

-------------------------------------------------
## ✅ Summary:

✔️ Time Complexity: O(n log k)  
✔️ Space Complexity: O(k)  
✔️ Use min-heap for K largest  
✔️ Use max-heap for K smallest  
✔️ Use frequency map + heap for most frequent






# 📘 8. OVERLAPPING INTERVALS – Merging and Manipulating Ranges
-------------------------------------------------
## ✅ Concept:

This pattern is used to solve problems involving **intervals** or **ranges** that may overlap.

Common applications include:
✔️ Merging overlapping intervals  
✔️ Inserting a new interval  
✔️ Finding intersection of intervals  
✔️ Finding the minimum number of meeting rooms required

-------------------------------------------------
## 🧠 Example – Merging Intervals:

Input: [[1,3], [2,6], [8,10], [15,18]]  
Output: [[1,6], [8,10], [15,18]]

-------------------------------------------------
## ⚙️ Algorithm – Merge Intervals:

1. Sort intervals based on the **start time**

2. Initialize `merged` list with the first interval

3. For each interval in the sorted list starting from the second:

    a. Compare the current interval with the last interval in `merged`  
    b. If they overlap (i.e., current start ≤ merged end):
        - Merge by updating the end of the last merged interval to max(end values)
    c. Else:
        - Append the current interval to `merged`

4. Return the `merged` list

-------------------------------------------------
## ⚙️ Algorithm – Insert Interval:

1. Add the new interval to the list  
2. Use the **merge intervals** logic to combine overlaps

-------------------------------------------------
## ⚙️ Algorithm – Minimum Meeting Rooms:

1. Separate start times and end times into two sorted lists  
2. Use two pointers `s` and `e` for start and end times  
3. Initialize `rooms = 0` and `maxRooms = 0`

4. While `s < n`:

    a. If start[s] < end[e], need a new room → `rooms++`, `s++`  
    b. Else, a meeting ended → `rooms--`, `e++`

    c. Update `maxRooms = max(maxRooms, rooms)`

5. Return `maxRooms`

-------------------------------------------------
## 🧩 LeetCode Problems:

Leetcode 56  – Merge Intervals  
Leetcode 57  – Insert Interval  
Leetcode 435 – Non-overlapping Intervals (min removal to make non-overlapping)

-------------------------------------------------
## ✅ Summary:

✔️ Sort intervals based on start times  
✔️ Compare current interval with last merged  
✔️ Use two-pointer technique for meeting room problems  
✔️ Time Complexity: O(n log n) due to sorting




# 📘 9. MODIFIED BINARY SEARCH – Smart Variants of Classic Binary Search
-------------------------------------------------
## ✅ Concept:

Modified Binary Search is used when a normal binary search won't work due to:
✔️ Rotated arrays  
✔️ Nearly sorted arrays  
✔️ Duplicates  
✔️ Unknown boundaries  
✔️ Special conditions like finding first/last occurrences, peak, or square root

Instead of just checking mid, we adapt the conditions based on the problem pattern.

-------------------------------------------------
## 🧠 Use Cases and Algorithms:

-------------------------------------------------
🔹 1. Search in a Rotated Sorted Array:

Array: [4, 5, 6, 7, 0, 1, 2]  
Target: 0

- Find `mid = (start + end) // 2`
- One half is always sorted
- If target lies in the sorted half, search there; otherwise, search in the other half

-------------------------------------------------
🔹 2. First and Last Occurrence of an Element:

- Use binary search with a condition:  
  - For **first occurrence**, move `end = mid - 1` if element found  
  - For **last occurrence**, move `start = mid + 1` if element found  
- Track result index while searching

-------------------------------------------------
🔹 3. Square Root of a Number:

- Binary search between 0 and n  
- Use `mid * mid == n`  
- If `mid * mid < n`, move right  
- Else, move left  
- Return `floor(mid)` as the result

-------------------------------------------------
🔹 4. Peak Element:

- A peak element is greater than both neighbors  
- Use binary search to move toward the higher neighbor  
- Eventually you'll land on a peak

-------------------------------------------------
🔹 5. Matrix Search (Sorted Rows and Columns):

- Start from top-right  
- If target < current, move left  
- If target > current, move down

-------------------------------------------------
## 🧩 LeetCode Problems:

Leetcode 33  – Search in Rotated Sorted Array  
Leetcode 153 – Find Minimum in Rotated Sorted Array  
Leetcode 240 – Search a 2D Matrix II (row & col sorted)

-------------------------------------------------
## ✅ Summary:

✔️ Time Complexity: O(log n) (most cases)  
✔️ Handles rotated arrays, 2D matrices, and numeric searches  
✔️ Carefully adapt mid and boundary logic based on the pattern  
✔️ Powerful for interviews and tricky search conditions




# 📘 10. BINARY TREE TRAVERSAL – Depth and Breadth-Based Approaches
-------------------------------------------------
## ✅ Concept:

Binary Tree traversal refers to visiting each node of the tree in a specific order.

There are two main types:

1. **Depth-First Traversal (DFS):**
   ✔️ Inorder (Left → Root → Right)  
   ✔️ Preorder (Root → Left → Right)  
   ✔️ Postorder (Left → Right → Root)

2. **Breadth-First Traversal (BFS):**
   ✔️ Level Order (visit level by level using a queue)

## 🔹 Level Order Traversal (Breadth-First):

Visit nodes level by level from top to bottom using a queue.

Algorithm:
1. Initialize an empty queue  
2. Add the root to the queue  
3. While the queue is not empty:
    - Remove the front node  
    - Process it  
    - Add its children to the queue

-------------------------------------------------
## 🧩 LeetCode Problems:

Leetcode 257 – Binary Tree Paths (DFS-based)  
Leetcode 230 – Kth Smallest Element in BST (inorder)  
Leetcode 124 – Binary Tree Maximum Path Sum (postorder & recursion)  
Leetcode 107 – Binary Tree Level Order Traversal II (BFS bottom-up)

-------------------------------------------------
## ✅ Summary:

✔️ DFS is recursive (or can be made iterative using stack)  
✔️ BFS uses queue for level-wise traversal  
✔️ Each method has specific applications based on order of processing  
✔️ Time Complexity: O(n) for all traversals  
✔️ Space Complexity: O(h) for DFS, O(n) for BFS





# 📘 11. DEPTH FIRST SEARCH (DFS) – Graph Exploration
-------------------------------------------------
## ✅ Concept:

**Depth First Search (DFS)** is a graph traversal technique used to explore all vertices of a graph by going as deep as possible before backtracking.

It can be applied on:
✔️ Graphs (directed/undirected)  
✔️ Trees  
✔️ Grids (2D/3D problems)

-------------------------------------------------
## 🧠 Common Use Cases:

1. **Finding a path between two nodes**  
   Explore all possible paths to find one that leads to the destination.

2. **Detecting cycles in a graph**  
   Track visited nodes and recursion stack to detect if you revisit a node in the current path.

3. **Topological Sorting (for DAGs)**  
   Postorder traversal used to get a valid ordering of tasks or nodes.

4. **Counting connected components**  
   Run DFS from unvisited nodes and count how many times DFS starts.

-------------------------------------------------
## ⚙️ DFS Algorithm (Pseudocode):

1. Initialize a `visited` set or array to track visited nodes  
2. Define a recursive `dfs(node)` function:

    a. Mark node as visited  
    b. For each neighbor of node:
        - If not visited, recursively call `dfs(neighbor)`

3. Call `dfs(start_node)`

To count components:
- Loop through all nodes and call DFS on unvisited ones, increment a counter.

To detect cycle:
- Maintain a recursion stack in addition to visited set.

-------------------------------------------------
## 🧩 LeetCode Problems:

Leetcode 133 – Clone Graph  
Leetcode 113 – Path Sum II (DFS in binary tree)  
Leetcode 210 – Course Schedule II (Topological Sort using DFS)

-------------------------------------------------
## ✅ Summary:

✔️ Recursive or stack-based implementation  
✔️ Time Complexity: O(V + E)  
✔️ Space Complexity: O(V) for visited + call stack  
✔️ Great for problems with connectivity, traversal, and cycle detection





# 📘 12. BREADTH FIRST SEARCH (BFS) – Layer-by-Layer Traversal

-------------------------------------------------
## ✅ Concept:

**Breadth First Search (BFS)** is a traversal algorithm that explores a graph or tree **level by level**, starting from a source node.

It is implemented using a **queue** and is ideal for finding the shortest path in unweighted graphs or processing nodes in layers.

-------------------------------------------------
## 🧠 Common Use Cases:

1. **Shortest path in unweighted graphs**
2. **Level order traversal in trees**
3. **Minimum number of steps or moves**
4. **Multi-source spreading problems (like rot or infection)**
5. **Topological sorting in DAG using Kahn’s algorithm**

-------------------------------------------------
## ⚙️ BFS Algorithm (Pseudocode):

1. Initialize a queue and a visited set  
2. Enqueue the starting node and mark as visited  
3. While the queue is not empty:

    a. Dequeue the current node  
    b. Process the node (store, count, or print it)  
    c. For each neighbor of the current node:
        - If not visited, mark it and enqueue it

-------------------------------------------------
## ⚙️ BFS for Level Order Traversal (Trees):

1. Initialize a queue and enqueue the root  
2. While the queue is not empty:

    a. Track the size of the current level  
    b. Process all nodes of this level  
    c. Enqueue their children

3. Append each level’s values to a result list

-------------------------------------------------
## ⚙️ BFS for Topological Sort (Kahn’s Algorithm):

1. Calculate in-degrees of all nodes  
2. Enqueue nodes with 0 in-degree  
3. While the queue is not empty:

    a. Dequeue a node and add to topological order  
    b. Decrease in-degree of its neighbors  
    c. If in-degree becomes 0, enqueue them

4. If topological order contains all nodes → valid, else there’s a cycle

-------------------------------------------------
## 🧩 LeetCode Problems:

Leetcode 102 – Binary Tree Level Order Traversal (classic BFS)  
Leetcode 994 – Rotting Oranges (multi-source BFS)  
Leetcode 207 – Course Schedule (cycle detection in DAG using Kahn’s BFS)

-------------------------------------------------
## ✅ Summary:

✔️ Uses queue to process nodes layer by layer  
✔️ Great for shortest paths and level processing  
✔️ Time Complexity: O(V + E)  
✔️ Space Complexity: O(V)  
✔️ Preferred in multi-source or minimum-step problems





# 📘 13. MATRIX TRAVERSAL – Island Counting and Grid-Based Problems

-------------------------------------------------
## ✅ Concept:

Matrix traversal techniques are essential when solving 2D grid problems involving:
✔️ Land vs water  
✔️ Fill operations  
✔️ Boundary checks  
✔️ Connected components

These problems are solved using either **Depth-First Search (DFS)** or **Breadth-First Search (BFS)** on the matrix.

-------------------------------------------------
## 🧠 Classic Problem: Number of Islands

You are given a 2D grid consisting of '1' (land) and '0' (water).  
Your task is to count the number of distinct islands.

-------------------------------------------------
## ⚙️ Algorithm – Count Number of Islands (DFS/BFS):

1. Initialize `count = 0`

2. Loop through every cell in the matrix:
    
    a. If the cell is '1' (unvisited land):
        - Increment `count`
        - Call DFS or BFS from that cell to mark all connected land as visited

3. In the DFS/BFS:
    
    a. Mark current cell as visited (change '1' to '0' or use visited matrix)  
    b. Recursively or iteratively explore all 4 directions:
        - Up, Down, Left, Right
        - Check boundary conditions

4. Return the `count` of islands

-------------------------------------------------
## ⚙️ Algorithm – Flood Fill (Leetcode 733):

1. Starting from a given cell, change its color to a new color  
2. Recursively fill all 4-directionally connected cells of the same original color

-------------------------------------------------
## ⚙️ Algorithm – Surrounded Regions (Leetcode 130):

1. Identify all 'O's that are connected to boundary (not surrounded)  
2. Mark them with a temp marker  
3. Flip all other 'O's to 'X'  
4. Restore the marked 'O's back

-------------------------------------------------
## 🧩 LeetCode Problems:

Leetcode 200 – Number of Islands (DFS/BFS)  
Leetcode 733 – Flood Fill (DFS/BFS variant)  
Leetcode 130 – Surrounded Regions (boundary DFS)

-------------------------------------------------
## ✅ Summary:

✔️ Use DFS or BFS to explore connected regions  
✔️ Mark visited to avoid repeated work  
✔️ Check bounds and directions carefully  
✔️ Time Complexity: O(m × n)  
✔️ Space Complexity: O(m × n) in worst case (visited or call stack)






# 📘 14. BACKTRACKING – Generating All Possibilities Recursively

-------------------------------------------------
## ✅ Concept:

**Backtracking** is a recursive problem-solving technique used to:
✔️ Explore all possible configurations  
✔️ Build up a solution step-by-step  
✔️ Backtrack (undo a choice) when a path leads to a dead end

It is ideal for:
✔️ Permutations and combinations  
✔️ Constraint satisfaction problems (like Sudoku, N-Queens)  
✔️ Generating all valid paths or structures (like parenthesis or subsets)

-------------------------------------------------
## 🧠 Common Use Cases:

1. **Generate all permutations** of a given list (Leetcode 46)  
2. **Generate all subsets** or power sets (Leetcode 78)  
3. **Solve the N-Queens problem** by placing queens one by one (Leetcode 51)  
4. **Generate valid parenthesis** for a given number of pairs  
5. **Find all paths** in a maze or from start to end in a grid or graph

-------------------------------------------------
## ⚙️ General Backtracking Algorithm (Pseudocode):

function backtrack(path, options):
    if path is a valid solution:
        add path to result
        return

    for each option in options:
        if option is valid:
            choose the option
            backtrack(updated path, remaining options)
            undo the choice (backtrack step)

-------------------------------------------------
## ⚙️ Strategy:

1. Identify the choices at each step  
2. Add to the path  
3. Move deeper into recursion  
4. If a solution is reached, store it  
5. Backtrack and try another choice

-------------------------------------------------
## 🧩 LeetCode Problems:

Leetcode 46 – Permutations  
Leetcode 78 – Subsets (power set generation)  
Leetcode 51 – N-Queens (place queens with backtracking and pruning)

-------------------------------------------------
## ✅ Summary:

✔️ Builds solution incrementally  
✔️ Backtracks when constraint is violated or all options tried  
✔️ Recursion + For Loop = Backtracking pattern  
✔️ Time Complexity: Exponential (O(2^n), O(n!))  
✔️ Space Complexity: Depends on depth of recursion and result size





# 📘 15. DYNAMIC PROGRAMMING (DP) – Optimize Recursive Problems with Overlapping Subproblems

-------------------------------------------------
## ✅ Concept:

**Dynamic Programming (DP)** is a method used to solve problems that:
✔️ Have **overlapping subproblems**  
✔️ Have **optimal substructure** (solution can be built from smaller solutions)  
✔️ Can be **memoized** or **tabulated** to improve efficiency

Used to:
✔️ Maximize or minimize a value  
✔️ Count the number of ways to do something  
✔️ Determine existence or truth value of a substructure

-------------------------------------------------
## 🧠 Common Use Cases:

1. **Fibonacci numbers** – Classic DP introduction  
2. **0/1 Knapsack** – Choose items to maximize value without exceeding capacity  
3. **Longest Increasing Subsequence (LIS)** – Longest increasing chain in array  
4. **Longest Common Subsequence (LCS)** – Matching subsequence in two strings  
5. **Subset Sum / Equal Partition** – Does a subset with given sum exist  
6. **Matrix Chain Multiplication** – Optimal way to parenthesize matrix product  
7. **Coin Change** – Fewest coins to make a total amount  
8. **Climbing Stairs** – Count number of ways to reach the top

-------------------------------------------------
## ⚙️ DP Approach (Two Styles):

🔹 **Top-Down (Memoization):**  
- Use recursion + cache (memo) to avoid recomputation

🔹 **Bottom-Up (Tabulation):**  
- Build table from base cases up to the final solution

-------------------------------------------------
## ⚙️ Example Pseudocode – Fibonacci (Memoization):

function fib(n):
    if n in memo: return memo[n]
    if n <= 1: return n
    memo[n] = fib(n - 1) + fib(n - 2)
    return memo[n]

-------------------------------------------------
## 🧩 LeetCode Problems:

Leetcode 70 – Climbing Stairs (ways to reach the top)  
Leetcode 322 – Coin Change (minimize coins)  
Leetcode 1143 – Longest Common Subsequence  
Leetcode 300 – Longest Increasing Subsequence  
Leetcode 416 – Partition Equal Subset Sum  
Leetcode 312 – Burst Balloons (Matrix Chain Multiplication variant)

-------------------------------------------------
## ✅ Summary:

✔️ Break problem into subproblems  
✔️ Store solutions to avoid recomputation  
✔️ Time Complexity: Usually O(n), O(n²), or O(n × m)  
✔️ Space Complexity: O(n) or O(n × m)  
✔️ Use DP when brute force is too slow and problem has overlapping structure
