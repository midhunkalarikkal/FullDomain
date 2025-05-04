## `C++` ##
===========
C++ is a general-purpose, high-performance programming language. It was developed by Bjarne Stroustrup at Bell Labs starting in 1979. C++ is an extension of the C programming language, adding features such as classes, objects, and exceptions.

 <!-- Get the colour and assignment -->

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