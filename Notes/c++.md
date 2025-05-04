## `C++` ##
===========
C++ is a general-purpose, high-performance programming language. It was developed by Bjarne Stroustrup at Bell Labs starting in 1979. C++ is an extension of the C programming language, adding features such as classes, objects, and exceptions.

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

```c++
#include <iostream>

int main() {
    int number;
    std::cout << "Enter an integer: ";
    std::cin >> number;
    std::cout << "You entered: " << number << '\n';
    return 0;
}
```

# `Variables & data types`
=============================
C++ has several basic data types for representing integer, floating-point, and character values:

int: integer values
float: single-precision floating-point values
double: double-precision floating-point values
char: single characters
bool: boolean values

Variables must be declared with a data type before they can be used:

```c++
int x;
float y;
double z;
char c;
bool b;
```

# `Control structures`
======================
C++ provides control structures for conditional execution and iteration, such as if, else, while, for, and switch statements.

# `Function`
============
Functions are reusable blocks of code that can be called with arguments to perform a specific task. Functions are defined with a return type, a name, a parameter list, and a body.

```c++
ReturnType functionName(ParameterType1 parameter1, ParameterType2 parameter2) {
    // Function body
    // ...
    return returnValue;
}
```