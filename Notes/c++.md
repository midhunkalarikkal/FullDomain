## `C++` ##
===========
C++ is a general-purpose, high-performance programming language. It was developed by Bjarne Stroustrup at Bell Labs starting in 1979. C++ is an extension of the C programming language, adding features such as classes, objects, and exceptions.

compile : g++ filename.cpp -o filename
execute : .\filename

<!-- 00:00:00 - 00:02:05  - Intro
00:02:05 - 00:05:07  - Welcome to C++ course
00:05:07 - 00:12:09  - Prerequisite and tools
00:12:09 - 00:21:59  - Understand the entry Point
00:21:59 - 00:29:17  - Compare the 2 Hello World
00:29:17 - 00:35:51  - Version history and official docs
00:35:51 - 00:44:31  - Return type and comments
00:44:31 - 00:50:57  - Redefine program in C++
00:50:57 - 00:55:22  - What is namespace in C++
00:55:22 - 01:00:18  - First iteration of program
01:00:18 - 01:08:10  - Can I name that
01:08:10 - 01:17:32  - Get the colour and assignment
01:17:32 - 01:28:13  - Your first intro to pointers
01:28:13 - 01:34:38  - Reference is the actual tough thing in C++
01:34:38 - 01:46:04  - C++ arrays are different with pointers
01:46:04 - 01:57:27  - A formal intro to integers
01:57:27 - 02:09:46  - Conditional and ternary
02:09:46 - 02:17:36  - Conditional as switch
02:17:36 - 02:32:46  - While and do-while loop
02:32:46 - 02:44:10  - For and range-based loop
02:44:10 - 02:58:04  - Loop with pointers and shortcuts
02:58:04 - 03:06:35  - Always use float with caution
03:06:35 - 03:17:00  - Why always divide by zero with try-catch
03:17:00 - 03:25:10  - Sneak peek to functions in C++
03:25:10 - 03:39:36  - Linkers qualifiers prefix and postfix
03:39:36 - 03:46:40  - Basics of operations
03:46:40 - 03:54:19  - Logical AND, OR, and NOT
03:54:19 - 04:01:18  - Bitwise operation in C++
04:01:18 - 04:09:49  - Memory leak in C++
04:09:49 - 04:21:36  - Get started with structs in C++
04:21:36 - 04:28:39  - Enums and preprocessors
04:28:39 - 04:36:17  - A challenge to strongly typed language
04:36:17 - 04:51:43  - Heap and stack memory
04:51:43 - 05:06:28  - Detailed intro to functions
05:06:28 - 05:17:18  - How to create header file in C++
05:17:18 - 05:21:39  - Your first intro to templates
05:21:39 - 05:28:39  - What are functional pointers
05:28:39 - 05:34:36  - nullptr saves the day
05:34:36 - 05:44:09  - Factorial and recursion are close friends
05:44:09 - 05:58:52  - Let's talk about MACROS
05:58:52 - 06:08:59  - Variadic templates and recursion
06:08:59 - 06:16:07  - A design example
06:16:07 - 06:23:52  - Get started with classes and objects
06:23:52 - 06:33:21  - Getters and setters for a data member
06:33:21 - 06:41:43  - Method separation and const-qualified methods
06:41:43 - 07:07:49  - Constructor, destructor, and rule of 3
07:07:49 - 07:10:28  - Disable the constructor
07:10:28 - 07:25:35  - THIS is not easy in C++
07:25:35 - 07:31:27  - Inheritance in my favorite
07:31:27 - 07:45:01  - Base class, derived class, and overriding
07:45:01 - 07:49:29  - Friend keyword comes with caution
07:49:29 - 07:52:34  - Multiple inheritance
07:52:34 - 07:59:35  - Polymorphism and virtual
07:59:35 - 08:04:10  - What are smart pointers
08:04:10 - 08:13:06  - Unique pointers and issues
08:13:06 - 08:16:54  - Shared pointers in smart pointers
08:16:54 - 08:20:24  - Weak pointers in smart pointers
08:20:24 - 08:32:48  - Move semantics, Lvalue, and Rvalue
08:32:48 - 08:48:13  - Vectors - Dynamic array
08:48:13 - 08:56:49  - Lambda - a small hello
08:56:49 - 09:04:47  - Create, rename, and delete files
09:04:47 - 09:13:39  - Reading and writing into files and MODES
09:13:39 - 09:23:30  - Introduction to STL
09:23:30 - 09:31:07  - Main components in STL
09:31:07 - 09:38:02  - Functions in STL
09:38:02 - 09:46:05  - Sort algorithm in STL
09:46:05 - 09:50:23  - Search algorithm in STL
09:50:23 - 09:57:01  - Partition and stable partition in STL
09:57:01 - 10:06:18  - Revisiting vectors in STL
10:06:18 - 10:24:25  - List in STL
10:24:25 - End of List -->

# `How C++ works`
=================
1. we write code in a .cpp file
2. Preproccessing -: The preprocessor handles all lines that begin  with # for example #include, #define
    Includes Header Files: Replaces #include directives with the actual content of the header files.
    Handles Macros: Processes macros defined using #define.
    Conditional Compilation: Includes or excludes parts of the code based on conditions.
    create a modified source code / preprocessed code with header included
3. Cmpilation -: The compiler like g++ takes the source code / preprocessed code and translate it to assembly language
    checks for syntax errors
    convert code to low level instructions
    creates a .s file
4. Assembly -: The assembler converts the assembly code in to machine code (binary)
    creates an object file with .o or .obj
4. Linking -: The linker combines the object file with other object files like librarues or functions used in <iostream>
    it resolve function calls like cout and main
    Produce the final executable file with .exe extension
5. While executing the code it loads in to memory and Runs line by line

# `Versions`
=============
C++ 03 2003 value int
C++ 11 2011 Lambda, null pointer, Rvalue reference
C++ 14 2014 generalised lambdas, variable template
C++ 17 2017 fold expressions
C++ 20 2020 Ranges library, Coroutines, Modules

# `Including libraries`
========================
In C++, we use the #include directive to include libraries or header files into our program. For example, to include the standard input/output library, we write:

#include <iostream>

# `Main function`
================
The entry point of a C++ program is the main function. Every C++ program must have a main function:

# `Input / Output`
====================
To perform input and output operations in C++, we can use the built-in objects std::cin for input and std::cout for output, available in the iostream library.

```cpp
#include <iostream>

int main() {
    int number;
    std::cout << "Enter an integer: ";
    std::cin >> number;
    std::cout << "You entered: " << number << '\n';
    return 0;
}
```

# `Identifiers`
=================
Identifiers are the words that we use to store the values
dont use number and underscor or double underscores in the starting of the identifier
start with only alphabet and in between we can use numbers and underscore or underscores
dont use reservced words as identifier
use meaning full names
seperate words in the identifier using camalcase or snakecase

# `Character literal`
======================
\n for new line
\t for horizontal tab space
\v for vertical tab space
lot more...........

# `Premitive data types`
==========================
Integer
-------
int : whole number 4 bytes
short : a shorter version of int 2 bytes
long a longer version of int, typically 4 to 8 bytes
long long : An even larger integer type,  typically 8 bytes

Character
---------
char : Represents a single character, typically 1 byte
wchar_t : Represents a wide character, often used for unicode characters, typically 2 to 4 bytes
char16_t : a character type for UTF-16
char32_t : a character type for UTF-32 encoded characters

Floating point
---------------
float : Representa floating point number with single precision, 4 bytes
double : Represents a double-precision floating point number, 8 bytes
long double : Represents higher precision floating point number

Boolean : true or false

Void : it is nothing not equal to 0

# `Statement`
=============
Its a single line of instruction which is terminated by a semicolumn

# `nEw line`
=============
\n is used to reate a new line
std::endl is also used to create a new line

```cpp
std::cout << "Hello world \n";
srd::cout << "Hello world" << std::endl; 
```

# `using namespace std`
=======================
In C++, things like cout, cin, and endl are part of the Standard Library, which is inside a namespace called std.

A `namespace` is like a label or folder that helps avoid name conflicts.

this is the line that is telling the program that from now, treat things like cout, cin, endl, etc... are coming from  the std namespace,

so that we dont need to specify the `std::` on each standard library items like cout, cin, endl, etc...

# `Control structures`
======================
C++ provides control structures for conditional execution and iteration, such as if, else, while, for, and switch statements.

# `Function`
============
Functions are reusable blocks of code that can be called with arguments to perform a specific task. Functions are defined with a return type, a name, a parameter list, and a body.

```cpp
ReturnType functionName(ParameterType1 parameter1, ParameterType2 parameter2) {
    // Function body
    // ...
    return returnValue;
}
```

# `Pointer`
===========
A pointer is a variable that stores the memory address of another variable.

```cpp
int *myPointer; // declaring a pointer

int x = 14; //initialization of varibale x
myPointer = &x; // now we are storing the memory address of x to the myPointer

int y;
y = *myPointer; // dereferencing
                // *myPointer means that go to that memory address , and get the value stored in that memory address
                // no the y will hold the same value of x
```