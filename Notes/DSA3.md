## `Tree` ##
==============
- A tree is a hierarchical and non linear datastructure that consist of nodes connected by edges
- Non linear structure allows quicker and easier access to the data
- A tree will not contain loops or cycle
- There is exactly one root node in a tree.
- Every node except the root has exactly one parent node, and each node can have zero or more child nodes.
- There is a unique path from the root node to any other node.

`Terminology`
---------------
- Parent: A node that has one or more children.
- Child: A node that has a parent.
- Root: The topmost node in a tree. It has no parent.
- Leaf: A node with no children.
- Sibling: Nodes that share the same parent.
- Ancestor: A node that is a parent, grandparent, etc., of another node.
- Descendent: A node that is a child, grandchild, etc., of another node.
- Path: A sequence of nodes and edges connecting a node with a descendant.
- Distance: The number of edges on the path between two nodes.
- Degree: The number of children of a node.
- Depth: The number of edges from the root to the node.
- Height: The number of edges from the node to the deepest leaf.
- Edge: A connection between two nodes.
- Subtree: A tree consisting of a node and its descendants.

`Types of Trees Based on Nodes`
---------------------------------
1. `Binary Tree`
-------------------
- A Binary Tree is a hierarchical data structure in which each node has at most two children, called the left child and the right child.
- Maximum nodes at level ‘l’ = 2^l  
- Maximum nodes in a binary tree of height ‘h’ = (2^(h+1)) - 1  
- A binary tree with only left or right children is a skewed tree (degenerate).  

`Complexity Analysis of Binary Tree`
-------------------------------------
`Access`  
   Time Complexity
      Best Case       : O(1)
      Average Case    : O(log n) – In balanced binary trees like AVL/Red-Black Trees.  
      Worst Case      : O(n) – In worst-case skewed trees.  
   Space Complexity   : O(1) – If iterative;  
                        O(h) – If recursive (due to call stack), where h is the height.

`Search`  
   Time Complexity   
      Best Case       : O(1)
      Average Case    : O(log n) – In balanced trees.  
      Worst Case      : O(n) – In unbalanced or skewed trees.  
   Space Complexity   : O(1) – Iterative;  
                        O(h) – Recursive.

`Insertion`  
   Time Complexity    
      Best Case       : O(1)
      Average Case    : O(log n) – In balanced trees.  
      Worst Case      : O(n) – In skewed trees.  
   Space Complexity   : O(1) – Iterative;  
                        O(h) – Recursive.

`Deletion`  
   Time Complexity   
      Best Case       : O(1) 
      Average Case    : O(log n)  
      Worst Case      : O(n)  
   Space Complexity   : O(h) – Due to recursion stack.

`Traversal` (Inorder, Preorder, Postorder, Level Order)  
   Time Complexity    : O(n) – Each node is visited once.  
   Space Complexity   : O(h) – Due to recursive calls or queue for level-order.


2. `Ternary Tree`
--------------------
- A ternary tree is a tree data structure in which each node has at most three children.
- The maximum number of nodes at level l is 3^l
- The maximum number of nodes in a ternary tree of height h is ((3^h+1) - 1) / 2

        A
      / | \
     B  C  D
    /|\    
   E F G

`Complexity Analysis Ternary Tree`
----------------------------------
`Insertion`, `Deletion`, `Search`
--------------------------------
Best Case: O(1)
Average Case: O(log₃ n)
Worst Case: O(log₃ n)
All types of traversal Time complexity - o(n)

`Space Complexity`
------------------
o(1) for insertion deletion and search
o(n) for all traversal

3 . `K-ary Tree`
-----------------
- A k-ary tree is a tree in which each node has at most k children. When k=2, it is a binary tree,when k=3, it is a ternary tree, and so on.
- The maximum number of nodes at level l is k^l
- The maximum number of nodes in a k-ary tree of height h is ((k^h+1) - 1) / k - 1

        A
    / | | \
   B  C  D  E

Complexity same as ternary tree





## `Predecessor` ##
====================
The predecessor of a node in a binary tree is the node that comes immediately before the given node in an in-order traversal of the tree.

`How to find the predecessor ?`
------------------------------------
1 . If the node has a left child:
The predecessor is the rightmost node in the left subtree of the given node.

2 . If the node does not have a left child:
Move up the tree to the nearest ancestor for which the current node lies in its right subtree; that ancestor is the predecessor.

## `Successor` ##
==================
The successor of a node in a binary tree is the node that comes immediately after the given node in an in-order traversal of the tree.

`How to Find the Successor ?`
------------------------------------------
1 . If the node has a right child:
The successor is the leftmost node (or the minimum node) in the right subtree of the given node.

2 . If the node does not have a right child:
Move up the tree to the nearest ancestor for which the current node lies in its left subtree; that ancestor is the successor.





## `Threaded Binary Tree` ##
============================
A Threaded Binary Tree is a variant of a binary tree where the NULL pointers (usually found in leaf nodes) are replaced with pointers to the node’s inorder predecessor or successor.

This technique offers two main advantages:

1. 🔁 **Faster In-order Traversal**  
   - By replacing NULLs with threads, we can traverse the tree in in-order without using a stack or recursion.

2. 🧠 **Reduced Memory Usage**  
   - Since no auxiliary stack or queue is required, memory usage is more efficient.

📌 Types of Threading:
   - **Single Threaded:** Threads point either to inorder predecessor or successor.
   - **Double Threaded:** Threads point to both inorder predecessor and successor.

💡 Use Case:
   - Efficient in-order traversal in memory-constrained environments.

`Time complexity` - Insertion Deletion Search and all traversals - all cases - o(n)





## `Types of Trees Based on Structure` ##
==========================================
1. Complete binary Tree
-------------------------
A complete binary tree in which all levels, except possibly the last, are fully filled, and all nodes are as far left as possible.
The height of a complete binary tree with n nodes is [log2 (n+1)] - 1

        A
       / \
      B   C
     / \  /
    D   E F

2. Full Tree
-------------
A full tree (or strictly binary tree) is a binary tree in which every node other than the leaf nodes has exactly two children.

        A
       / \
      B   C
     / \ / \
    D  E F  G

3. Perfect Tree
----------------
A perfect tree is a binary tree in which all internal nodes have exactly two children, and all leaf nodes are at the same level.

        A
       / \
      B   C
     / \ / \
    D  E F  G
   / \ / \ / \
  H  I J  K L  M


4. Degenerate Tree
-------------------
A degenerate tree (or pathological tree) is a tree where each parent node has only one child. This type of tree essentially resembles a linked list, as it has N nodes and 𝑁 − 1 edges, forming a single path from the root to the last node.

5. Left-Skewed Tree
------------------------
A left-skewed tree is a degenerate tree where every node has only a left child.
Operations such as search, insert, and delete have linear time complexity, O(n).

      A
     /
    B
   /
  C
 /
D

6. Right-Skewed Tree
-------------------------
A right-skewed tree is a degenerate tree where every node has only a right child.
Operations such as search, insert, and delete have linear time complexity, O(n).

A
 \
  B
   \
    C
     \
      D





## `Binary Search Tree (BST)` ##
================================
A Binary Search Tree (BST) is a type of binary tree that maintains a specific order property, making it efficient for searching, insertion, and deletion operations. A standard BST does not allow duplicates — each node must contain a unique key

To validate whether a given binary tree is a Binary Search Tree (BST), we need to ensure that for each node
---------------------------------------------------------------------------------------------------------------
The left subtree of a node contains only nodes with values less than the node's value.
The right subtree of a node contains only nodes with values greater than the node's value.
Both the left and right subtrees must also be binary search trees.

`Complexity Analysis of Binary Search Tree (BST)`
--------------------------------------------------
`Access`  
   Time Complexity:
      Best Case       : O(1) – Root node access.  
      Average Case    : O(log n) – Balanced BST.  
      Worst Case      : O(n) – Skewed BST.  
   Space Complexity:
      O(1) – Iterative.  
      O(h) – Recursive, where h is the height.
`Search`  
   Time Complexity:
      Best Case       : O(1) – Found at root.  
      Average Case    : O(log n)  
      Worst Case      : O(n)  
   Space Complexity:
      O(1) – Iterative.  
      O(h) – Recursive.
`Insertion`  
   Time Complexity:
      Best Case       : O(1) – Empty tree or direct insert.  
      Average Case    : O(log n)  
      Worst Case      : O(n)  
   Space Complexity:
      O(1) – Iterative.  
      O(h) – Recursive.
`Deletion`  
   Time Complexity:
      Best Case       : O(1) – Leaf node deletion.  
      Average Case    : O(log n)  
      Worst Case      : O(n)  
   Space Complexity:
      O(h) – Due to recursion stack.
`Traversal` (Inorder, Preorder, Postorder, Level Order)  
   Time Complexity    : O(n) – Every node is visited.  
   Space Complexity   : O(h) – Call stack or queue depending on method.


`Applications`
----------------
- BST enables efficient searching, insertion, and deletion operations — typically in `O(log n)` time for balanced trees.
- Used in compilers and interpreters for symbol tables, where identifiers are stored and accessed dynamically.
- Used for hierarchical data like directories and files by enabling quick lookups and insertions.
- BSTs (especially AVL or Red-Black Trees) are used to implement ordered indexes for fast data retrieval in database systems.
- Used in applications like ray tracing and spatial partitioning. 
- Used for Efficient route lookups and dynamic updates in routing tables.
- Used in AI decision trees, collision detection systems, and event-driven logic where sorted data needs quick updates.
- Allocating and deallocating memory blocks efficiently using ordered structures.

`Operations on Binary Search Tree (BST)`
------------------------------------------
1. Inserting
---------------
Inserting a node in a BST involves placing it in the correct position to maintain the order property.

Algorithm for Inserting
-----------------------
- Start at the root.
- Compare the value to be inserted with the value of the current node.
- If the value is less than the current node's value, move to the left child. If greater, move to the right child.
- Repeat until you find an empty spot (null position).
- Insert the new node at that position.

2 . Deletion
---------------
- Node to be deleted has no children (leaf node): Simply remove the node.
- Node to be deleted has one child: Replace the node with its child.
- Node to be deleted has two children: Find the in-order successor (smallest node in the right subtree) or in-order predecessor (largest node in the left subtree), replace the node's value with the successor/predecessor's value, and delete the successor/predecessor.

3 . Traversal
-----------------
Traversal refers to visiting all the nodes in the BST in a specific order. There are two main types: Depth-First Search (DFS) and Breadth-First Search (BFS).

3. 1. `Depth-First Search (DFS) Traversals`
--------------------------------------------
3. 1. 1. InOrder Traversal (Left, Root, Right)
-------------------------------------------------
BST InOrder Traversal :-  When performed on a Binary Search Tree (BST), InOrder traversal visits nodes in ascending order.

Applications
------------
Printing Elements in Sorted Order :-  Useful for retrieving data from a BST in sorted order.

K-th Smallest/Largest Element :-  By keeping a counter during traversal, we can find the k-th smallest or largest element.

Merging BSTs :-  To merge two BSTs, we can first perform an InOrder traversal on both trees to get sorted arrays and then merge the arrays into a new BST.

3. 1. 2. PreOrder Traversal (Root, Left, Right)
--------------------------------------------------
Applications
------------
Tree Copying/Cloning :-  PreOrder traversal can be used to create a copy of the tree.

Expression Trees :-  PreOrder traversal can be used to produce prefix notation (Polish notation) for expressions.

Serialization/Deserialization :-  PreOrder traversal is used to serialize the tree into a string or list and then deserialize it back into the tree structure.

Directory Structure: Used to list directory contents where the root directory is processed before subdirectories.

3. 1. 3. PostOrder Traversal (Left, Right, Root)
--------------------------------------------------
Applications
------------
Deleting a Tree :-  PostOrder traversal ensures that children are processed before their parent nodes, making it useful for safely deleting trees

Expression Trees :-  Used to evaluate expressions in postfix notation (Reverse Polish notation).

Dependency Resolution :-  Useful in scenarios where dependencies must be resolved before the parent task, such as build systems and task scheduling.

3. 2 `Breadth-First Search (BFS) Traversal`
----------------------------------------------
Level Order Traversal

Visits nodes level by level from top to bottom.
Uses a queue to keep track of nodes to be visited

`Algorithm`
------------
- Create an empty queue
- Enquque the root node
- while the queue is not empty:
   - Dequeue a node from the front of the queue
   - Read the nodes value
   - If the node has a left child, enqueue the left side
   - if the node has a right child, enqueue the right child

`Applications`
----------------
- Level Order Traversal of Trees
- Path Finding Algorithms in AI (e.g., in games)
- Shortest Path in Unweighted Graphs
- Web Crawlers
- Social Networking Sites (e.g., finding shortest connection path)
- GPS Navigation Systems
- Peer-to-Peer Networks (e.g., BitTorrent)
- Network Broadcasting
- Cycle Detection in Undirected Graphs
- Serialization/Deserialization of Trees





## `Extra trees` ##
====================
`Balanced Tree`
----------------
A tree is a balanced tree if the height difference between the left subtress and right subtrees of any node is at most one.

depth = |height(left subtree) - height(right subtree)| ≤ 1

`Balanced trees`
-----------------
1. AVL Tree
2. Red-Black Tree
3. Splay Tree
4. B- Tree
5. B+ Tree

`Unbalanced Tree`
-----------------
A tree is a unbalanced tree where the height difference between the left subtrees and right subtrees of some nodes is greater than 1.

`Unbalanced trees`
-------------------
1. Standard Binary Search Tree
2. Degenerate Tree
3. Skewed Tree

1. `AVL Tree`
-------------
A self-balancing binary search tree where the difference in heights of left subtrees and right subtrees of any node is at most one (0 or 1). This property ensures efficient search, insertion, and deletion operations.

2. `Red-Black Tree`
---------------------
- A self-balancing binary search tree where each node has an extra bit of information, stored as a color attribute. 
- Each node is either red or black.
- The root of the tree is always black.
- Red nodes cannot have red children.
- Balancing is done by rotaions and recolouring.

use cases - Linux , kernel , java collection framework

`Use of Color`
- Detect imbalance: If two red nodes appear in a row, it violates the rules.
- Balance automatically: Recoloring and rotating based on the colors help keep the tree's height O(log n).
- Ensure consistent search times: Maintains a reasonably balanced structure for efficient search, insert, and delete operations.

3. `Prefix Tree (Trie)`
--------------------------
A tree-like data structure used for efficient retrieval of keys and their associated values. Each node represents a possible prefix of keys, and the paths from the root to the leaves represent complete keys.

      (root)
       /   \
      c     b
     / \     \
    a   a     a
   /     \      \
  t       r       t
          |
          e

4. `M-way Search Tree`
------------------------
A generalized form of a binary search tree that allows for more than two children per node. The exact number of children is specified by the order 'M' of the tree.

5. `B- Tree`
------------
A self-balancing tree data structure that keeps data sorted and allows insertion searches, deletions in logarithmic time. It is designed to work on secondary storage devices like hard disks.

6. `B+ Tree`
-------------
A variant of the B-tree data structure where all keys and records are stored in leaf nodes, and internal nodes only store keys to guide the search. This structure is optimized for indexing and database systems.

7. `Spaly tree`
----------------
A Splay Tree is a self-adjusting binary search tree with the unique property that recently accessed elements are quick to access again. It achieves this by performing a series of tree rotations, known as splaying, to move the accessed element to the root of the tree.

8. `Suffix tree`
----------------
A tree-like data structure used for efficient retrieval of all possible suffixes of a string. Each node represents a possible suffix of the string, and the paths from the root to the leaves represent complete suffixes. It is widely used in string processing tasks like substring search, pattern matching, and finding the longest repeated substring.

  (root)
        |
        b → banana
        |
        a → anana
        |
        n → nana
        |
        a → ana
        |
        n → na
        |
        a → a





## `Heap` ##
==============
A **Heap** is a specialized tree-based data structure that satisfies the **Heap Property**.

- In a **Max Heap**: Every parent node has a value **greater than or equal to** its children.
- In a **Min Heap**: Every parent node has a value **less than or equal to** its children.
- It is a **complete binary tree**: All levels are completely filled except possibly the last, which is filled from left to right.
- Heaps are commonly implemented using **arrays**.

`Advantages of Heaps`
----------------------
Efficient Priority Queue Operations
Balanced Tree Structure
Heap Sort

`Disadvantages of Heaps`
-------------------------
Not Suitable for Searching
Complex Implementation

`Applications of Heaps`
------------------------
- **Heap Sort** – Efficient sorting algorithm.
- **Priority Queue** – Fast access to highest/lowest priority element.
- **Dijkstra’s Algorithm** – For shortest path.
- **Job Scheduling Algorithms** – OS-level task prioritization.
- **Median Maintenance** – Using two heaps to maintain median in streaming data.
- **Memory Management** – Dynamic memory allocation systems.

`Time Complexity`
------------------
- Insertion: O(log n) – Inserting an element into a heap requires maintaining the heap property, which may involve percolating the element up the tree.
- Deletion (usually of the root): O(log n) – Deleting the root requires replacing it with the last element and percolating down.
- Peek (get max or min): O(1) – Accessing the root element is a constant time operation.
- Heapify: O(n) – Converting an array into a heap.
- Heap Sort: O(n log n) – Sorting an array using the heap data structure.

`Min-Heap applications`
-------------------------
Priority Queue
Dijkstra's Shortest Path Algorithm
Huffman Coding

`Max-Heap applications`
------------------------
Priority Queue
Heap Sort
Finding the k-th Largest Element

`Heapify`
-----------
Heapify is the process of converting a binary tree into a heap (either min heap or max heap). There are two primary approaches to heapifying a binary tree

`Bottom-Up Heapify ( also called HeapifyDown, shift-down or bubble-down)`
-----------------------------------------------------------------------
- Bottom-Up Heapify starts from the last non-leaf node and works its way up to the root.
- For each node it will check the heap property.
- This approach is efficient because it starts from the lowest level of the tree, fixing smaller subtrees first.
- The time complexity of Bottom-Up Heapify is O(n), where n is the number of elements in the heap.
- Using after deletion, typically after removing the root.

`Top-Down Heapify ( also called HeapifyUp, shift-up or bubble-up)`
----------------------------------------------------------------
- Top-Down Heapify starts from the root and works its way down the tree.
- For each node it will check the heap property.
- This approach is typically used when inserting an element into an already heapified structure.
- The time complexity of Top-Down Heapify is O(logn).





## `Heap Sort` ##
====================
Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure to sort elements. The algorithm can be divided into two main phases:

Building a Heap: The algorithm first converts the input array into a heap structure. For ascending order sorting, a max heap is used, where the largest element is at the root. For descending order sorting, a min heap is used, where the smallest element is at the root.

Sorting the Elements: The algorithm repeatedly extracts the maximum (or minimum) element from the heap and places it at the end of the array. After each extraction, the heap property is restored. This process continues until all elements have been removed from the heap and placed in the sorted order.

`Advantages`
----------------
Efficient Time Complexity :  O(n log n) in both average and worst cases.
In-Place Sorting :  Requires no additional storage
No Worst-Case Scenarios :  Guarantees performance even in the worst-case scenario.
Works Well with Large Datasets :  Suitable for large amounts of data.
Supports Priority Queue Operations :  Useful for implementing priority queues and similar data 

`Heap Sort Real-World Applications`
-------------------------------------
Priority Queues
Task Scheduling Systems
Graph Algorithms (e.g., Dijkstra's Algorithm)
Event-Driven Simulation
Median Maintenance

`Complexity`
-----------------
Time Complexity
---------------
Building the Heap : O(n)
Sorting the Heap :  O(n log n)

Space Complexity
---------------
In-Place Sorting :  O(1) (excluding the space used for the input array)





## `Trie` ##
==============
A Trie is a specialized tree-like data structure that is used primarily for storing strings. Each node in a Trie represents a single character of a string, and by traversing the tree from the root to a leaf node, one can spell out a complete word.

`Advantages of Trie`
----------------------
Efficient Search
Prefix Matching
Suffix matching
Space Efficiency

`Disadvantages of Trie`
-------------------------
Space Complexity: Despite being space-efficient for common prefixes, Tries can still consume a lot of memory, especially if the dataset contains many unique strings with few common prefixes.

Complex Implementation: Tries are more complex to implement compared to simpler data structures like arrays, hash tables, or binary search trees.

Slower for Non-Prefix Queries: Tries are not as efficient as hash tables for queries that do not involve prefixes.

`Time and Space Complexity`
-----------------------------
Insertion :-
Time Complexity: O(m), where m is the length of the string being inserted.
Space Complexity: O(m * n), where m is the average length of the strings and n is the number of strings (in the worst case when there are no common prefixes).

Search :-
Time Complexity: O(m), where m is the length of the string being searched.
Space Complexity: O(1) additional space.

Deletion :-
Time Complexity: O(m), where m is the length of the string being deleted.
Space Complexity: O(1) additional space.

Space Complexity :- 
 The overall space complexity for a Trie is O(ALPHABET_SIZE * m * n) in the worst case, where ALPHABET_SIZE is the number of possible characters, m is the average length of the strings, and n is the number of strings.

`Suffix Trie`
---------------
A suffix trie is a compressed trie containing all the suffixes of a given string. It is used for fast 
pattern searching within a string.

ROOT
 ├── a
 │    └── p
 │         └── p
 │              └── l
 │                   └── e
 ├── p
 │    └── p
 │         └── l
 │              └── e
 ├── p
 │    └── l
 │         └── e
 ├── l
 │    └── e
 └── e

`Suffix Trie Applications`
---------------------------
Pattern matching in bioinformatics (DNA sequences)  
Substring search (e.g., does 'ana' exist in 'banana'?)  
Finding longest repeated substrings  
Plagiarism detection  
Compression algorithms (LZ-based techniques)

`Prefix Trie (Standard Trie)`
-----------------------------
A prefix trie (also called a standard trie) is a tree data structure used to store a set of strings where
each path from the root to a node represents a prefix of a word. It is optimized for prefix-based lookups.

ROOT
 └── a
      └── p
           └── p
                └── l
                     └── e

`Prefix Trie (Standard Trie) Applications`
--------------------------------------------
Autocomplete search (Google search bar, code editors)  
Spell checking and suggestion  
IP routing (longest prefix match)  
Dictionary word lookups  
Text prediction in messaging apps





## `Graph` ##
==============
A graph is a data structure consisting of a set of vertices and a set of edges that connect pairs of vertices. Graphs can be used to model a wide range of problems, such as social networks, transportation systems, and dependency structures.

Trees are a specific type of GRAPH dasastructure

`Vertex and Edge`
--------------------
Vertex: A vertex is a fundamental unit of a graph, representing a point where edges meet.

Edge: An edge is a connection between two vertices. It can be directed or undirected, weighted or unweighted, depending on the type of graph.

`Graph Representations`
--------------------------
1 . `Adjacency List`
--------------------
An adjacency list represents a graph as an array or a list of lists, where each list corresponds to a vertex and contains a list of adjacent vertices.

Space Complexity: O(V + E), where V is the number of vertices and E is the number of edges.

Time complexity
---------------
Add Edge: O(1)
Remove Edge: O(E/V)
Check if an Edge Exists: O(V)

Advantages: Space-efficient for sparse graphs, easy to iterate over neighbors.

Disadvantages: Not as efficient for dense graphs or direct edge lookups.

2 . `Adjacency Matrix`
----------------------
An adjacency matrix is a 2D array of size V x V, where the cell at row i and column j indicates the presence (and possibly the weight) of an edge between vertex i and vertex j.

Space Complexity: O(V^2).

Time complexity
---------------
Add Edge: O(1)
Remove Edge: O(1)
Check if an Edge Exists: O(1)


Advantages: Fast edge lookup, good for dense graphs.

Disadvantages: Can be space-inefficient for sparse graphs.

`Types of Graphs`
--------------------
Unidirectional (Directed Graph)
----------------------------------
A directed graph (or digraph) is a graph where edges have a direction, meaning they go from one vertex to another specific vertex.

Bidirectional (Undirected Graph)
----------------------------------
An undirected graph is a graph where edges have no direction, meaning the connection between vertices is mutual.

Cyclic Graph
------------
A cyclic graph contains at least one cycle, which is a path that starts and ends at the same vertex.

Disconnected Graph
------------------
A disconnected graph is a graph where not all vertices are connected by edges. The graph consists of two or more disconnected subgraphs.

Weighted Graph
-----------------
A weighted graph assigns a weight (or cost) to each edge, often representing distance, cost, or capacity.

Unweighted Graph
--------------------
An unweighted graph treats all edges as having equal weight, typically used when only connectivity matters.

Bipartite Graph
-------------------
A graph whose vertices can be divided into two disjoint sets X and Y such that every edge connects a vertex in X to one in Y.

`Graph Traversal`
---------------------
Breadth-First Search (BFS)
---------------------------
BFS is a graph traversal algorithm that explores vertices level by level, starting from a source vertex and exploring all its neighbors before moving on to their neighbors.

Time Complexity: O(V + E)
Space Complexity: O(V)

Depth-First Search (DFS)
---------------------------
Depth-First Search (DFS) is a graph traversal algorithm that explores as deeply as possible along each branch before backtracking. It uses a stack (either explicitly or through recursion) to keep track of the nodes to be visited next and the current traversal path.

Time Complexity: O(V + E)
Space Complexity: O(V) (for recursion stack or an explicit stack)

`Advantages of Graphs`
-------------------------
Flexible Data Representation
Support for Complex Relationships
Rich Set of Algorithms

`Disadvantages of Graphs`
---------------------------
Complexity
Space Requirements
Performance Overheads

`Complexity`
------------------
Adjacency List
--------------
Time complexity for all operation is constant except removeVertex operation
Space Complexity: O(V + E)
Insertion: O(1)
Deletion: O(E) (for a specific edge, worst case)

Adjacency Matrix
----------------
Space Complexity: O(V^2)
Insertion: O(1)
Deletion: O(1)

Graph Traversal
---------------
BFS/DFS Time Complexity: O(V + E)
Space Complexity: O(V)

`Adjacency matrix vs Adjacency list`
----------------------------------------
With an adjacency list we only need to store the values for the edges that exist withadjacency matrix. you store values irrespective of whether an edge  exist or not. Storage wise an adjacency list is way more efficient

With adjacency list inserting and finding adjacent nodes is constant time complexity where as with adjacency matrix, it is linear time complexity

An adajcency list allows you to store additional values with an edge such as a weight of the edge. with adjacency  matrix such information would have to be stored externally	





## `Applications` ##
=====================
1. Binary Tree
----------------
Expression Trees
Hierarchical Data Storage (e.g., file systems)
Routing Algorithms
Decision Trees
Morse Code Representation

2. Binary Search Tree (BST)
----------------------------
Databases
Autocomplete Systems
Symbol Tables in Compilers
Version Control Systems
Implementing Sets and Maps

3. Heap
----------
Priority Queues
Scheduling Algorithms (e.g., CPU scheduling)
Graph Algorithms (e.g., Dijkstra’s algorithm)
Memory Management (e.g., garbage collection)
Event Simulation Systems

4. Heap Sort
--------------
External Sorting (when data is too large for memory)
Load Balancing
Embedded Systems
Disk Scheduling Algorithms
Real-Time Systems

5. Trie
----------
Autocomplete Systems
Spell Checkers
IP Routing (longest prefix matching)
DNA Sequence Matching
Keyword Matching in Search Engines

6. Graph
-----------
Social Networks
Transportation Networks (e.g., roads, railways)
Internet (routing and web page linking)
Electrical Circuits
Game Maps (pathfinding and connectivity)