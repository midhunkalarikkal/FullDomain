# Step 1: Install TypeScript globally
node -v
npm -v
npm install -g typescript

# Step 2: Create a project folder and initialize npm
mkdir my-typescript-project
cd my-typescript-project
npm init -y

# Step 3: (Optional) Create a tsconfig.json file
tsc --init

# Step 4: Write TypeScript code in index.ts

# Step 5: Compile TypeScript code
tsc index.ts

# Step 6: Run the compiled JavaScript code
node index.js

# Step 7: (Optional) Install and use ts-node to run TypeScript directly
npm install -g ts-node
ts-node index.ts

1 . What is TypeScript?
--------------------------
TypeScript is an open-source programming language developed by Microsoft that is a superset of JavaScript. It adds static typing and object-oriented features to JavaScript, meaning that TypeScript code can be checked for type errors before runtime. TypeScript ultimately compiles down to plain JavaScript, which can be run in any browser or JavaScript engine.

TypeScript uses the JavaScript syntaxes and adds additional syntaxes for supporting Types.

Why typescript
----------------
The main goals of TypeScript are:

Introduce optional types to JavaScript.
Implement planned features of future JavaScript

Detects error without running it.

Compilation process removes all the types.

Types increase productivity by helping you avoid many mistakes. By using types, you can catch bugs at the compile time instead of having them occur at runtime.

The following tools you need to set up to start with TypeScript
---------------------------------------------------------------
Node.js – Node.js is the environment in which you will run the TypeScript compiler.

TypeScript compiler – a Node.js module that compiles TypeScript into JavaScript.

Visual Studio Code or VS Code – a code editor supporting TypeScript. VS Code is highly recommended. However, you can use your favorite editor.

A TypeScript compiler compiles the TypeScript into JavaScript.
Use the tsc command to compile a TypeScript file to a JavaScript file.
Use the ts-node module to run TypeScript directly on Node.js without precompiling it to JavaScript.

2 . Key Features
-----------------
Optional Static Typing: You can define types for variables, function parameters, and return values.

Compilation: TypeScript code is compiled (transpiled) to JavaScript.

ESNext Features: Supports new JavaScript features from ES6 and beyond, ensuring backwards compatibility.

Object-Oriented Programming: Supports classes, interfaces, inheritance, and other OOP concepts.

3 . Advantages of TypeScript
-----------------------------
Static Typing: Helps catch errors during development by enforcing types

Improved Developer Experience: Provides better code navigation, autocompletion, and refactoring tools due to static analysis.

Large-scale Applications: TypeScript is better suited for large codebases as it helps in maintaining complex systems with strict type checking.

Early Bug Detection: Since types are enforced, many potential bugs are caught during development rather than at runtime.

Future-proofing: TypeScript includes features from future versions of JavaScript (ESNext).

4 . Disadvantages of Typescript
--------------------------------
Learning Curve: Developers need to learn the syntax of TypeScript, which can feel more rigid than plain JavaScript.

Compilation Step: You must compile TypeScript into JavaScript before it runs in the browser, which adds an extra step to the development process.

Verbosity: TypeScript code can sometimes be more verbose than JavaScript, as you have to define types explicitly.

Tooling Dependency: TypeScript requires additional tooling, like tsc (TypeScript compiler), which adds complexity to the development setup.

5 . Statically Typed Language	
------------------------------
A statically typed language is one in which the types of variables (e.g., string, number, boolean) are known at compile time, rather than at runtime. This means you must declare the type of a variable before using it, and the type cannot change later.

Dynamically Typed Language: The type of a variable is determined at runtime. You do not need to declare the type explicitly, and the type of a variable can change as the program runs. Errors related to types may only appear when the program is running.

6 . Difference Between JavaScript and TypeScript
------------------------------------------------
Typing
-------
JavaScript: Uses dynamic typing (no static types).
TypeScript: Uses static typing (optional, but recommended).

Compilation
-------------
JavaScript: No compilation needed; it runs directly in the browser.
TypeScript: Needs to be compiled into JavaScript.

Error Checking
--------------
JavaScript: Errors are detected at runtime.
TypeScript: Errors are caught during development (compile time).

Object-Oriented Programming (OOP)
----------------------------------
JavaScript: Supports basic OOP with prototypes.
TypeScript: Supports full OOP features like classes, interfaces, inheritance, etc.

Tooling
---------
JavaScript: Minimal tooling is needed.
TypeScript: Requires the TypeScript compiler (tsc).

Code Complexity
---------------
JavaScript: Less verbose but more prone to runtime errors.
TypeScript: More verbose, but type checking reduces the risk of errors.

7 Types
--------
A type is a way to define the structure, behavior, and constraints of variables, objects, functions, etc. It helps in catching errors during development by ensuring that values assigned to variables are of the correct type.

7 . 1 Primitive types
---------------------
number
string
Boolean
null
undefined
symbol
bigint

7 . 2 Non primitive types
--------------------------
array
tuple
object
function
Enum

7 . 3 special types
--------------------
any
unknown
void
never
union |
intersection &

8 . Annotaion in typescript
---------------------------
TypeScript uses type annotations to specify explicit types for identifiers such as variables, functions, objects, etc.

it uses : syntax after an identifier as the type annotation

Once an identifier is annotated with a type, it can be used as that type only. if the identifier used as a different type the typescript compiler will issue an error.

use the type annotation in the following cases:

When you declare a variable and assign it a value later.
When you want a variable that can’t be inferred.
When a function returns the any type and you need to clarify the value.

8 . 1 . Implicit and Explicit Types
------------------------------------
Implicit Types : When TypeScript automatically infers the type of a variable based on its value

let name = "John";  // TypeScript infers that `name` is a string.

Explicit Types: You explicitly define the type of a variable.

let age: number = 25;  // `age` is explicitly defined as a number.

8 . 2 . Type inference
-----------------------
Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them.

TypeScript uses the best common type algorithm to select the best candidate types that are compatible with all variables.
 
Type inference means that typescript guesses the type

8 . 3 contextual typing
------------------------
TypeScript uses the locations of variables to infer their types.

8 . 4 . Type number
-------------------
All numbers in TypeScript are either floating-point values or big integers. The floating-point numbers have the type number while the big integers get the type bigint.

Floating point
---------------
let num : number;
let num : number = 99.5;

As in JavaScript, TypeScript supports the number literals for decimal, hexadecimal, binary, and octal literals:

Decimal
--------
let num : number = 100

Binary
-------
use 0b or 0B leading to the binary
let bin = 0b001

Octal
------
An octal number uses a leading zero followed by the letter o like 0o
The digits after 0o are numbers in the range 0 through 7

let octal : number = 0o11l;

Hexadecimal
-------------
Hexadecimal numbers use a leading zero followed by a lowercase or uppercase letter X like 0x or 0X
The digits after the 0x must be in the range (0123456789ABCDEF)

let hex : number = 0x12AAB;

Bigint
-------
BigInt that allows you to represent whole numbers larger 2^53 - 1
To make a BigInt, you append n to the end of the number literal

let bigintnum: bigint = 123456154234675674564n;

8 . 5 . Type string
--------------------
Like JavaScript, TypeScript uses double quotes (") or single quotes (') to surround string literals

TypeScript also supports template strings that use the backtick (``) to surround characters.

The template strings allow you to create multi-line strings and provide the string interpolation features.

let name : string = "midhun"

let name : string = 'midhun'

let description : string = `hi hello,
how are you,
and what do you do ?
`;

console.log(`Hi ${name}`);

8 . 6 . Type boolean
---------------------
The TypeScript boolean type has two values: true and false. The boolean type is one of the primitive types in TypeScript.

Declaring boolean variables
----------------------------
let active : booelan = false;

Boolean operators
------------------
&& - logical AND
|| - Logical OR
!  - Logical NOT

8 . 7 . Type object
---------------------
The TypeScript object type represents all values that are not in primitive types.

Example
---------
let person : {
	id : number, 
	name : string 
};

person = {
	id : 1, 
	name : "Midhun" 
}

object Methods
----------------
Methods are functions defined inside an object.
You can define methods with specific parameter and return types in TypeScript.

let person = {
  name: "Midhun",
  greet: function (): string {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.greet());  // Outputs: "Hello, my name is Midhun"

Here, greet is a method of the person object, and it returns a string.

Empty type {}
---------------
TypeScript has another type called empty type denoted by {} , which is quite similar to the object type.

The empty type {} describes an object that has no property on its own. If you try to access a property on such an object, TypeScript will issue a compile-time error

8 . 8 . Type array
--------------------
A TypeScript array is an ordered list of data. To declare an array that holds values of a specific type

let arrayName: type[];

Example
--------
1d array
let names : string[] = []

2d array
let nums : number[][] = []

Typescript array have the same properties like javascript

Storing values of mixed types
------------------------------
illustrates how to define an array that holds both strings and numbers:

let scores : (string | number)[];
scores = ["coding",10,'dev','8']

8 . 9 . Type unknown
---------------------
In TypeScript, the unknown type can hold a value that is not known upfront but requires type checking.

let result : unknown;

Like the any type, you can assign any value to a variable of the unknown type.

Unlike the any type, TypeScript checks the type before performing operations on it.

For example, you cannot call a method or apply an operator on a unknown value. If you attempt to do so, the TypeScript compiler will issue an error

8 . 10 . Type-assertion 
-------------------------
if a variable is declared as unknown , we need to explicitly tell to the compiler what type is that variable before performing any operation

8 . 11 . Type tuple
-------------------
A tuple works like an array with some additional considerations:

The number of elements in the tuple is fixed.
The types of elements are known, and need not be the same.

let skill : [string , number];
skill = ['programming',5]

The order of values in a tuple is important. If you change the order of values typescript compiler will issue an error

skill = [5, 'programming']  // make an error

For this reason, it’s a good practice to use tuples with data that are related to each other in a specific order.

For example, you can use a tuple to define an RGB color that always comes in a three-number pattern:

Since TypeScript 3.0, a tuple can have optional elements specified using the question mark (?) postfix.

let rgbs  : [number, number, number , number?] // fourth one is optional

8 . 12 . Type Enum
------------------
An enum is a group of named constant values. Enum stands for enumerated type.

Enum month {jan , feb, ........., dec}

in this the Enum name is month and the constant values are jan to dec

it also include a value to constant from 0 , we can change it to any other number and the rest will follow it

if we are using string Enum in a function we can also use number while calling that function

8 . 13 . Type any
-------------------
The any type in TypeScript is a special type that allows you to opt-out of type checking for a variable. When you declare a variable with the any type, it can hold values of any type (string, number, object, array, etc.), and you can perform any operations on it without TypeScript raising type errors.

If you declare a variable without specifying a type, TypeScript assumes that you use the any type.

Advantages are :- flexibility , Ease of migration and Avoiding type error

When dealing with data from external sources, such as APIs or databases, where the structure or types of the data are not guaranteed

8 . 14 Type void
-----------------
The void type denotes the absence of having any type at all. Typically, you use the void type as the return type of functions that do not return a value. 

It is a good practice to add the void type as the return type of a function or a method that doesn’t return any value. By doing this, you can gain the following benefits:

Improve clarity of the code and ensure type save

Notice that if you use the void type for a variable, you can only assign undefined to that variable. In this case, the void type is not useful.

8 . 15 . Type union
--------------------
A union type describes a value that can be one of several types, not just two. For example number | string | boolean is the type of a value that can be a number, a string, or a boolean.

8 . 16 . Type alias
--------------------
In TypeScript, a type alias allows you to create a new name for an existing type.

Type aliases can be useful for:

Simplifying complex types.
Making code more readable.
Creating reusable types that can be used in many places in the codebase.

type alias = existingType;

8 . 17 . Type string literals
------------------------------
A string literal type means that a variable can only hold one specific string value, and no other values.

let a : 'click';
a = 'click'
a = 'str' // error

union of string literal
-----------------------
let direction : "up" | "down" | "left" | "right";

8 . 18 . Type never
--------------------
The never type in TypeScript represents a type that never holds any value.

It is like an empty set in mathematics, meaning there is no possible value that can belong to this type.

can use the never type to represent the return type of a function that never returns the control to the caller. Example a function always throws an error

8 . 19 . Type Intersection
--------------------------
Intersection Types combine multiple types into one. The resulting type must satisfy all combined types.

You define an intersection type using the & symbol.

type Person = { name: string };
type Employee = { employeeId: number };
type Worker = Person & Employee;

let worker: Worker = {
  name: "John",
  employeeId: 123
};

In this example, Worker must have all properties from both Person and Employee types.

8 . 20 Nullable Type
-------------------
nullable type is a type that can hold either a specific type or a null or undefined value. 

let name: string | null = null;  // `name` can be a string or null
name = "Midhun";                 // Now it's a string

In this case, name can be either a string or null.

9 . Optional Property, optional parameter, optional Call
---------------------------------------------------------
In TypeScript, we can mark object properties, function parameters, or methods as optional using the ? symbol.

Optional property
-----------------
interface Person {
  name: string;
  age?: number;  // Optional property
}

let person: Person = { name: "John" };  // `age` is optional

Optional parameter in functions
--------------------------------
function greet(name: string, message?: string) {
  console.log(`${message || "Hello"}, ${name}`);
}

greet("Midhun");          // Outputs: "Hello, Midhun"
greet("Midhun", "Hi");    // Outputs: "Hi, Midhun"

Optional Call: If an object method is optional, you can call it only if it's defined.
--------------------------------------------------------------------------------------
if the method is defined it will be called and if it is not the code will not throw an error and nothing will happen

let person = {
  name: "John",
  greet?: () => console.log("Hello!")
};

person.greet?.();  // Safe call (will only run if `greet` is defined)

10 . Interface
----------------
An interface in TypeScript defines the structure that an object or class must adhere to. It acts as a blueprint for the shape of the data, specifying the properties and methods that an object can have.

interface Car {
  brand: string;
  model: string;
  start(): void;
}

let myCar: Car = {
  brand: "Tesla",
  model: "Model 3",
  start: () => console.log("Car started!")
};

we can say that type alias and intersection as same but we can perform extends in intersection

10 . 1 . interface extends
---------------------------
here we are extending the car interface to vehicle

interface vehicle extends car {
	cc : number,
	colour : string
}

10 . 2 . Reopening Interface
-------------------------
TypeScript allows reopen an interface to extend or add new properties. This allows multiple declarations of the same interface to be merged.

interface Person {
  name: string;
}

interface Person {
  age: number;
}

let individual: Person = {
  name: "Midhun",
  age: 25
};

11 . Class
-----------
A class in TypeScript is a blueprint for creating objects that encapsulate properties and methods to define the behavior and state of objects.

Example
--------
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number) {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

let dog = new Animal("Dog");
dog.move(10);  // Outputs: "Dog moved 10 meters."

11 . 1 . Access Modifiers
-------------------------
Access Modifiers control the visibility and accessibility of properties and methods in a class.

static
------
Members marked as static belong to the class itself rather than to instances of the class. They can be accessed without creating an instance of the class.

Example
-------
class Example {
    static count: number = 0;

    constructor() {
        Example.count++;
    }

    static getCount(): number {
        return Example.count;
    }
}

const instance1 = new Example();
const instance2 = new Example();
console.log(Example.getCount());  // 2

public
------- 
Members marked as public are accessible from anywhere in the code.


private
--------
Members marked as private are only accessible within the class itself. They cannot be accessed from outside the class or by subclasses.

protected
---------
Members marked as protected are accessible within the class and its subclasses (derived classes). They are not accessible from outside the class hierarchy.

11 . 2 . Abstract Class
-----------------------
An abstract class in TypeScript is a class that cannot be instantiated directly. Instead, it is intended to be used as a base class from which other classes can derive. Abstract classes can contain both abstract methods (methods that do not have an implementation and must be implemented in derived classes) and regular methods (methods with implementation).

Example
---------
abstract class Animal {
  abstract makeSound(): void;   // Abstract method, must be implemented in subclass
  
  move(): void {
    console.log("The animal moves.");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

let dog = new Dog();
dog.makeSound();  // Outputs: "Woof! Woof!"
dog.move();       // Outputs: "The animal moves."

11 . 3 . inheritance
---------------------
Inheritance is a mechanism in OOP that allows one class (the derived or child class) to inherit properties and methods from another class (the base or parent class). This promotes code reusability and establishes a hierarchical relationship between classes.

11 . 4 . Abstraction
---------------------
Abstraction is the concept of hiding the complex implementation details of an object and exposing only the essential features. It allows users to interact with an object without needing to understand its internal workings.

can achieve abstraction using abstract classes and interfaces

11 . 5 . Encapsulation
-----------------------
Encapsulation is the principle of bundling the properties and methods that operate on that data into a single unit, typically a class. It also restricts direct access to some of the object's components, which is a means of preventing unintended interference and misuse.

use access modifiers (public, private, protected) to control the visibility of class members.

11 . 6 . Polymorphism
----------------------
Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables flexibility and extensibility in code by allowing methods to be overridden in subclasses. TypeScript supports polymorphism through method overriding.

11 . 7 . Method overriding
---------------------------
Method Overriding in TypeScript is a feature that allows a subclass to provide a specific implementation of a method that is already defined in its superclass. This enables you to define behaviors that are specific to the subclass while still maintaining the same method name and signature.

The method in the subclass must have the same name, return type, and parameters as the method in the superclass.

we can use super keyword for calling the base class methods

11 . 8 . Method overloading
---------------------------
TypeScript allows you to define multiple methods with the same name but different parameters (different type signatures) within the same class. This is useful for providing different functionalities based on the input parameters without needing to change the method name.

11 . 9 . Getters and Setters
-----------------------------
They allow for controlled access to class properties and can include additional logic when retrieving or setting a value

Getter : getting a value
Setter : setting a value

Example
--------
class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age(): number {
    return this._age;
  }

  set age(newAge: number) {
    if (newAge >= 0) {
      this._age = newAge;
    } else {
      console.log("Invalid age");
    }
  }
}

let person = new Person(25);
console.log(person.age);  // Getter: Outputs 25
person.age = 30;          // Setter: Updates age to 30

11 . 10 . Difference Between Class and Abstract Class
------------------------------------------------------
Class
-------
Can be instantiated directly.
May or may not contain methods or properties.
Provides full implementation for methods.
Used to create objects directly.

Abstract Class
---------------
Cannot be instantiated directly.
Serves as a base class for other classes.
Can contain abstract methods, which do not have an implementation and must be implemented by subclasses.
Helps define a common blueprint or contract for subclasses.

12 . Generics in TypeScript
----------------------------
Generics in TypeScript allow to create reusable components that can work with a variety of data types while maintaining type safety. It provides a way to define functions, classes, and interfaces with a placeholder (called a type variable, typically T) that can be substituted with specific types when used.

12 . 1 . Generic Function
--------------------------
A generic function can work with different data types while still maintaining type safety.

Example
--------
function identity<T>(value: T): T {
  return value;
}

// Using the generic function
let numberIdentity = identity<number>(42);   // Works with numbers
let stringIdentity = identity<string>("Hello!");   // Works with strings

console.log(numberIdentity);   // Outputs: 42
console.log(stringIdentity);   // Outputs: "Hello!"

T is a generic type parameter, which can be replaced by any type (e.g., number, string).
The function identity will return the same type that was passed to it.

12 . 2 . Generic Classes
-------------------------
A class can also be made generic by using a type variable.

Example
--------
class Box<T> {
  content: T;

  constructor(content: T) {
    this.content = content;
  }

  getContent(): T {
    return this.content;
  }
}

// Using the generic class
let numberBox = new Box<number>(100);   // Box with number type
let stringBox = new Box<string>("Books");  // Box with string type

console.log(numberBox.getContent());   // Outputs: 100
console.log(stringBox.getContent());   // Outputs: "Books"

Box<T> is a generic class, where T can represent any type.
You can create instances of the class with specific types (e.g., number, string).

12 . 3 . Generic Interface
---------------------------
Can also define interfaces using generics, making them adaptable to different types.

Example
----------
interface Pair<T, U> {
  first: T;
  second: U;
}

let stringNumberPair: Pair<string, number> = { first: "Age", second: 25 };
let booleanNumberPair: Pair<boolean, number> = { first: true, second: 100 };

console.log(stringNumberPair);  // Outputs: { first: "Age", second: 25 }
console.log(booleanNumberPair); // Outputs: { first: true, second: 100 }

The interface Pair<T, U> allows you to create objects with two different types (T and U).
In this example, stringNumberPair uses string and number, while booleanNumberPair uses boolean and number.

12 . 4 . Generic Constraints
-----------------------------
Can restrict generics to certain types using constraints. This ensures that only types fulfilling the constraint can be passed.

Example
--------
function getLength<T extends { length: number }>(value: T): number {
  return value.length;
}

console.log(getLength("Hello"));       // Outputs: 5
console.log(getLength([1, 2, 3, 4]));  // Outputs: 4

In this example, T extends { length: number } ensures that only types with a length property (like strings or arrays) can be passed to the getLength function.
This will produce a type error if you try to pass a type that does not have a length property, such as a number.

12 . 5 . Generic with Default Type
----------------------------------
You can provide a default type for generics, which will be used if no specific type is provided.

Example
--------
function processData<T = string>(data: T): T {
  return data;
}

console.log(processData("Default Type"));  // Outputs: "Default Type" (uses string)
console.log(processData(100));             // Outputs: 100 (uses number)

The T = string syntax sets string as the default type for the generic parameter T.
If no type is specified, it will assume the default type (string), but if a type is provided, it will use that instead.

12 . 6 . Advantages of Generics
--------------------------------
Reusability: You can reuse the same function, class, or interface for different types.
Type Safety: Ensures that only valid types are passed, catching errors during compilation.
Flexibility: Allows you to work with different types without duplicating code.
Improved Readability: Code becomes easier to understand because the types are explicitly defined.

13 . Type Guards
----------------
Type guards allow you to create more specific types from broader types (like any or unknown), ensuring better type safety at runtime.

Example
---------
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

14 . Utility Types
-------------------
TypeScript provides several built-in typeof      types that make it easier to transform and work with types. These utility types help with common type transformations, improving the flexibility and readability of your code.

14 . 1 . Partial<T>
--------------------
Makes all properties of a type T optional.
When you want to create an object with only some of the properties of a type.

Example
--------
interface User {
  name: string;
  age: number;
}

const user: Partial<User> = { name: "John" };
// 'age' is optional now, thanks to Partial

14 . 2 . Required<T>
-----------------------
Makes all properties of a type T required, overriding any optional properties.
When you want to ensure all properties are set.

Example
--------
interface User {
  name?: string;
  age?: number;
}

const user: Required<User> = { name: "John", age: 30 };
// 'name' and 'age' are now required

14 . 3 . Readonly<T>
----------------------
Makes all properties of a type T read-only. The properties can only be read but not modified.
When you want to prevent modifying an object’s properties.

Example
-------
interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = { name: "John", age: 30 };
// user.name = "Alice";  // Error: Cannot assign to 'name' because it is a read-only property

14 . 4 . Record<K, T>
-----------------------
Constructs an object type where K is a union of keys, and T is the type of the values for those keys.
When To create an object with a specific set of keys and values

Example
--------
const roles: Record<string, number> = {
  admin: 1,
  user: 2,
  guest: 3,
};

14 . 5 . Pick<T, K>
-------------------
Creates a new type by picking a set of properties K from type T.
Use case: When you want a subset of properties from an existing type.

Example
----------
interface User {
  name: string;
  age: number;
  email: string;
}

const user: Pick<User, "name" | "email"> = {
  name: "John",
  email: "john@example.com",
};
// 'age' is excluded from the type

14 . 6 . Omit<T, K>
-------------------
Creates a new type by omitting a set of properties K from type T.
Use case: When you want to exclude certain properties from an existing type.

Example
--------
interface User {
  name: string;
  age: number;
  email: string;
}

const user: Omit<User, "age"> = {
  name: "John",
  email: "john@example.com",
};
// 'age' is omitted from the type

14 . 7 . Extract<T, U>
-----------------------
Constructs a type by extracting the properties of type T that are assignable to U.
Use case: When you want to filter a union of types.

Example
--------
type Union = string | number | boolean;
type StringOrNumber = Extract<Union, string | number>;
// Resulting type is 'string | number', excluding 'boolean'

14 . 8 . Exclude<T, U>
------------------------
Constructs a type by excluding properties of type T that are assignable to U.
Use case: When you want to exclude certain types from a union.

Example
--------
type Union = string | number | boolean;
type NonString = Exclude<Union, string>;
// Resulting type is 'number | boolean', excluding 'string'

14 . 9 . NonNullable<T>
------------------------
Removes null and undefined from type T.
Use case: When you want to ensure a value is neither null nor undefined.

Example
---------
type MaybeString = string | null | undefined;
type StringOnly = NonNullable<MaybeString>;
// Resulting type is 'string', excluding 'null' and 'undefined'

14 . 10 . ReturnType<T>
------------------------
Constructs a type from the return type of a function T.
Use case: When you want to capture the return type of a function for reuse.

Example
--------
function getUser() {
  return { name: "John", age: 30 };
}

type User = ReturnType<typeof getUser>;
// Resulting type is { name: string; age: number; }

14 . 11 . Parameters<T>
------------------------
Constructs a tuple type from the types used in the parameters of function T.
Use case: To get the parameter types of a function as a tuple.

Example
-------
function greet(name: string, age: number): string {
  return `Hello ${name}, you are ${age} years old.`;
}

type GreetParams = Parameters<typeof greet>;
// Resulting type is [string, number]

14 . 12 . ConstructorParameters<T>
-----------------------------------
Constructs a tuple type from the types used in the parameters of a class constructor.
Use case: To capture the constructor parameters of a class.

Example
--------
class Person {
  constructor(public name: string, public age: number) {}
}

type PersonConstructorParams = ConstructorParameters<typeof Person>;
// Resulting type is [string, number]


15 . Mapped Types
------------------
mapped types allow you to create new types by transforming the properties of an existing type. They work by taking each property of a type and applying a transformation to it.

Example
--------
interface User {
  name: string;
  age: number;
}

type ReadOnlyUser = {
  [Key in keyof User]: Readonly<User[Key]>;
};

// Equivalent to:
type ReadOnlyUser2 = {
  readonly name: string;
  readonly age: number;
};

15 . Conditional Types
-----------------------
TypeScript allows defining conditional types that depend on the result of type checks.

Example
--------
type IsString<T> = T extends string ? "Yes" : "No";

type A = IsString<string>;  // "Yes"
type B = IsString<number>;  // "No"

16 . Declaration Files (.d.ts)
-------------------------------
Declaration files allow to define the types of libraries or code that are written in plain JavaScript or another language.

These files help with type checking in TypeScript when using external libraries without TypeScript support.

17 . Namespaces
---------------
Used to group related code together and avoid naming conflicts from classes , interfaces and functions.

Example
--------
namespace Utility {
  export function log(message: string) {
    console.log(message);
  }
}

Utility.log("Hello");

18 . Decorators
---------------
Decorators are a special type of declaration that can be attached to a class, method, or property accessor and parameter to extend its functionality without changing its structure.

Example of Creating a Custom Decorator in TypeScript
----------------------------------------------------
18 . 1 . Class Decorator
-------------------------
A class decorator takes the target class as an argument and can modify or add properties to the class.

Example
--------
function CustomClassDecorator(constructor: Function) {
    console.log(`Class "${constructor.name}" is decorated`);
    // Modify the constructor or add new properties
    constructor.prototype.decorated = true;
}

// Apply the decorator to a class
@CustomClassDecorator
class MyClass {
    constructor() {
        console.log("MyClass instance created");
    }
}

const obj = new MyClass();
console.log(obj.decorated); // true

18 . 2 . Method Decorator
--------------------------
A method decorator allows you to intercept the method and modify its behavior.

Example
--------
function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Method "${propertyKey}" called with arguments: ${args.join(", ")}`);
        return originalMethod.apply(this, args);
    };

    return descriptor;
}

// Apply the decorator to a method
class MyClass {
    @LogMethod
    greet(name: string) {
        console.log(`Hello, ${name}`);
    }
}

const obj = new MyClass();
obj.greet("Midhun");
// Output:
// Method "greet" called with arguments: Midhun
// Hello, Midhun

18 . 3 . Property Decorator
----------------------------
A property decorator can be used to modify how a property behaves, such as tracking access or validation.

Example
--------
function ReadOnly(target: any, propertyKey: string) {
    const descriptor = {
        writable: false,
        configurable: true
    };
    Object.defineProperty(target, propertyKey, descriptor);
}

// Apply the decorator to a property
class MyClass {
    @ReadOnly
    name: string = "Midhun";

    constructor() {
        console.log("MyClass instance created");
    }
}

const obj = new MyClass();
obj.name = "Changed"; // Error: Cannot assign to read only property 'name'

18 . 4 . Parameter Decorator
----------------------------
A parameter decorator allows you to manipulate method parameters at runtime.

Example
--------
function LogParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Parameter in method "${propertyKey}" at index ${parameterIndex} is decorated`);
}

// Apply the decorator to a parameter
class MyClass {
    greet(@LogParameter name: string) {
        console.log(`Hello, ${name}`);
    }
}

const obj = new MyClass();
obj.greet("Midhun");
// Output:
// Parameter in method "greet" at index 0 is decorated
// Hello, Midhun

19 . Transpilation
-------------------
Transpilation is the process of converting source code written in one programming language into another language that has a similar level of abstraction.

20 . Function
---------------
Same as javascript but we can annotate type for the parameter and the return type

function sample(a : number, b : number) : number {
	return a+ b
}

If a function does not return a value, you can use the void type as the return type. The void keyword indicates that the function doesn’t return any value. For example

function echo(message: string): void {
    console.log(message.toUpperCase());
}

The void prevents the code inside the function from returning a value and stops the calling code from assigning the result of the function to a variable.

if a function has different branches that return different types, the TypeScript compiler may infer the union type or any type.

21 . Optional parameters
-------------------------
We can specify a parameter as optional using ?

Example
--------
function display(a : number, b? : string) : void {}

22 . Default parameter
------------------------
 if you don’t pass arguments or pass the undefined into the function when calling it, the function will take the default initialized values for the omitted parameters.

Optional parameters must come after the required parameters.
Default parameters don’t need to appear after the required parameters.

When a default parameter appears before a required parameter, we need to explicitly pass undefined to get the default initialized value.

23 . Rest parameter
--------------------
A rest parameter allows a function to accept zero or more arguments of the specified type. In TypeScript, the rest parameters follow these rules:

A function has only one rest parameter.
The rest parameter appear last in the parameter list.
The type of the rest parameter is an array type.

Example
---------
function addrestpara(...nums : number[]) : number {
    return nums.reduce((a : number , b : number )=> a + b , 0)
}

24 . Readonly vs Const
-----------------------
Use for:
readonly: Class properties
const: Variables

Initialization:
readonly: Can be initialized either in the declaration or in the constructor of the same class
const: Must be initialized at the time of declaration

25 . Dependency Injection
-------------------------
Dependency Injection (DI) is a design pattern used to provide dependencies (like services or other classes) to a class from the outside, rather than letting the class create them itself. This makes the code more modular and testable.

Example
--------
class Logger {
  log(message: string) {
    console.log(message);
  }
}

class UserService {
  constructor(private logger: Logger) {}

  createUser(userName: string) {
    this.logger.log(`User ${userName} created.`);
  }
}

const logger = new Logger();
const userService = new UserService(logger);
userService.createUser("John");

26 . module
-----------
A module in TypeScript is a file that exports code (like variables, functions, classes, etc.) to be reused in other files. It helps in organizing code into smaller, reusable pieces.

Example
-----------
export const greeting: string = "Hello, TypeScript!";

export function add(){}

export class Person{}

27 . Solid principles
----------------------
SOLID principles are a set of five design principles that help developers write maintainable, scalable, and robust object-oriented code. These principles apply to all object-oriented programming languages, including TypeScript.

27 . 1. S - Single Responsibility Principle (SRP)
--------------------------------------------------
A class or module should have one and only one reason to change, meaning it should only have one responsibility or job. In TypeScript, you can achieve this by designing classes or functions that focus on a single task or concern.

Example
--------
class User {
  constructor(public name: string, public email: string) {}
}

// Responsibility of UserRepository is to handle user-related database operations
class UserRepository {
  save(user: User) {
    console.log(`Saving user ${user.name}`);
  }
}

Here, the User class is responsible for user details, and the UserRepository is responsible for saving user data. Each has a single responsibility.

27 . 2. O - Open/Closed Principle (OCP)
----------------------------------------
Software entities (classes, modules, functions) should be open for extension but closed for modification. This means you can extend a class's functionality without changing its source code.

In TypeScript, this can be achieved using interfaces, inheritance, or composition.

Example
--------
interface Shape {
  area(): number;
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  
  area(): number {
    return this.width * this.height;
  }
}

class Circle implements Shape {
  constructor(private radius: number) {}
  
  area(): number {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

function calculateArea(shapes: Shape[]) {
  return shapes.reduce((acc, shape) => acc + shape.area(), 0);
}

Here, if you want to add a new shape (e.g., Triangle), you don't need to modify the calculateArea function, but simply implement a new class.

27 . 3. L - Liskov Substitution Principle (LSP)
------------------------------------------------
Objects of a subclass should be replaceable with objects of the superclass without affecting the correctness of the program. In other words, derived classes should be able to extend the base class without changing its behavior.

Example
--------
class Bird {
  fly() {
    console.log("Flying");
  }
}

class Sparrow extends Bird {}

class Penguin extends Bird {
  fly() {
    throw new Error("Penguins can't fly");
  }
}

This violates the Liskov Substitution Principle because Penguin can't fly, and substituting Penguin for Bird would break the program. A solution would be to separate flight behavior into a different class.

27 . 4 . I - Interface Segregation Principle (ISP)
--------------------------------------------------
Clients should not be forced to depend on methods they do not use. This means you should prefer small, specific interfaces over large, "fat" interfaces. It prevents implementing classes from being burdened with unnecessary methods.

Example
--------
interface Printer {
  print(): void;
}

interface Scanner {
  scan(): void;
}

// Multi-functional device implements both Printer and Scanner interfaces
class MultiFunctionPrinter implements Printer, Scanner {
  print() {
    console.log("Printing document");
  }
  
  scan() {
    console.log("Scanning document");
  }
}

class SimplePrinter implements Printer {
  print() {
    console.log("Printing document");
  }
}

Here, the SimplePrinter only needs the Printer interface, not Scanner. This keeps the interfaces focused on specific tasks.

27 . 5 . D - Dependency Inversion Principle (DIP)
----------------------------------------------------
High-level modules should not depend on low-level modules. Both should depend on abstractions. In TypeScript, you can achieve this by using interfaces or dependency injection.

Example
---------
interface Logger {
  log(message: string): void;
}

class ConsoleLogger implements Logger {
  log(message: string) {
    console.log(message);
  }
}

class FileLogger implements Logger {
  log(message: string) {
    // write message to a file
    console.log(`Writing to file: ${message}`);
  }
}

class UserService {
  constructor(private logger: Logger) {}
  
  createUser(user: string) {
    this.logger.log(`User created: ${user}`);
  }
}

// Injecting ConsoleLogger
const userService = new UserService(new ConsoleLogger());
userService.createUser("John Doe");

In this example, UserService depends on the Logger interface rather than a specific logger implementation. This allows the UserService to be flexible and use different types of loggers (e.g., ConsoleLogger or FileLogger).

By applying these SOLID principles, TypeScript developers can build systems that are easier to maintain, extend, and test.

28 . Lambda function
---------------------
lambda functions are also known as arrow functions. These are a shorthand syntax for writing function expressions. Arrow functions are commonly used in TypeScript (and JavaScript) to simplify function expressions, and they have the added benefit of capturing the this value of the surrounding context, making them useful in object-oriented programming.

Syntax of a Lambda (Arrow) Function
------------------------------------
(parameter1: Type, parameter2: Type): ReturnType => {
    // function body
}

28 . 1 . Basic Arrow Function
------------------------------
const add = (a: number, b: number): number => {
    return a + b;
};

console.log(add(5, 3)); // Output: 8

28 . 2 . Single-Line Arrow Function
------------------------------------
const multiply = (a: number, b: number): number => a * b;

console.log(multiply(4, 6)); // Output: 24

28 . 3 . Arrow Function Without Parameters
------------------------------------------
const greet = (): string => "Hello, Midhun!";

console.log(greet()); // Output: Hello, Midhun!

28 . 4 . Arrow Functions with Objects
--------------------------------------
const createPerson = (name: string, age: number) => ({
    name,
    age
});

const person = createPerson("Midhun", 25);
console.log(person); 
// Output: { name: 'Midhun', age: 25 }

28 . 5 . Arrow Function Capturing this
--------------------------------------
One of the main benefits of arrow functions is that they lexically bind this, meaning they inherit this from the context in which they are defined. Here's an example using arrow functions inside a class

class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        setTimeout(() => {
            console.log(`Hello, ${this.name}`);
        }, 1000);
    }
}

const person = new Person("Midhun");
person.sayHello(); // Output: Hello, Midhun

29 Abstraction using interface
------------------------------
In TypeScript, abstraction can be implemented using interfaces. An interface defines a contract for a class, specifying what properties and methods it should have, without providing the implementation details. This allows for abstraction by separating what something does from how it does it.

Steps
------
step 1: Abstraction Using an Interface
---------------------------------------
In this example, we'll create an interface to define an abstract contract for a shape and then implement that interface in different classes like Circle and Rectangle.

Definig the interface
---------------------
interface Shape {
    area(): number; // Abstract method to calculate the area
    perimeter(): number; // Abstract method to calculate the perimeter
}

Step 2: Implementing the Interface in Classes
----------------------------------------------
We can create different shapes, such as Circle and Rectangle, that implement the Shape interface and provide their own implementations of area() and perimeter().

class Circle implements Shape {
    radius: number;

    constructor(radius: number) {
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }

    perimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * (this.width + this.height);
    }
}

Step 3: Using the Classes with Abstraction
-------------------------------------------
Now, you can use these classes in an abstract manner without worrying about their internal implementation details.

const shapes: Shape[] = [
    new Circle(10),
    new Rectangle(5, 10)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
    console.log(`Perimeter: ${shape.perimeter()}`);
});







