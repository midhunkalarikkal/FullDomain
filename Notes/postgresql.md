Overview of PostgreSQL
----------------------------
Developed by: PostgreSQL Global Development Group
First released: 1996
Type: Open-source, Object-relational Database Management System (ORDBMS)
Main use: Managing large-scale applications and ensuring data integrity
Language support: SQL and PL/pgSQL, along with support for other languages (e.g., Python, Perl, Ruby)

Features of PostgreSQL
--------------------------
ACID compliance: Ensures reliable transactions (Atomicity, Consistency, Isolation, Durability).
Support for advanced data types: Includes support for JSON, XML, arrays, and custom data types.
Full-text search: Powerful built-in search capability.
Extensible: You can add new data types, operators, functions, and index types.
Concurrency: Uses Multi-Version Concurrency Control (MVCC) to handle multiple transactions simultaneously.
Replication: Supports both synchronous and asynchronous replication for high availability.
SQL and JSON querying: Supports traditional SQL and modern non-relational JSON querying.
Cross-platform: Works on Windows, macOS, and Linux.
Community support: Strong open-source community with regular updates and enhancements.

Advantages And Disadvantages of PostgreSQL
----------------------------------------------
7 . 1 Advantages
----------------
Open Source: Free to use with no licensing costs.
Highly customizable: Supports custom functions, data types, and procedures.
Robust performance: Handles large volumes of data efficiently.
Data integrity: Strong adherence to ACID principles ensures reliable data management.
Scalability: Suitable for small apps to large-scale, data-heavy applications.
Support for multiple languages: SQL, PL/pgSQL, and more for flexibility.
Security: Advanced security features like authentication, role-based access control, and SSL.
Cross-database compatibility: Can work with other databases like MySQL, Oracle via connectors.

7 . 2 Disadvantages
--------------------
Complex Configuration: Requires more configuration and tuning for optimal performance compared to simpler databases.
Steeper Learning Curve: More advanced features can be overwhelming for beginners.
Memory Usage: Higher memory consumption compared to some other databases like MySQL.
Less Popular for Small Projects: For small or simple projects, lighter databases like SQLite or MySQL may be more popular.
Limited Third-Party Tools: Fewer third-party tools and plugins compared to more widely adopted databases like MySQL.
Slower Write Performance: Slightly slower in write-heavy workloads compared to some NoSQL databases.
Limited Hosting Options: Fewer cloud hosting options, though this is improving with services like Amazon RDS and Heroku.

8 . PostgreSQL Architecture (Simplified)
---------------------------------------
Client-Server Model
Client: Sends queries to the server (e.g., using SQL commands).
Server: Processes the queries and returns the results.

Processes:
Postmaster: Main process that manages connections, starts background processes, and accepts queries.
Backend Process: Handles individual queries from clients.
Background Writer: Writes data from the shared buffer to disk.
WAL (Write-Ahead Log): Ensures data recovery in case of crashes.

Memory Components:
Shared Buffers: Holds data that is frequently accessed.
Work Memory: Used for sorting and joining operations.
WAL Buffers: Temporarily stores WAL data before writing to disk.

Storage:
Tablespaces: Directories on disk where data is stored.
Tables & Indexes: Data and index structures are stored in these files.

Transaction Management:
Uses MVCC (Multi-Version Concurrency Control) to handle multiple transactions without locking conflicts.

9 . Common SQL Data Types
--------------------------
9 . 1 NULL
----------
Represents a missing or undefined value.

8 . 2 BIT
---------
Stores bit-field values, typically used for storing binary data.

9 . 3 Numeric Types
-------------------
INTEGER :-
Stores whole numbers.
Size: 4 bytes
Range: -2,147,483,648 to 2,147,483,647

BIGINT :-
Stores large whole numbers.
Size: 8 bytes
Range: -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807

DECIMAL/NUMERIC :-
Stores exact numeric values with user-defined precision.
Example: DECIMAL(10, 2) allows for 10 digits, 2 after the decimal point.

SMALLINT :-
Smaller integer values.
Size: 2 bytes
Range: -32,768 to 32,767

REAL :-
Single-precision floating-point number.
Size: 4 bytes

DOUBLE PRECISION :-
floating-point data type. It stores values with higher precision compared to real
Size: 8 bytes

Numeric data type example
-------------------------
CREATE TABLE sample_table (
    id SERIAL PRIMARY KEY,
    small_number SMALLINT,            
    medium_number INTEGER,            
    large_number BIGINT,              
    precise_decimal DECIMAL(10, 4),   
    precise_numeric NUMERIC(12, 6),   
    approx_real REAL,                 
    approx_double DOUBLE PRECISION    
);

9 . 4 Character Types
---------------------
CHAR(n) :-
----------
Definition: Stores a string with a fixed length n. If the string is shorter than n, it is padded with spaces.

Use Case: Best for when you know the exact length of the string (e.g., country codes, fixed IDs).

VARCHAR(n) :-
-------------
Definition: Stores a string with a variable length but enforces a maximum length n. It won't pad the string if it’s shorter than n.

Use Case: Ideal when you need flexibility with string length but want to enforce a limit (e.g., usernames, email addresses).

TEXT :-
--------
Definition: Stores a string with an unlimited length. No maximum length is enforced.

Use Case: Suitable when you don't know or care about the length (e.g., descriptions, articles, logs).

character example
-----------------
CREATE TABLE string_example (
    id SERIAL PRIMARY KEY,          
    fixed_code CHAR(3),             
    variable_name VARCHAR(50),     
    description TEXT                
);

9 . 5 Date and Time Types
-------------------------
DATE
Stores calendar date (year, month, day).

Example
--------
'2024-09-17'

TIME
-----
Stores time of day (hour, minute, second).

Example
--------
'14:30:00'

TIMESTAMP
----------
Stores both date and time.

Example
--------
'2024-09-17 14:30:00'

TIMESTAMP WITH TIME ZONE
------------------------
Stores timestamp along with time zone information. PostgreSQL adjusts the time to UTC internally.

Example
--------
'2024-09-17 14:30:00+05:30'

INTERVAL
---------
Stores a period of time, such as a duration. which can include days, months, hours, etc.

when you use values like 1 day or 1 hour 30 minutes in a PostgreSQL INTERVAL field, PostgreSQL interprets and stores the value as an interval of time. It does not store the exact string as you typed it but rather stores the equivalent amount of time in a structured format. And also we can use negative numbers for the past time interval.

Example
--------
'2 years 3 months'

AGE
----
AGE is a function that calculates the difference between two timestamps or the current time and a given timestamp. It returns an INTERVAL.

Commonly used to find the time elapsed since a specific date (like a birthdate).

Example
-------
SELECT AGE(NOW(), '2000-01-01');  -- Calculates the age from January 1, 2000, to now


Example
-------
CREATE TABLE datetime_example (
    id SERIAL PRIMARY KEY,
    event_date DATE,                          -- Stores only the date (YYYY-MM-DD)
    event_time TIME,                          -- Stores only the time (HH:MI:SS)
    event_timestamp TIMESTAMP,                -- Stores date and time without time zone
    event_tz TIMESTAMP WITH TIME ZONE,        -- Stores date and time with time zone
    event_duration INTERVAL                   -- Stores a duration of time (e.g., '1 day 2 hours')
);

9 . 6 Boolean Type
-------------------
BOOLEAN :-
Stores true/false values.
Accepts values TRUE, FALSE, or NULL.

Example
-------
CREATE TABLE user_status (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    is_active BOOLEAN,               -- Boolean field to indicate if the user is active
    is_admin BOOLEAN DEFAULT FALSE   -- Boolean field with a default value
);

9 . 7 Array Types
------------------
PostgreSQL allows you to define columns that hold arrays of any valid data type.

Example: INTEGER[] stores an array of integers.
Example: VARCHAR[] stores an array of variable-length strings.

Example :-

CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    grades INTEGER[]
);

INSERT INTO students (name, grades) VALUES ('John Doe', '{90, 85, 88}');

Accessing array elements :-
---------------------------
SELECT grades[1] FROM students;  -- Retrieves the first element of the array

Adding elements to an array :-
------------------------------
UPDATE students SET grades = array_append(grades, 95) WHERE id = 1;

Removing elements from an array :-
---------------------------------
UPDATE students SET grades = array_remove(grades, 85) WHERE id = 1;

9 . 8 Hstore
------------
HSTORE in PostgreSQL is a key-value store that allows you to store sets of key-value pairs within a single column, enabling flexible and dynamic schema designs.

Each HSTORE value is defined as a string with key-value pairs, where keys and values are wrapped in double quotes and separated by =>.

use cases : - User Preferences , product attributes

Example
-------
CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    options HSTORE
);

inserting
-----------
INSERT INTO settings (options) VALUES ('theme => dark, notifications => enabled');

Querying with Hstore :-
-----------------------
SELECT options->'theme' FROM settings;

Updating Hstore values :-
--------------------------
UPDATE settings SET options = 'theme => light' WHERE id = 1;

9 . 9 XML Data Type
-------------------
The XML data type allows you to store XML documents and perform operations on XML data.

Example
-------
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_data XML
);

INSERT INTO orders (order_data) VALUES (' <order> <item> Widget </item> <quantity> 5 </quantity> </order> ');

Querying XML data :-
---------------------
SELECT xpath('//item/text()', order_data) FROM orders;

9 . 10 UUID
-----------
UUID (Universally Unique Identifier) is used to store unique identifiers. They are often used for unique keys across distributed systems.

use cases :- database primary keys, session ids

Example
-------
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    username VARCHAR(100)
);

INSERT INTO users (username) VALUES ('alice');

Generating UUIDs
-----------------
can use PostgreSQL functions to generate UUIDs
SELECT gen_random_uuid();

9 . 11 JSON and JSONB
---------------------
JSON
----
Stores JSON data in text format.

Example
-------
'{"name": "Midhun", "age": 25}'

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    details JSON
);

INSERT INTO products (details) VALUES ('{"name": "Laptop", "price": 999.99}');

JSONB
-----
Stores JSON data in a binary format for faster access and manipulation.
More efficient for indexing and querying.

Example
-------
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    details JSONB
);

INSERT INTO products (details) VALUES ('{"name": "Laptop", "price": 999.99}');

Extracting a value :-
---------------------
SELECT details->>'name' FROM products;

Querying with JSONB :-
-----------------------
SELECT * FROM products WHERE details->>'price' = '999.99';

Updating JSONB data :-
----------------------
UPDATE products SET details = jsonb_set(details, '{price}', '899.99') WHERE id = 1; 

9 . 12 Composite Types
-----------------------
A composite data type allows you to define a data structure that groups together multiple fields of different types under a single name. This can be useful for representing complex entities or records.

In PostgreSQL, the ROW function is used to create a composite value from a list of expressions.

Example
-------
CREATE TYPE address AS (
    street VARCHAR(100),
    city VARCHAR(50),
    zip_code VARCHAR(10)
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50),
    contact_info address  -- Using the composite type
);

INSERT INTO users (name, contact_info)
VALUES 
    ('John Doe', ROW('123 Elm St', 'Springfield', '12345')),
    ('Jane Smith', ROW('456 Oak St', 'Shelbyville', '67890'));


9 . 13 Range Types
-------------------
the range data type allows you to define a continuous range of values. You can use ranges for various types, such as integers, timestamps, and dates.

Types
-----
INT4RANGE -: Represents a range of 4-byte integers.
	     Example: int4range(1, 10)

INT8RANGE -: Represents a range of 8-byte integers.
	     Example: int8range(1, 100000)

NUMRANGE -: Represents a range of numeric values (arbitrary precision).
	    Example: numrange(1.5, 2.5)

DATERANGE -: Represents a range of dates.
	     Example: daterange('2024-01-01', '2024-12-31')

TSRANGE -: Represents a range of timestamps without time zone.
	   Example: tsrange('2024-01-01 00:00', '2024-12-31 23:59')

TSTZRANGE -: Represents a range of timestamps with time zone.
	     Example: tstzrange('2024-01-01 00:00-05', '2024-12-31 23:59-05')

RANGE -: can also define your own custom range types if needed.

Examples
--------
CREATE TABLE temperature_ranges (
    id SERIAL PRIMARY KEY,
    season VARCHAR(20),
    temperature_range INT4RANGE  -- Using the integer range type
);

INSERT INTO temperature_ranges (season, temperature_range)
VALUES 
    ('Winter', '[0, 10)'),
    ('Spring', '[10, 20)'),
    ('Summer', '[20, 30)'),
    ('Autumn', '[10, 20)');

This is also correct using the range type in the value insertion

INSERT INTO temperature_ranges (season, temperature_range)
VALUES 
    ('Winter', int4range(0, 10)),
    ('Spring', int4range(10, 20)),
    ('Summer', int4range(20, 30)),
    ('Autumn', int4range(10, 20));


9 . 14 Enumerated Types (ENUM)
------------------------------
An ENUM (enumerated type) allows you to define a data type that can hold a predefined set of values. This is useful for situations where a column should only contain a specific set of strings.

Example
-------
CREATE TYPE order_status AS ENUM ('pending', 'shipped', 'delivered', 'cancelled');

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(100),
    status order_status  -- Using the ENUM type
);

INSERT INTO orders (customer_name, status)
VALUES 
    ('Alice', 'pending'),
    ('Bob', 'shipped'),
    ('Charlie', 'delivered'),
    ('David', 'cancelled');


9 . 15 Geometric Types
----------------------
In PostgreSQL, you can use the PostGIS extension to work with geometric data types like POINT, LINESTRING, and POLYGON. 

POINT :-
Stores a geometric point (x, y).
Example: POINT(3, 4)

LINE :-
Stores a line.
Example: LINE '((1,1), (2,2))'

POLYGON :-
Stores a polygon (a closed shape with straight lines).
Example: POLYGON '((0, 0), (1, 0), (1, 1), (0, 1))'

Example
--------
CREATE TABLE geometric_shapes (
    id SERIAL PRIMARY KEY,
    shape_name VARCHAR(50),
    location GEOMETRY(POINT, 4326),        -- Storing Point
    path GEOMETRY(LINESTRING, 4326),       -- Storing LineString
    area GEOMETRY(POLYGON, 4326)            -- Storing Polygon
);

INSERT INTO geometric_shapes (shape_name, location, path, area)
VALUES 
    ('Location A', ST_SetSRID(ST_MakePoint(30, 10), 4326), 
     ST_SetSRID(ST_MakeLine(ARRAY[ST_MakePoint(30, 10), ST_MakePoint(40, 40), ST_MakePoint(20, 40)]), 4326), 
     ST_SetSRID(ST_MakePolygon(ST_MakeLine(ARRAY[ST_MakePoint(30, 10), ST_MakePoint(40, 40), ST_MakePoint(20, 40), ST_MakePoint(30, 10)])), 4326));

SELECT 
    id,
    shape_name,
    ST_AsText(location) AS location,
    ST_AsText(path) AS path,
    ST_AsText(area) AS area
FROM 
    geometric_shapes;


9 . 16 Sequences
----------------
SERIAL :- 
is essentially a shorthand for creating a sequence object in PostgreSQL. It automatically creates a sequence and sets it as the default value for a column.

smallserial - 1 to 32767
serial - 1 to 2147483647
bigserial -  1 to 9223372036854775807

10 . Expression , Statements , Operators , wildCard
----------------------------------------------------
10 . 1 Expression
-----------------
An expression in PostgreSQL is a combination of one or more values, operators, and functions that are evaluated to produce a result.

5 + 3
'Hello' || ' World' (Concatenation)
age * 2

10 . 2 Statement
----------------
A statement in PostgreSQL is a complete command that performs a specific task, such as querying data, updating records, or creating tables. Statements can be categorized into different types like:

SELECT: Retrieves data from the database.
INSERT: Adds new rows to a table.
UPDATE: Modifies existing data in a table.
DELETE: Removes data from a table.

10 . 3 Operators
---------------
Operators are symbols or keywords that perform operations on one or more operands (like variables, values, or expressions) and return a result. Common types include:

Arithmetic Operators: +, -, *, / (e.g., 5 + 3)
Comparison Operators: =, !=, <, >, <=, >= (e.g., age > 21)
Logical Operators: AND, OR, NOT (e.g., age > 21 AND city = 'New York')
String Operators: || (concatenation), LIKE, ILIKE (e.g., name LIKE 'A%')
Bitwise Operators: &, |, ~ (e.g., a & b)

10 .  4 Wild card
-----------------
wildcards are commonly used with the LIKE operator in queries for pattern matching within strings. There are two main types of wildcards: the percent sign % and the underscore _. Each has its own specific behavior

Percent Sign (%)
Description: Matches zero or more characters in a string.

Use Case: It’s useful when you want to find any sequence of characters in a given position.

SELECT * FROM employees WHERE name LIKE 'A%';

Underscore (_)
Description: Matches exactly one character in a string.

Use Case: Use it when you want to match a single character at a specific position.

SELECT * FROM employees WHERE name LIKE '_ndy';

11 . Constraints
-----------------
Constraints are rules applied to the data in a database to ensure its accuracy and integrity. They help enforce data validity and relationships between tables.

11 . 1 Primary Key Constraint
-----------------------------
Purpose: Uniquely identifies each record in a table.
Requirement: Each table must have a primary key, which consists of one or more columns. The values in these columns must be unique and not NULL.

Composite Primary Key
----------------------
double primary key :- Using a composite primary key (a primary key that consists of more than one column) is useful in situations where no single column can uniquely identify a record, but a combination of columns can.

CREATE TABLE enrollments (
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    PRIMARY KEY (student_id, course_id)  -- Composite primary key
);

Defining Primary Key Constraints Separately
-------------------------------------------
You can define a primary key constraint after the column definitions.

CREATE TABLE products (
    id SERIAL,
    name VARCHAR(100),
    price DECIMAL,
    CONSTRAINT products_pkey PRIMARY KEY (id)  -- Separate constraint definition
);

Natural Keys
-------------
Natural key is a key that has a meaningful relationship to the data. It is derived from the actual data and represents real-world attributes.
Examples :-
Social Security Number (SSN)
Email Address
ISBN for books

Surrogate Keys
---------------
A surrogate key is an artificially created key, usually a sequentially generated number (like an integer) or a UUID.

11 . 2 Foreign Key Constraint
-----------------------------
Purpose: Establishes a relationship between tables by enforcing referential integrity.
Requirement: A foreign key in one table must match a primary key or unique key in another table. This ensures that relationships between tables are maintained.

11 . 3 Unique Key Constraint
---------------------------
Purpose: Ensures that all values in a column or a combination of columns are unique across the table.
Requirement: No two rows can have the same value in the specified columns.

11 . 4 Not NULL
---------------
Purpose: Ensures that a column cannot have NULL values.
Requirement: Every row must contain a value for the column that has this constraint.

11 . 5 Check 
------------
Purpose: Enforces a specific condition on the values in a column.
Requirement: The value in a column must satisfy a predefined condition, such as a range of values.

11 . 6 Default 
--------------
Purpose: Provides a default value for a column if no value is specified during insertion.
Requirement: When a new record is created, the column will automatically be populated with the default value if no explicit value is provided.

11 . 7 Exclusion
-----------------
An exclusion constraint in PostgreSQL ensures that, for a specified set of columns or expressions, no two rows can have the same values according to a given operator

It is commonly used for geometric data types (like preventing overlapping time periods, ranges, or areas) but can work for other types as well.

Example 
---------
The exclusion constraint ensures that no two events can have overlapping time ranges in the event_time column. 

CREATE TABLE events (
    event_id serial PRIMARY KEY,
    event_name TEXT,
    event_time TSRANGE,
    EXCLUDE USING GIST (event_time WITH &&)
);

CONSTRAINTS EXAMPLES
=========================================
=========================================

Creating tables with the constraints
------------------------------------
CREATE TABLE departments (
    dept_id SERIAL PRIMARY KEY,           -- Primary key for departments
    dept_name VARCHAR(100) NOT NULL,      -- Department name, must be provided (NOT NULL)
    manager_id INT UNIQUE,                -- Each department can have only one manager (UNIQUE)
    budget NUMERIC CHECK (budget > 0),    -- Budget must be greater than 0 (CHECK)
    created_at TIMESTAMP DEFAULT NOW()    -- Automatically sets current timestamp (DEFAULT)
);

CREATE TABLE employees (
    emp_id SERIAL PRIMARY KEY,                        -- Primary key for employees
    emp_name VARCHAR(100) NOT NULL,                   -- Employee name, must be provided (NOT NULL)
    dept_id INT NOT NULL,                             -- Foreign key to departments table (NOT NULL)
    salary NUMERIC CHECK (salary > 0),                -- Salary must be greater than 0 (CHECK)
    hired_at TIMESTAMP DEFAULT NOW(),                 -- Automatically sets current timestamp (DEFAULT)
    office_hours TSRANGE NOT NULL,                    -- Office hours range, cannot be null
    EXCLUDE USING GIST (office_hours WITH &&),        -- Exclusion constraint to prevent overlapping office hours
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id) -- Foreign key to reference departments
);

Exclusion (EXCLUDE) :- In employees, the exclusion constraint on office_hours ensures no two employees have overlapping office hours.

INSERT INTO departments (dept_name, manager_id, budget)
VALUES ('IT', 1, 50000),
       ('HR', 2, 30000);

INSERT INTO employees (emp_name, dept_id, salary, office_hours)
VALUES ('John Doe', 1, 60000, '[2024-09-22 09:00, 2024-09-22 17:00)'),
       ('Jane Smith', 2, 55000, '[2024-09-22 10:00, 2024-09-22 18:00)');


If these constraints are not defined in the creation of the table we can use ALTER
------------------------------------------------------------------------------------
Primary Key
-------------
ALTER TABLE departments ADD CONSTRAINT departments_pk PRIMARY KEY (dept_id);
ALTER TABLE employees ADD CONSTRAINT employees_pk PRIMARY KEY (emp_id);

Foreign Key
-----------
ALTER TABLE employees ADD CONSTRAINT employees_dept_fk FOREIGN KEY (dept_id) REFERENCES departments(dept_id);

Unique
-------
ALTER TABLE departments ADD CONSTRAINT departments_manager_unique UNIQUE (manager_id);

Check
-----
ALTER TABLE departments ADD CONSTRAINT departments_budget_check CHECK (budget > 0);
ALTER TABLE employees ADD CONSTRAINT employees_salary_check CHECK (salary > 0);

Not null
--------
ALTER TABLE departments ALTER COLUMN dept_name SET NOT NULL;
ALTER TABLE employees ALTER COLUMN emp_name SET NOT NULL;
ALTER TABLE employees ALTER COLUMN dept_id SET NOT NULL;
ALTER TABLE employees ALTER COLUMN office_hours SET NOT NULL;

Default
-------
ALTER TABLE departments ALTER COLUMN created_at SET DEFAULT NOW();
ALTER TABLE employees ALTER COLUMN hired_at SET DEFAULT NOW();

Exclusion
---------
ALTER TABLE employees ADD CONSTRAINT employees_office_hours_excl EXCLUDE USING GIST (office_hours WITH &&);

=========================================
=========================================



12 . Triggers in PostgreSQL
----------------------------
A trigger in PostgreSQL is a function that is automatically executed or "triggered" when a specific event (like INSERT, UPDATE, DELETE) occurs on a table or view. Triggers help automate tasks and enforce business rules at the database level.

12 . 1 Creating Triggers
------------------------
A trigger is created using the CREATE TRIGGER statement, which links an event (like INSERT) to a trigger function.

CREATE TRIGGER log_insert
AFTER INSERT ON employees
FOR EACH ROW
EXECUTE FUNCTION log_employee_insert();

12 . 2 Trigger Types
--------------------
BEFORE
----------
The trigger is fired before the event (like INSERT, UPDATE, or DELETE) occurs.
Use case: Validate or modify data before it is written to the database.

CREATE TRIGGER validate_data
BEFORE INSERT
ON employees
FOR EACH ROW
EXECUTE FUNCTION validate_employee_data();

AFTER
---------
The trigger is fired after the event has occurred.
Use case: Log changes, audit data, or perform actions after data modification.

CREATE TRIGGER log_change
AFTER UPDATE
ON employees
FOR EACH ROW
EXECUTE FUNCTION log_update();

INSTEAD OF
--------------
Used mainly for views, the trigger is fired instead of the event. It replaces the original event action.
Use case: Perform actions on views that don't support direct modification (like inserting/updating a view).

CREATE TRIGGER update_view
INSTEAD OF UPDATE
ON employee_view
FOR EACH ROW
EXECUTE FUNCTION update_underlying_table();

12 . 3 Row-level vs. Statement-level Triggers
---------------------------------------------
Row-level Triggers :-	
The trigger executes once for each row that is affected by the query.
Specified with FOR EACH ROW.
Use case: Useful for modifying or validating data on a per-row basis.

CREATE TRIGGER audit_change
AFTER UPDATE
ON employees
FOR EACH ROW
EXECUTE FUNCTION audit_employee_update();

Statement-level Triggers :-
The trigger executes once for the entire statement, regardless of how many rows are affected.
Specified with FOR EACH STATEMENT.
Use case: Suitable for operations that apply to the whole table or batch processes.

CREATE TRIGGER audit_statement
AFTER INSERT
ON employees
FOR EACH STATEMENT
EXECUTE FUNCTION log_insert_statement();

12 . 4 Trigger Functions
------------------------
Trigger functions contain the logic that gets executed when a trigger fires. These functions are created using the CREATE FUNCTION statement and must return a TRIGGER data type.

CREATE OR REPLACE FUNCTION log_employee_insert()
RETURNS TRIGGER AS $$
BEGIN
  -- Logic for the trigger goes here
  INSERT INTO employee_log (employee_id, action, timestamp)
  VALUES (NEW.id, 'INSERT', NOW());
  RETURN NEW; -- Always return NEW for inserts and updates
END;
$$ LANGUAGE plpgsql;


13 . SQL Basics
---------------

13 . 1 SQL Syntax
-----------------
SQL queries follow a standard structure

SELECT columns
FROM table
WHERE condition
GROUP BY columns
HAVING condition
ORDER BY columns
LIMIT number OFFSET number;

13 . 2 SELECT Statement
-----------------------
Used to retrieve data from a table

SELECT column1, column2
FROM table_name;

13 . 3 WHERE Clause
-------------------
Filters rows based on a condition.

SELECT column1
FROM table_name
WHERE condition;

13 . 4 ORDER BY Clause
----------------------
Sorts the result based on one or more columns.

SELECT * FROM employees
ORDER BY age DESC;

13 . 5 GROUP BY and HAVING
---------------------------
GROUP BY groups rows that have the same values in specified columns. Useful with aggregate functions (SUM, COUNT, AVG).

SELECT department, COUNT(*)
FROM employees
GROUP BY department;

HAVING filters groups after grouping (works like WHERE but for aggregated data).

SELECT department, COUNT(*)
FROM employees
GROUP BY department
HAVING COUNT(*) > 5;

13 . 6 DISTINCT
---------------
Returns unique values (removes duplicates).

SELECT DISTINCT department FROM employees;

13 . 7 LIMIT and OFFSET
------------------------
LIMIT limits the number of rows returned.

SELECT * FROM employees LIMIT 5;

OFFSET skips a certain number of rows before starting to return rows.

SELECT * FROM employees LIMIT 5 OFFSET 10;

13 . 8 Joins
-------------
Joins combine rows from two or more tables based on a related column.

13 . 8 . 1 INNER JOIN
----------------------
Returns only rows that have matching values in both tables.

SELECT * FROM employees
INNER JOIN departments ON employees.department_id = departments.id;

13 . 8 . 2 LEFT JOIN
--------------------
Returns all rows from the left table, and matching rows from the right table.

SELECT * FROM employees
LEFT JOIN departments ON employees.department_id = departments.id;

13 . 8 . 3 RIGHT JOIN
----------------------
Returns all rows from the right table, and matching rows from the left table.

SELECT * FROM employees
RIGHT JOIN departments ON employees.department_id = departments.id;

13 . 8 . 4 FULL JOIN
--------------------
Returns rows when there is a match in either table.

SELECT * FROM employees
FULL JOIN departments ON employees.department_id = departments.id;

13 . 8 . 5 SELF JOIN
--------------------
Joins a table with itself. Useful for finding relationships within the same table.

SELECT e1.name AS employee, e2.name AS manager
FROM employees e1
LEFT JOIN employees e2 ON e1.manager_id = e2.id;

13 . 8 . 6 CROSS JOIN
---------------------
Returns the Cartesian product of two tables. Each row from the first table is combined with every row from the second table. This can result in a large number of rows.

SELECT employees.name, departments.name
FROM employees
CROSS JOIN departments;

13 . 8 . 7 Natural Joins
------------------------
A natural join is a type of join that automatically matches columns with the same name in both tables and combines the rows where these columns have the same value. It eliminates duplicate columns from the result.

Suppose we have two tables:

employees
id | name   | department_id
---|--------|---------------
1  | Alice  | 101
2  | Bob    | 102

department
id  | department_name
----|----------------
101 | HR
102 | IT

Performing a natural join

SELECT *
FROM employees
NATURAL JOIN departments;

result

id | name  | department_id | department_name
---|-------|---------------|----------------
1  | Alice | 101           | HR
2  | Bob   | 102           | IT


13 . 9 Aliases
--------------
Rename tables or columns temporarily for readability

SELECT e.name, d.name AS department
FROM employees e
INNER JOIN departments d ON e.department_id = d.id;

13 . 10 Subqueries
------------------
A query within another query. Useful for more complex data retrieval.

SELECT name FROM employees
WHERE department_id = (SELECT id FROM departments WHERE name = 'Sales');

13 . 11 ROLLUP
--------------
Definition: ROLLUP is an SQL extension that allows you to create subtotals and grand totals in aggregate queries. It adds additional grouping levels to the result set, helping to summarize data hierarchically.

Example
--------
SELECT department, job_title, SUM(salary)
FROM employees
GROUP BY ROLLUP(department, job_title);

13 . 12 CUBE
------------
Definition: CUBE is an SQL extension that generates all possible combinations of aggregations across multiple dimensions. It is more comprehensive than ROLLUP, as it creates subtotals for every combination of the specified columns.

Example
-------
SELECT department, job_title, SUM(salary)
FROM employees
GROUP BY CUBE(department, job_title);

13 . 13 Fetch
--------------
In PostgreSQL, the FETCH clause is used similarly to retrieve a specific number of rows from a result set, typically after using OFFSET for pagination.

Syntax
--------
SELECT column1, column2
FROM table_name
ORDER BY column
OFFSET n ROWS
FETCH { FIRST | NEXT } m ROWS ONLY;

Example
--------
If you want to retrieve the next 5 employees after skipping the first 10 from an employees table:

SELECT *
FROM employees
ORDER BY employee_id
OFFSET 10 ROWS
FETCH NEXT 5 ROWS ONLY;

13 . 14 CASCADE
-----------------
CASCADE is used in the context of database operations, particularly for managing dependencies between tables. It ensures that changes to a parent table are automatically reflected in related child tables. Here are the common scenarios where CASCADE is applied

DROP TABLE with CASCADE
-------------------------
When you drop a table that has dependent objects (like foreign keys), you can use CASCADE to automatically drop those dependent objects as well.

Example
-------
DROP TABLE parent_table CASCADE;

ALTER TABLE with CASCADE
------------------------
When you alter a table (like adding or dropping a column), you can use CASCADE to apply the changes to any dependent objects.

Example
--------
ALTER TABLE parent_table DROP COLUMN column_name CASCADE;

13 . 14 COALESCE
----------------
Definition: COALESCE is a SQL function that returns the first non-null value in a list of arguments. It is useful for handling null values and providing default values.

Example
-------
SELECT COALESCE(column1, column2, 'Default Value') AS result
FROM table_name;

13 . 16 NULLIF
---------------
Definition: NULLIF is a SQL function that compares two expressions and returns null if they are equal; otherwise, it returns the first expression. It is useful for avoiding division by zero or similar cases.

Example
-------
SELECT NULLIF(column1, 0) AS result
FROM table_name;

14 . Indexes in PostgreSQL
--------------------------
Indexes are special data structures used to speed up data retrieval operations in a database. They make searching and sorting operations faster but can slow down data modification operations like inserts, updates, and deletes.

Creating Indexes
----------------
To create an index, you use the CREATE INDEX statement:

CREATE INDEX idx_employee_name
ON employees (name);

13 . 1 Types of Indexes
-----------------------
B-tree Index
-------------
The default type of index. It’s efficient for equality and range queries.

CREATE INDEX idx_employee_age
ON employees (age);

Hash Index
----------
Useful for equality comparisons but not for range queries. It's less commonly used.

CREATE INDEX idx_employee_id_hash
ON employees USING HASH (employee_id);

GIN (Generalized Inverted Index)
--------------------------------
Ideal for full-text search and indexing arrays.

CREATE INDEX idx_employee_skills
ON employees USING GIN (skills);

GiST (Generalized Search Tree)
------------------------------
Useful for more complex queries involving geometric data, full-text search, or other non-traditional data types.

CREATE INDEX idx_employee_location
ON employees USING GiST (location);

Unique Indexes
--------------
Ensures that all values in the indexed column are unique.

CREATE UNIQUE INDEX idx_unique_email
ON employees (email);

SP-GiST (Space-Partitioned Generalized Search Tree) Index
---------------------------------------------------------
Suitable for partitioning data in non-overlapping spaces, often used for spatial data.

BRIN (Block Range Index)
------------------------
Efficient for very large tables where the data is physically storted on disk.

Covering Indexes
-----------------
An index that includes all the columns needed by a query, potentially avoiding the need to access the table itself.

CREATE INDEX idx_covering
ON employees (name, age);

Index on Expressions
--------------------
Creates an index based on an expression rather than a column.

CREATE INDEX idx_lower_name
ON employees (LOWER(name));

Partial Indexes
---------------
Indexes only a subset of the table based on a condition.

CREATE INDEX idx_active_employees
ON employees (name)
WHERE status = 'active';

Full-text Search and Indexing
------------------------------
Indexes that support full-text search functionality.

CREATE INDEX idx_employee_description
ON employees USING GIN (to_tsvector('english', description));


15 . Functions and Stored Procedures in PostgreSQL
--------------------------------------------------
Functions and stored procedures are used to encapsulate and reuse SQL code.

Stored procedure
----------------
In PostgreSQL, a stored procedure is a set of SQL statements that are stored and executed on the database server. Unlike functions, stored procedures can perform operations like transaction control (committing, rolling back transactions) and can return multiple results or no results at all.

15 . 1 Built-in Functions
--------------------------
PostgreSQL provides a wide range of built-in functions for various tasks:

Mathematical Functions: ABS(), ROUND(), CEIL(), FLOOR()
String Functions: LENGTH(), UPPER(), LOWER(), TRIM()
Date/Time Functions: NOW(), CURRENT_DATE, EXTRACT(), DATE_TRUNC()
Conversion Functions: CAST(), CONVERT()

Examples :-
SELECT LENGTH('Hello, World!');
SELECT NOW();

15 . 2 User-defined Functions
------------------------------
User-defined functions allow you to create custom functions to perform specific operations.

15 . 3 SQL Functions
---------------------
Functions written in plain SQL.

Syntax :-

CREATE FUNCTION function_name (parameters)
RETURNS return_type AS $$
SQL_query
$$ LANGUAGE sql;

Example :-

CREATE FUNCTION get_employee_count(department_id INT)
RETURNS INT AS $$
SELECT COUNT(*) FROM employees WHERE department_id = department_id;
$$ LANGUAGE sql;

15 . 4 PL/pgSQL Functions
-------------------------
Functions written in PL/pgSQL, which is PostgreSQL's procedural language for more complex operations.

Syntax :-

CREATE FUNCTION function_name (parameters)
RETURNS return_type AS $$
BEGIN
  -- PL/pgSQL code
END;
$$ LANGUAGE plpgsql;


Example :- 

CREATE FUNCTION get_employee_names(department_id INT)
RETURNS TABLE(name TEXT) AS $$
BEGIN
  RETURN QUERY SELECT name FROM employees WHERE department_id = department_id;
END;
$$ LANGUAGE plpgsql;


15 . 5 Aggregate Functions
---------------------------
Aggregate functions perform calculations on a set of values and return a single value. Common aggregate functions include:

COUNT(): Counts the number of rows.
SUM(): Adds up values.
AVG(): Calculates the average.
MIN(): Finds the minimum value.
MAX(): Finds the maximum value.
ROUND(): A function that rounds a numeric value to a specified number of decimal places.
CONCAT(): A function that concatenates two or more strings into a single string.

Examples :-
SELECT COUNT(*) FROM employees;
SELECT MAX(salary) FROM employees;

15 . 6 Window Functions
-----------------------
Window functions perform calculations across a set of table rows related to the current row. They are useful for running totals, rankings, and more.

Example
----------
SELECT employee_id, salary,
       SUM(salary) OVER (ORDER BY salary) AS running_total
FROM employees;

OVER
-----
Definition: The OVER clause defines the window or set of rows the window function will operate on.

Example
--------
SELECT employee_id, salary,
       RANK() OVER (ORDER BY salary) AS salary_rank
FROM employees;

PARTITION BY
-------------
Definition: PARTITION BY divides the result set into partitions to which the window function is applied. Each partition is processed independently.

Example
--------
SELECT department_id, employee_id, salary,
       RANK() OVER (PARTITION BY department_id ORDER BY salary) AS department_rank
FROM employees;

RANK
-----
Definition: The RANK function assigns a rank to each row within a partition, with gaps in the ranking for ties.

Example
-------
SELECT employee_id, salary,
       RANK() OVER (ORDER BY salary) AS rank
FROM employees;

LEAD
-----
Definition: The LEAD function provides access to a subsequent row's value in the same result set without needing a self-join.

Example
--------
SELECT employee_id, salary,
       LEAD(salary) OVER (ORDER BY employee_id) AS next_salary
FROM employees;

LAG
-----
Definition: The LAG function provides access to a preceding row's value in the same result set.

Example
-------
SELECT employee_id, salary,
       LAG(salary) OVER (ORDER BY employee_id) AS previous_salary
FROM employees;

CASE
-----
Definition: The CASE statement allows for conditional logic in SQL queries, similar to an if-else statement.

Example
-------
SELECT employee_id, salary,
       CASE 
           WHEN salary >= 100000 THEN 'High'
           WHEN salary >= 50000 THEN 'Medium'
           ELSE 'Low'
       END AS salary_category
FROM employees;

15 . 7 Scalar and Table Functions
----------------------------------
Scalar Functions: Return a single value.

Scalar functions
-----------------
LCASE (LOWER) : Converts a string to lowercase.
SELECT LOWER('Hello World');

CASE: A conditional expression that returns values based on specified conditions.
SELECT CASE WHEN condition THEN result ELSE other_result END;

LEN (LENGTH): Returns the length of a string.
SELECT LENGTH('Hello');

MID (SUBSTRING): Extracts a substring from a string.
SELECT SUBSTRING('Hello World' FROM 1 FOR 5);

ROUND: Rounds a numeric value to a specified number of decimal places.
SELECT ROUND(123.4567, 2);

NOW: Returns the current date and time.
SELECT NOW();

FORMAT: Formats a value according to a specified format.
SELECT FORMAT('Hello %s', 'World');

INITCAP: Capitalizes the first letter of each word in a string.
SELECT INITCAP('hello world');

LEFT: Returns the leftmost characters of a string.
SELECT LEFT('Hello', 2);

RIGHT: Returns the rightmost characters of a string.
SELECT RIGHT('Hello', 2);

CONCAT: Concatenates two or more strings.
SELECT CONCAT('Hello', ' ', 'World');

ABS: Returns the absolute value of a number.
SELECT ABS(-10);

CEIL (CEILING): Rounds a number up to the nearest integer.
SELECT CEIL(10.2);

FLOOR: Rounds a number down to the nearest integer.
SELECT FLOOR(10.8);

UPPER: Converts a string to uppercase.
SELECT UPPER('Hello World');

LOWER: Converts a string to lowercase (similar to LCASE).
SELECT LOWER('Hello World');

Table Functions: Return a set of rows.

Types of table functions
------------------------
Set-Returning Functions (SRFs)
Table-Valued-Function
Common Table Expressions

15 . 8 Procedures (CREATE PROCEDURE)
-------------------------------------
Stored procedures are used to perform operations that may include multiple SQL statements.

Syntax :-

CREATE PROCEDURE procedure_name (parameters)
LANGUAGE plpgsql
AS $$
BEGIN
  -- PL/pgSQL code
END;
$$;

Example :-

CREATE PROCEDURE update_employee_salary(employee_id INT, new_salary NUMERIC)
LANGUAGE plpgsql
AS $$
BEGIN
  UPDATE employees
  SET salary = new_salary
  WHERE id = employee_id;
END;
$$;

Calling a procedure :-

CALL update_employee_salary(1, 50000);

15 . 9 Cursors
---------------
Cursors are used to retrieve rows one at a time from a result set.

Creating a Cursor :-

DECLARE cursor_name CURSOR FOR query;

Fetching from a Cursor :-

FETCH NEXT FROM cursor_name INTO variable;

Example :-

DO $$
DECLARE
  emp_cursor CURSOR FOR SELECT name FROM employees;
  emp_name TEXT;
BEGIN
  OPEN emp_cursor;
  LOOP
    FETCH NEXT FROM emp_cursor INTO emp_name;
    EXIT WHEN NOT FOUND;
    RAISE NOTICE '%', emp_name;
  END LOOP;
  CLOSE emp_cursor;
END;
$$;

15 . 10 Function Overloading
-----------------------------
PostgreSQL supports function overloading, which means you can define multiple functions with the same name but different parameters.

Example :-

CREATE FUNCTION add(a INT, b INT)
RETURNS INT AS $$
BEGIN
  RETURN a + b;
END;
$$ LANGUAGE plpgsql;

CREATE FUNCTION add(a NUMERIC, b NUMERIC)
RETURNS NUMERIC AS $$
BEGIN
  RETURN a + b;
END;
$$ LANGUAGE plpgsql;

16 . Views in PostgreSQL
------------------------
Views are virtual tables based on the result of a SQL query. They allow you to simplify complex queries, provide a way to present data in a specific format, and control access to data.

Pros of Views
--------------
Simplified Queries: Views can simplify complex queries, making it easier to access data.
Data Security: Views can restrict access to specific columns or rows, enhancing data security.
Logical Abstraction: They provide a way to present data in a specific format without altering the underlying tables.
Reusability: Views can be reused across different queries, reducing redundancy.
Consistency: Changes in the underlying table structure are automatically reflected in the view, ensuring consistency.

Cons of Views
-------------
Performance Overhead: Views may introduce performance overhead, especially if they are complex or involve multiple joins.
Limited Updatability: Not all views are updatable, meaning you might not be able to insert, update, or delete data through them.
Dependency Management: Changes to underlying tables can break views, requiring maintenance and updates to the views.
Complexity in Debugging: Troubleshooting issues can become more complex, as you need to consider both the view and its underlying queries.

Creating a View :-
-------------------
A view is created using the CREATE VIEW statement. It defines a virtual table based on the result of a query.

Syntax :-

CREATE VIEW view_name AS
SELECT columns
FROM table
WHERE condition;

Example :- 

CREATE VIEW employee_details AS
SELECT id, name, department_id
FROM employees
WHERE status = 'active';

This view employee_details presents a subset of the employees table where the status is 'active'.

List Views :- 
--------------
Use the \dv command in psql or query the pg_views system catalog

SELECT * FROM pg_views;

Drop a View :-
-------------------
DROP VIEW view_name;

DROP VIEW employee_details;


Materialized Views
-------------------
Materialized Views are similar to regular views, but they store the result of the query physically. This can improve performance for complex queries by avoiding recalculation of results each time the view is queried.

Creating a Materialized View :-
--------------------------------
Syntax :-

CREATE MATERIALIZED VIEW view_name AS
SELECT columns
FROM table
WHERE condition;

Example :-

CREATE MATERIALIZED VIEW department_summary AS
SELECT department_id, COUNT(*) AS num_employees
FROM employees
GROUP BY department_id;

Refreshing a Materialized View :-
-----------------------------------
Materialized views need to be refreshed to update their data. You can refresh them manually or set up automatic refreshes.

Syntax :-

REFRESH MATERIALIZED VIEW view_name;

Example :-

REFRESH MATERIALIZED VIEW department_summary;

Dropping a Materialized View :-
-------------------------------
Syntax :-

DROP MATERIALIZED VIEW view_name;

Example :-

DROP MATERIALIZED VIEW department_summary;

Updateable Views
----------------
Updateable Views allow you to perform INSERT, UPDATE, and DELETE operations on the view, which are then reflected in the underlying tables.

Creating an Updateable View :-

To create an updateable view, ensure that the view's query allows for updating (e.g., it does not involve joins or aggregation).

Example :-

CREATE VIEW active_employees AS
SELECT id, name
FROM employees
WHERE status = 'active';


Security with Views
-------------------
Views can enhance security by restricting access to specific columns or rows of a table. Users can interact with data through views without accessing the underlying tables directly.

Creating a Secure View :-

CREATE VIEW department_employees AS
SELECT name, department_id
FROM employees
WHERE department_id = 101;

Only employees in department 101 are visible through this view.

Grant Permissions :-

GRANT SELECT ON view_name TO user_name;

Revoke Permissions :-

REVOKE SELECT ON view_name FROM user_name;

Example :-
GRANT SELECT ON department_employees TO analyst;
REVOKE SELECT ON department_employees FROM analyst;


17 . Transactions and Concurrency Control in PostgreSQL
-------------------------------------------------------
transaction is a sequence of one or more operations (such as queries or updates) that are executed as a single unit of work. The key characteristic of a transaction is that it follows the ACID properties:

PostgreSQL ensures that multiple users can access and manipulate data simultaneously while maintaining data integrity. This is handled through transactions and concurrency control mechanisms.

17 . 1 ACID Properties
----------------
Atomicity
-----------
This property ensures that a transaction is treated as a single "unit" of work. It either completes fully or does not execute at all. If any part of the transaction fails, the entire transaction is rolled back, leaving the database in its previous state.

Consistency
-------------
This property ensures that a transaction brings the database from one valid state to another valid state, maintaining database invariants. Database remains in a consistent state before and after a transaction.

Isolation
----------
This property ensures that transactions are isolated from each other. Intermediate results of a transaction are not visible to other transactions until the transaction is complete. This prevents transactions from interfering with each other.

Durability
-----------
This property ensures that once a transaction is committed, its changes are permanent and will survive system crashes or failures. The changes made by a committed transaction are stored in non-volatile memory.

Isolation extra topics
----------------------
Read Phenomena
--------------
Dirty Reads: Reading uncommitted changes made by another transaction.
Non-Repeatable Reads: Data read once in a transaction is changed by another transaction when read again.
Phantom Reads: New rows added by another transaction appear during the execution of a transaction.

Isolation Levels
----------------
Read Uncommitted
-----------------
Definition: Allows reading uncommitted changes, which can result in dirty reads.
Example: Reading data that may later be rolled back.

Read Committed
--------------
Definition: Only committed data can be read, preventing dirty reads but allowing non-repeatable reads.
Example: Data may change between different reads in the same transaction.

Repeatable Reads
-----------------
Definition: Ensures the same data can be read multiple times within a transaction without it changing, but doesn't prevent phantom reads.
Example: Guarantees consistent reads of the same data.

Serialized Transactions
-----------------------
Definition: The highest isolation level, ensuring that transactions are executed one after the other as if they were serialized.
Example: Prevents all read phenomena but is slower.

ACID Property implementation
============================
ATOMICITY : How to Implement: Use transactions.
-----------------------------------------------
A transaction groups several operations into a single unit. If any part of the transaction fails, the entire transaction is rolled back (undone).

In SQL, you start a transaction with BEGIN and end it with COMMIT. If something goes wrong, you use ROLLBACK to undo changes.

Example
-------
BEGIN;
UPDATE account SET balance = balance - 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 2;
COMMIT;

CONSISTENCY : How to Implement: Define rules, constraints, and triggers in the database.
----------------------------------------------------------------------------------------
Ensure that the database adheres to rules like data types, foreign keys, and unique constraints. If a transaction violates these rules, it is rolled back.

Example: If you set a constraint that balance cannot be negative, any transaction violating this rule will fail.

ISOLATION : How to Implement: Set the correct Isolation Level.
--------------------------------------------------------------
Isolation levels control how transactions interact with each other. You can choose the level depending on how strict you want the isolation to be:

Read Uncommitted (least isolation)
Read Committed (default)
Repeatable Read
Serializable (most isolation)

Example
--------
SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;

DURABILITY : How to Implement: Use durable storage and transaction logging.
----------------------------------------------------------------------------
When a transaction is committed, ensure the changes are saved to a reliable storage system (e.g., a hard drive or SSD).

Most modern databases, including PostgreSQL and MySQL, handle durability automatically by writing transaction logs to disk. If the system crashes, these logs ensure that committed transactions are not lost.

17 . 2 BEGIN, COMMIT, and ROLLBACK
----------------------------------
BEGIN: Starts a new transaction.
COMMIT: Saves all the changes made during the transaction to the database.
ROLLBACK: Reverts all changes made during the transaction, bringing the database back to its state before the transaction started.

Example :-

BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
COMMIT; -- Commits the changes

17 . 3 Savepoints
-----------------
Savepoints allow you to set points within a transaction that you can roll back to, without rolling back the entire transaction.

SAVEPOINT: Creates a savepoint in the transaction.
ROLLBACK TO SAVEPOINT: Rolls back to the specific savepoint without affecting the rest of the transaction.
RELEASE SAVEPOINT: Removes the savepoint, making it no longer accessible.

Example :-

BEGIN;
UPDATE accounts SET balance = balance - 100 WHERE account_id = 1;
SAVEPOINT sp1; -- Set savepoint
UPDATE accounts SET balance = balance + 100 WHERE account_id = 2;
-- Error happens here
ROLLBACK TO SAVEPOINT sp1; -- Rolls back to savepoint
COMMIT;

17 . 4 Isolation Levels
-----------------------
Isolation levels define how transactions interact with each other, specifically when one transaction reads data modified by another.

Read Uncommitted: A transaction can read uncommitted changes from other transactions (dirty reads). Rarely used in PostgreSQL.
Read Committed (default): A transaction can only read committed changes made by other transactions.
Repeatable Read: A transaction can read the same data multiple times without seeing changes made by other transactions during its execution.
Serializable: The strictest isolation level. It ensures transactions are executed as if they were serial, one after the other, preventing all concurrency issues.

Setting Isolation Level :-

BEGIN TRANSACTION ISOLATION LEVEL REPEATABLE READ;

17 . 5 Locks
------------
Locks control access to data to ensure safe, concurrent operations. PostgreSQL uses row-level locks and table-level locks.

1 . Row-level locks: Locks a specific row during an update to prevent other transactions from modifying it.

FOR UPDATE: Locks selected rows for update.
FOR SHARE: Allows reading of locked rows but not updating.

Example :-

SELECT * FROM accounts WHERE account_id = 1 FOR UPDATE;

2 . Table-level locks: Locks the entire table to prevent concurrent changes.

LOCK table_name [IN lock_mode]: Locks a table in a specified mode (e.g., ACCESS EXCLUSIVE, ACCESS SHARE).

Example :-

LOCK TABLE accounts IN ACCESS EXCLUSIVE MODE;


17 . 6 Deadlocks and Prevention
--------------------------------
A deadlock occurs when two or more transactions block each other by holding a resource the other needs.

Deadlock Prevention :-

Use a consistent order of locking: Ensure that transactions acquire locks in the same order.
Use shorter transactions: The longer a transaction runs, the higher the chance of a deadlock.
Detect and resolve deadlocks: PostgreSQL automatically detects deadlocks and aborts one of the conflicting transactions.

Example of a deadlock :-

Transaction A locks row 1 and waits for row 2.
Transaction B locks row 2 and waits for row 1.
To avoid deadlocks, structure queries to lock resources in the same order.

18 . 1 Data Manipulation Language (DML)
---------------------------------------
DML commands are used to manipulate and manage data within tables. They allow you to perform operations like inserting, updating, deleting, and retrieving data.

SELECT: Retrieves data from one or more tables.
SELECT * FROM employees;

INSERT: Adds new rows to a table.
INSERT INTO employees (name, position, salary) VALUES ('Alice', 'Developer', 60000);

UPDATE: Modifies existing rows in a table
UPDATE employees SET salary = 65000 WHERE name = 'Alice';

DELETE: Removes rows from a table
DELETE FROM employees WHERE name = 'Alice';

18 . 2 Data Definition Language (DDL)
-------------------------------------
DDL commands are used to define, alter, and manage database structures such as tables, indexes, and schemas. They deal with the schema or structure of the database rather than the data itself.

CREATE: Creates new database objects like tables, views, indexes, etc
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    position VARCHAR(50),
    salary DECIMAL(10, 2)
);

ALTER: Modifies the structure of existing database objects
ALTER TABLE employees ADD COLUMN hire_date DATE;

DROP: Deletes database objects like tables or indexes.
DROP TABLE employees;

TRUNCATE: Removes all rows from a table, but keeps the table structure
TRUNCATE TABLE employees;

18 . 3 Data Control Language (DCL)
----------------------------------
DCL commands are used to control access to data within the database. They are concerned with permissions and security.

GRANT: Provides specific privileges to users or roles
GRANT SELECT, INSERT ON employees TO user1;

REVOKE: Removes specific privileges from users or roles
REVOKE INSERT ON employees FROM user1;


19 . Three schema architecture
------------------------------
The 3-Schema Architecture is a framework for designing and interacting with databases, which helps in achieving data abstraction and separation of concerns. This architecture involves three different levels of database schema: the Internal Schema, the Conceptual Schema, and the External Schema. Each schema serves a specific purpose and provides different levels of abstraction.

1. Internal Schema (Physical Schema)
-------------------------------------
The internal schema, also known as the physical schema, describes how data is stored on disk. It includes the details of the physical storage of data, such as file structures, indexing methods, and access paths.

2. Conceptual Schema (Logical Schema)
-------------------------------------
The conceptual schema, or logical schema, represents the entire database structure at a high level of abstraction. It describes what data is stored in the database and the relationships among those data without concern for how the data is physically stored.

3. External Schema (View Schema)
--------------------------------
The external schema, also known as the view schema, defines different views of the database for various users or user groups. Each view presents a subset of the database tailored to specific needs or security requirements.

20 . Normalization
-------------------
Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity. The goal is to design tables that minimize duplication and ensure that dependencies are properly enforced. Normalization involves decomposing tables into smaller tables and defining relationships between them.

Normal Forms
------------
First Normal Form (1NF)
------------------------
Requirement: Each table column must contain atomic (indivisible) values, and each column must contain values of a single type.

Goal: Eliminate repeating groups and ensure that each column contains only one value.

Second Normal Form (2NF)
------------------------
Requirement: Achieve 1NF and ensure that all non-key attributes are fully functionally dependent on the entire primary key.

Goal: Remove partial dependencies, where a non-key attribute depends only on a part of the composite primary key.

Third Normal Form (3NF)
------------------------
Requirement: Achieve 2NF and ensure that all non-key attributes are not transitively dependent on the primary key.

Goal: Remove transitive dependencies, where non-key attributes depend on other non-key attributes.

Boyce-Codd Normal Form (BCNF)
------------------------------
Requirement: Achieve 3NF and ensure that every determinant is a candidate key.

Goal: Address anomalies not handled by 3NF, where there are multiple candidate keys.

Fourth Normal Form (4NF)
-------------------------
Requirement: Achieve BCNF and ensure that multi-valued dependencies are absent.
Goal: Handle cases where a table contains two or more independent multi-valued facts.

Fifth Normal Form (5NF)
-----------------------
Requirement: Achieve 4NF and ensure that there are no join dependencies that are not implied by candidate keys.
Goal: Decompose tables to eliminate redundancy arising from join dependencies.

Sixth Normal Form (6NF) (less common)
--------------------------------------
Requirement: Achieve 5NF and handle temporal data by ensuring that each table represents a single fact at a single point in time.
Goal: Manage complex scenarios involving time-based data.

Anomalies in Databases
----------------------
Insertion Anomalies
-------------------
Data Redundancy: Inserting duplicate data because of poor database design.
Missing Data: Being unable to insert data because certain required fields are not available.

Deletion Anomalies
------------------
Losing Data: Deleting one piece of information causes unintended loss of related data.
Updation Anomalies:

Inconsistency: Updating a value in one record but not updating it in all other related records, leading to conflicting data.
Updating Unnecessary Records: Having to update the same value in multiple places unnecessarily due to a non-normalized design.


21 . Schema
-------------
A schema is a logical container within a database that holds tables, views, indexes, etc. It allows for better organization and segregation of objects.

CREATE SCHEMA sales;
CREATE TABLE sales.customers (
    customer_id SERIAL PRIMARY KEY,
    name VARCHAR(100)
);

22 . Relationships
-------------------
1. One-to-One (1:1)
--------------------
This relationship means that each record in one table is related to exactly one record in another table. Conversely, each record in the second table is related to exactly one record in the first table.

2. One-to-Many (1)
------------------
In this relationship, a single record in one table can be associated with multiple records in another table, but each record in the second table is linked to only one record in the first table.

Example: Consider a database with a table of Authors and a table of Books. Each author can write multiple books, but each book is written by only one author. Thus, an author has a one-to-many relationship with books.

3. Many-to-Many (N)
--------------------
In this relationship, multiple records in one table can be associated with multiple records in another table. This often requires an intermediary table to manage the relationships.

Example: Think of a database for a university with a Students table and a Courses table. Students can enroll in multiple courses, and each course can have multiple students enrolled. To manage this, an additional table called Enrollments would link students and courses.
Joins

23 . Full-text Search with PostgreSQL
-------------------------------------
In full-text search, PostgreSQL breaks down text into a list of tokens (words, phrases) and then searches for matches based on the meaning of these tokens rather than exact text. The search engine matches against these tokenized lists and can rank results by relevance.

Basic Full-text Search: You can perform full-text search using the to_tsvector (text search vector) and to_tsquery (text search query) functions. to_tsvector turns the text into a searchable format, while to_tsquery processes the search term.

SELECT to_tsvector('english', 'The quick brown fox jumps over the lazy dog');

SELECT to_tsquery('english', 'quick & fox');


24 . String Functions
-------------------
CONCAT()
Purpose: Concatenates multiple strings into a single string.
Example: CONCAT('Hello', ' ', 'World') returns 'Hello World'.

LENGTH()
Purpose: Returns the length of a string in bytes.
Example: LENGTH('Hello') returns 5.

CHAR_LENGTH() or LENGTH()
Purpose: Returns the number of characters in a string.
Example: CHAR_LENGTH('Hello') returns 5.

UPPER()
Purpose: Converts a string to uppercase.
Example: UPPER('hello') returns 'HELLO'.

LOWER()
Purpose: Converts a string to lowercase.
Example: LOWER('HELLO') returns 'hello'.

SUBSTRING() or SUBSTR()
Purpose: Extracts a substring from a string.
Example: SUBSTRING('Hello World', 1, 5) returns 'Hello'.

TRIM()
Purpose: Removes leading and trailing spaces from a string.
Example: TRIM(' Hello ') returns 'Hello'.

REPLACE()
Purpose: Replaces occurrences of a substring within a string with another substring.
Example: REPLACE('Hello World', 'World', 'MySQL') returns 'Hello MySQL'.

INSTR()
Purpose: Returns the position of the first occurrence of a substring within a string.
Example: INSTR('Hello World', 'World') returns 7.

LEFT()
Purpose: Returns the leftmost n characters from a string.
Example: LEFT('Hello World', 5) returns 'Hello'.

RIGHT()
Purpose: Returns the rightmost n characters from a string.
Example: RIGHT('Hello World', 5) returns 'World'.

25 . Numeric Functions
--------------------
ROUND()
Purpose: Rounds a number to a specified number of decimal places.
Example: ROUND(123.4567, 2) returns 123.46.

FLOOR()
Purpose: Returns the largest integer less than or equal to a number.
Example: FLOOR(123.456) returns 123.

CEIL() or CEILING()
Purpose: Returns the smallest integer greater than or equal to a number.
Example: CEIL(123.456) returns 124.

ABS()
Purpose: Returns the absolute value of a number.
Example: ABS(-123.45) returns 123.45.

MOD()
Purpose: Returns the remainder of a division operation.
Example: MOD(10, 3) returns 1.

RAND()
Purpose: Returns a random floating-point number between 0 and 1.
Example: RAND() might return 0.123456.

26 . Date and Time Functions
--------------------------
NOW()
Purpose: Returns the current date and time.
Example: NOW() might return '2024-08-19 12:34:56'.

CURDATE()
Purpose: Returns the current date.
Example: CURDATE() might return '2024-08-19'.

CURTIME()
Purpose: Returns the current time.
Example: CURTIME() might return '12:34:56'.

DATE_ADD()
Purpose: Adds a specified time interval to a date.
Example: DATE_ADD('2024-08-19', INTERVAL 10 DAY) returns '2024-08-29'.

DATE_SUB()
Purpose: Subtracts a specified time interval from a date.
Example: DATE_SUB('2024-08-19', INTERVAL 10 DAY) returns '2024-08-09'.

DATEDIFF()
Purpose: Returns the number of days between two dates.
Example: DATEDIFF('2024-08-19', '2024-08-09') returns 10.

YEAR()
Purpose: Extracts the year from a date.
Example: YEAR('2024-08-19') returns 2024.

MONTH()
Purpose: Extracts the month from a date.
Example: MONTH('2024-08-19') returns 8.

DAY()
Purpose: Extracts the day of the month from a date.
Example: DAY('2024-08-19') returns 19.

27 . Closure
-------------
the concept of closure is typically associated with recursive queries and hierarchical data. Closure tables are a design pattern used to handle hierarchical data efficiently. This pattern is particularly useful for representing tree structures, such as organizational charts or category hierarchies.

28 . Closure Table Design
-------------------------
A closure table stores the relationships between nodes (rows) in a hierarchy. Each row in the closure table represents a path between two nodes in the hierarchy. The table usually has three columns: ancestor, descendant, and depth.

ancestor: The starting node of the path.
descendant: The ending node of the path.
depth: The number of edges between the ancestor and the descendant.

29 . PostgreSQL
----------------
PostgreSQL is a powerful, open-source relational database management system (RDBMS) known for its robustness, extensibility, and standards compliance.

30 . Client/Server Model
------------------------
Client/Server Model: PostgreSQL operates on a client/server architecture where

Server: The PostgreSQL server process (often called postgres) manages the database, handles requests, executes SQL queries, and maintains data.

Client: Client applications (such as psql, pgAdmin, or custom applications) connect to the server to send SQL queries and retrieve results.

31 . MySQL vs. PostgreSQL
--------------------------
1. Features and Capabilities:

MySQL: Known for its simplicity and speed. It’s often chosen for web applications and small to medium-sized projects.

PostgreSQL: Known for its advanced features, standards compliance, and extensibility. It’s suitable for complex applications and large-scale systems.

2. Data Types and Extensibility:

MySQL: Supports standard data types and some custom types but has limited extensibility.

PostgreSQL: Supports a wide range of data types, including custom types, arrays, JSON/JSONB, and more. It’s highly extensible with support for custom functions and operators.

3. ACID Compliance:

MySQL: ACID compliance depends on the storage engine used (e.g., InnoDB is ACID-compliant).

PostgreSQL: Fully ACID-compliant by default, ensuring strong transactional support.

4. SQL Standards Compliance:

MySQL: Good SQL standards compliance but with some deviations.

PostgreSQL: Highly compliant with SQL standards and often includes advanced features not found in other RDBMS.

5. Performance and Scalability:

MySQL: Generally known for its speed in read-heavy workloads and ease of use. Scaling can be achieved through vertical scaling or sharding.

PostgreSQL: Known for its robustness and performance in complex queries and write-heavy workloads. It supports advanced indexing and partitioning strategies and offers horizontal scaling options through extensions like Citus.

6. Replication and High Availability:

MySQL: Supports master-slave replication, master-master replication, and clustering solutions like MySQL Cluster.

PostgreSQL: Supports streaming replication, logical replication, and high availability solutions like Patroni and pgpool.

7. Community and Support:

MySQL: Backed by Oracle with a strong community and commercial support options.

PostgreSQL: Strong open-source community with extensive documentation and support options from various vendors.

8. Licensing:

MySQL: Uses the GNU General Public License (GPL), with commercial licenses available from Oracle.

PostgreSQL: Uses the PostgreSQL License, a permissive open-source license similar to the MIT License.

9. JSON Support:

MySQL: Provides JSON support but with fewer advanced features compared to PostgreSQL.

PostgreSQL: Offers extensive JSON and JSONB support, including advanced querying and indexing.

10. Full-Text Search:

MySQL: Provides basic full-text search capabilities.

PostgreSQL: Offers advanced full-text search features with support for various languages and ranking options.

32 . Which one is efficient PostgreSQL or MySQL
-----------------------------------------------
In terms of efficiency, it really depends on the use case. PostgreSQL is often more efficient for complex queries and large datasets, thanks to its advanced features like full ACID compliance, support for advanced data types, and robust concurrency control through MVCC. This makes it an excellent choice for applications requiring data integrity and analytics.

On the other hand, MySQL tends to be faster for read-heavy workloads and simpler queries, which makes it a popular choice for web applications. It also offers easier replication setups for scaling horizontally.

In summary, I would choose PostgreSQL for enterprise-level applications or analytical tasks and MySQL for straightforward web applications with high read speeds."

33 . Which one is efficient PostgreSQL or mongoDB
-------------------------------------------------
When comparing MongoDB and PostgreSQL, efficiency largely depends on the specific application requirements.

PostgreSQL is a relational database that excels in complex queries and data integrity. It supports advanced features like ACID compliance, complex joins, and a rich set of data types. This makes it a strong choice for applications that require structured data and transactional integrity, such as financial systems or data analytics.

MongoDB, on the other hand, is a NoSQL database designed for flexibility and scalability. It stores data in a JSON-like format, allowing for unstructured or semi-structured data. This makes it highly efficient for applications with rapidly changing schemas or when handling large volumes of data, such as real-time analytics, content management systems, or big data applications.

In summary, I would opt for PostgreSQL for structured data and complex transactions, while MongoDB is ideal for flexibility and high scalability with unstructured data."

34 . Web scaled
----------------
In the context of PostgreSQL, web scaling refers to the ability of the database to handle increasing loads and traffic, especially for web applications. This involves several strategies and features designed to ensure that PostgreSQL can efficiently manage large volumes of data and concurrent user requests. Here are some key aspects of web scaling in PostgreSQL:

Horizontal scaling
	Replica set
	Sharding

connection pooling
	Using connection pooling tools like PgBouncer can help manage database connections more efficiently, reducing the overhead of establishing new connections and allowing more concurrent users.

Partitioning
	PostgreSQL supports table partitioning, allowing you to divide large tables into smaller, more manageable pieces. This can improve query performance and make maintenance tasks more efficient.

Indexing
	Effective indexing strategies, including multi-column indexes and expression indexes, can greatly enhance query performance, especially for complex queries and large datasets.

Performance Tuning
	PostgreSQL provides numerous configuration settings that can be optimized based on workload characteristics. Tuning parameters such as memory usage, query planner settings, and cache sizes can significantly improve performance.

Advanced Features
	PostgreSQL offers features like JSONB for storing and querying unstructured data, which can be beneficial for web applications that need flexibility.

High Availability
	Tools like Patroni or the built-in replication features ensure high availability by automatically handling failovers and maintaining service uptime, which is crucial for web applications.

Monitoring and Maintenance
	Regular monitoring of performance metrics and implementing maintenance tasks like vacuuming and analyzing can keep the database running efficiently, even under heavy load.

35 . When to Use SQL
--------------------
Structured Data: When your data has a clear structure with fixed schemas (e.g., customer records, financial data).
Complex Queries: If you need to perform complex queries involving multiple tables, joins, and transactions.
Data Integrity: When data consistency and integrity are critical (e.g., banking systems).
ACID Transactions: If your application requires strict compliance with ACID properties (Atomicity, Consistency, Isolation, Durability).

36 . When to Use NoSQL
------------------------
Unstructured or Semi-Structured Data: When your data doesn’t fit neatly into tables (e.g., JSON documents, logs).
Scalability: If you expect to handle large volumes of data and need to scale out horizontally (adding more servers).
Flexibility: When you need to handle changing schemas and rapidly evolving data models (e.g., content management systems).
High Throughput: If your application requires high write and read speeds with low latency (e.g., real-time analytics).

37 . Fork
---------
 forking refers to the process of creating a new process (a child process) that can run concurrently with the original process (the parent process). This is part of PostgreSQL's architecture to handle multiple connections and queries efficiently

38 Data types that unique to PostgreSQL
----------------------------------------
ARRAY
JSON
JSONB
HSTORE
CIDR
INET
MACADDR
TSVECTOR
TSQUERY
UUID
XML
INTERVAL
POINT
LINE
LSEG
BOX
POLYGON
PATH
BIGSERIAL
SMALLSERIAL

39 . Database Migration
------------------------
Database migration is the process of transferring data from one database system to another or updating the structure of a database. This can involve moving data to a new version of the same database or to a different type of database.

39 . 1 Add, Delete, Migration
------------------------------
Add Migration: This involves creating new database structures, such as tables or columns, and defining how the data should be added.

Delete Migration: This involves removing existing database structures, like dropping tables or columns.

39 . 2 Up Migration
-------------------
Up migration refers to the process of applying changes to the database schema. This includes adding new features, modifying existing structures, or transforming data in a way that reflects new requirements.

39 . 3 Down Migration
---------------------
Down migration is the reverse process of up migration. It undoes changes made in an up migration, allowing you to revert to a previous state of the database schema. This is useful for rolling back changes if something goes wrong.

40 Combining Queries
---------------------
UNION
------
Definition: Combines the result sets of two or more SELECT queries and removes duplicate rows.

Example
-------
SELECT column1 FROM table1
UNION
SELECT column1 FROM table2;

UNION ALL
---------
Definition: Combines the result sets of two or more SELECT queries without removing duplicates.

Example
-------
SELECT column1 FROM table1
UNION ALL
SELECT column1 FROM table2;

INTERSECT
---------
Definition: Returns only the rows that are common to both SELECT queries, removing duplicates.

Example
--------
SELECT column1 FROM table1
INTERSECT
SELECT column1 FROM table2;

INTERSECT ALL
--------------
Definition: Returns all common rows from both SELECT queries, including duplicates.

Example
-------
SELECT column1 FROM table1
INTERSECT ALL
SELECT column1 FROM table2;

EXCEPT
------
Definition: Returns rows from the first SELECT query that are not present in the second, removing duplicates.

Example
--------
SELECT column1 FROM table1
EXCEPT
SELECT column1 FROM table2;

EXCEPT ALL
----------
Definition: Returns rows from the first SELECT query that are not present in the second, including duplicates.

Example
--------
SELECT column1 FROM table1
EXCEPT ALL
SELECT column1 FROM table2;

41 . Extra topics
-------------------
1. EXPLAIN
-----------
Definition: A PostgreSQL command used to display the execution plan of a query.
Purpose: Helps in understanding how a query will be executed (which operations will be performed, which indexes will be used).

Example
-------
EXPLAIN SELECT * FROM users WHERE id = 1;

2. Heap Scan
-------------
Definition: A method of scanning a table where PostgreSQL reads all rows sequentially from the disk.

Purpose: Used when no indexes are available or when scanning the entire table is needed.
Example: This occurs when you query a table without specifying an indexable condition

3. Parallel Scan
-----------------
Definition: A method of scanning a table using multiple CPU cores to split the workload and speed up large table scans.

Purpose: Improves query performance by parallelizing the scanning process.

Example: For large tables, PostgreSQL can divide the table into parts, and different workers scan different parts simultaneously.

4. Planner
----------
Definition: The PostgreSQL component responsible for deciding the most efficient way to execute a query.

Purpose: It analyzes queries and selects the optimal execution plan (whether to use indexes, perform sequential scans, etc.).

Example: The planner might choose an index scan if an indexed column is used in the query's condition.

5. COPY
--------
Definition: A PostgreSQL command used to import or export data between a table and a file.

Purpose: Efficiently handles large amounts of data for bulk insertions or exports.

Example
-------
COPY users TO '/path/to/file.csv' CSV;
COPY users FROM '/path/to/file.csv' CSV;


SQL Queries and commands
------------------------
List database
-------------
\l

Connect database
----------------
\c database_name

List tables in the current databse
----------------------------------
\dt

Show the schema of the table
-----------------------------
\d table_name

Move to superuser
-----------------
SET ROLE username;

Create databse
--------------
CREATE DATABSE databse_name;

Create table
------------
CREATE TABLE table_name;

Drop database
-------------
DROP DATABASE database_nane;

Drop table
-----------
DROP TABLE table_name;

DROP Constraint
---------------
ALTER TABLE TABLE DROP CONSTRAINT constraint_name;

Comment
--------
--  Single line comment
/* Multi line comment */

1. SELECT: Retrieve data from a database

SELECT column1, column2
FROM table_name
WHERE condition;

2. INSERT INTO: Insert new data into a database

INSERT INTO table_name (column1, column2, column3)
VALUES (value1),(value2),(value3);

3. UPDATE: Update existing data within a table

UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;

4. DELETE: Delete data from a table

DELETE FROM table_name
WHERE condition;

5. CREATE TABLE: Create a new table in the database

CREATE TABLE table_name (
    column1 datatype,
    column2 datatype,
    column3 datatype,
    ...
);

6. ALTER TABLE: Modify an existing table

ALTER TABLE table_name
ADD column_name datatype;

ALTER TABLE table_name
DROP COLUMN column_name;

7. DROP TABLE: Delete a table from the database

DROP TABLE table_name;

8. JOIN: Combine rows from two or more tables

Inner join
----------
SELECT columns
FROM table1
INNER JOIN table2
ON table1.column = table2.column;

Left join
---------
SELECT columns
FROM table1
LEFT JOIN table2
ON table1.column = table2.column;

Right join
----------
SELECT columns
FROM table1
RIGHT JOIN table2
ON table1.column = table2.column;

Full join
---------
SELECT columns
FROM table1
FULL OUTER JOIN table2
ON table1.column = table2.column;

9. GROUP BY: Group rows that have the same values in specified columns

SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1;3 

10. ORDER BY: Sort the result set

SELECT column1, column2
FROM table_name
ORDER BY column1 ASC|DESC;

11. HAVING: Filter groups based on a specified condition

SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1
HAVING COUNT(*) > value;

12. LIMIT: Limit the number of rows returned

SELECT column1, column2
FROM table_name
LIMIT number;

Constraints
------------
1. UNIQUE Constraint
---------------------
Definition: Ensures that all values in a column or a combination of columns are unique across all rows in the table.

-- Create a table with a UNIQUE constraint on the email column
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL
);

-- Add a UNIQUE constraint to an existing table
ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE (email);

2. NOT NULL Constraint
-----------------------
Definition: Ensures that a column cannot have NULL values; every row must include a value for this column.

-- Create a table with a NOT NULL constraint on the username column
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL
);

-- Add a NOT NULL constraint to an existing column
ALTER TABLE users ALTER COLUMN username SET NOT NULL;

3. PRIMARY KEY Constraint
--------------------------
Definition: Uniquely identifies each row in a table. A primary key is a combination of one or more columns where the values are unique and not NULL.

-- Create a table with a PRIMARY KEY constraint on the id column
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) NOT NULL
);

-- Add a PRIMARY KEY constraint to an existing column
ALTER TABLE users ADD CONSTRAINT pk_users PRIMARY KEY (id);

4. FOREIGN KEY Constraint
-------------------------
Definition: Enforces a link between columns in different tables, ensuring that values in one table match values in another table.

-- Create a referenced table
CREATE TABLE departments (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Create a table with a FOREIGN KEY constraint linking to the departments table
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    department_id INTEGER REFERENCES departments(id)
);

-- Add a FOREIGN KEY constraint to an existing table
ALTER TABLE employees ADD CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments (id);

5. CHECK Constraint
-------------------
Definition: Ensures that all values in a column meet a specified condition.

-- Create a table with a CHECK constraint on the age column
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INTEGER CHECK (age >= 18)
);

-- Add a CHECK constraint to an existing table
ALTER TABLE users ADD CONSTRAINT age_check CHECK (age >= 18);

6. UUID Constraint
-------------------
Definition: When using UUIDs, you ensure that values are unique identifiers and used as primary keys or unique constraints.

-- Create a table with a UUID column as a PRIMARY KEY
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL
);

7. UNIQUE
----------
Ensures that all values in a column or a group of columns are distinct across all rows in the table.

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(50),
    model VARCHAR(50) UNIQUE
);

8. DEFAULT
-----------
Specifies a default value for a column when no value is provided during an INSERT operation.

CREATE TABLE cars (
    id SERIAL PRIMARY KEY,
    brand VARCHAR(50),
    colour VARCHAR(30) DEFAULT 'Unknown'
);

9. EXCLUSION
------------
Ensures that if any two rows are compared on the specified columns, at least one of those comparisons will evaluate to FALSE.

CREATE TABLE reservations (
    id SERIAL PRIMARY KEY,
    room_id INT,
    period TSRANGE,
    EXCLUDE USING GIST (room_id WITH =, period WITH &&)
);

Commands
---------
List Databases: \l or \list
Connect to Database: \c database_name
List Tables: \dt
Move to Superuser: (Log in with superuser or use SET ROLE if applicable)
List Specific Table: \d table_name
List Current Table: \d (shows details of the last specified or current table in context)

Create database :- CREATE DATABASE database_name;

Create table :- 
CREATE TABLE table_name (
    column1 data_type constraints,
    column2 data_type constraints,
    ...
);

example
---------
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL
);

Droping a database :- DROP DATABASE database_name;

Droping a table :- DROP TABLE table_name;

Drop a constraint from a table :- ALTER TABLE table_name DROP CONSTRAINT constraint_name;
example 
--------
ALTER TABLE users DROP CONSTRAINT unique_email;

Comments 
---------
--Single line comment
/* Multi line comment */

Database migration
-------------------
process of managing and applying changes to a database schema over time. It involves updating the structure of the database in a controlled and consistent manner, typically as part of a development workflow. This is crucial in evolving applications where the database schema needs to be modified to support new features, fix issues, or optimize performance.

	QUERIES
=====================

1 . Create databse
-------------------
CREATE DATABASE dbname;

2 . Crete table
----------------
CREATE TABLE  tablename (columnName type,columnName, type) Values('values1','value2');

3 . UPDATE
-----------

3 . 1 update single column
---------------------------
UPDATE table_name SET year = 2024 where brand = 'mahindra'

3 . 2 update multiple columns
------------------------------
UPDATE cars SET colur = 'red', year = 2024 WHERE model = 'Huracan'

3 . 3 update row based on condition
------------------------------------
UPDATE cars SET gen = 'z' WHERE year >= 2000;

3 . 4 update with subqueries
----------------------------
Update year based on the model in another table (assuming another table models with columns model and year)

UPDATE cars SET year (SELECT year FROM model WHERE cars.model = models.model) WHERE model IN (SELECT model FROM mmodels);

Update colour based on the average year from another table (assuming another table sales with columns model and year)

UPDATE cars SET colour = 'Gold' WHERE year = ( SELECT AVG(year) FROM sales WHERE cars.model = sales.model);

3 . 5 update all rows
---------------------
UPDATE cars SET colour = 'black';

3 . 6 update with JOIN
----------------------
UPDATE cars
SET colour = sales.new_colour
FROM sales
WHERE cars.model = sales.model			

3 . 7 conditional update with CASE
----------------------------------
UPDATE cars
SET colour = CASE
WHEN year = 2020 THEN 'Blue'
WHEN year = 2019 THEN 'Red'
WHEN year = 2021 THEN 'Black'
ELSE 'grey'
END;


4 . ALTER
---------
4 . 1 add a new column
----------------------
ALTER TABLE cars ADD COLUMN type VARCHAR(60)

ALTER TABLE cars ADD COLUMN mileage INT;

ALTER TABLE cars ADD COLUMN price DECIMAL(10, 2);

4 . 2 modifying an existing column
-------------------------------------
ALTER TABLE cars ALTER COLUMN year TYPE SAMLLINT;

ALTER TABLE cars ALTER COLUMN brand TYPE VARCHAR(100);

ALTER TABLE cars ALTER COLUMN colour SET DEFAULT 'black';

4 . 3 delete an existing column
-------------------------------
ALTER TABLE cars DROP COLUMN mileage;

4 . 4 rename a column
----------------------
ALTER TABLE cars RENAME COLUMN colour TO paint;

4 . 5 rename the table
----------------------
ALTER TABLE cars RENAME TO vehicles;

4 . 6 add a constraint
-----------------------
ALTER TABLE cars ADD CONSTRAINT unique_model UNIQUE (model);

ALTER TABLE cars ADD CONSTRAINT check_year_positive CHECK (year > 0);

4 . 7 drop a constraint
------------------------
ALTER TABLE cars DROP CONSTRAINT unique_model

4 . 8 add or drop an index
-------------------------
CREATE INDEX idx_brand ON cars (brand)

DROP INDEX idx_brand

4 . 9 change the table storage
-----------------------------
ALTER TABLE cars SET (fillfactor = 70)

4 . 10 set column to NOT NULL
------------------------------
ALTER TABLE cars ALTER COLUMN year SET NOT NULL

4 . 11 drop the NOT NULL
------------------------
ALTERT TABLE cars ALTER COLUMN year DROP NOT NULL;


5 . DELETE
----------

5 . 1 Delete a specific row
----------------------------
DELETE FROM cars WHERE id = 1;

5 . 2 Delete multiple rows based on a condition
-----------------------------------------------
DLETE FROM cars WHERE brand = "Toyota"

5 . 3 Delete rows based on multiple conditions
----------------------------------------------
DELETE FROM cars WHERE brand = "Toyota" AND year = 1998;

5 . 4 Delete all rows without dropping the table
-------------------------------------------------
DELETE FROM cars;

5 . 5 Delete row using a subquery
-----------------------------------
DELETE FROM cars WHERE model IN (SELECT model FROM models WHERE year < 2020);


6 . TRUNCATE
--------------
6 . 1 Truncate a table
------------------------
Remove all rows from a table without scanning the table

TRUNCATE TABLE cars;

6 . 2 Truncate multiple tables
-------------------------------
TRUNCATE TABLE cars, restaurents;

6 . 3 Truncate with restarting identity
----------------------------------------
Truncate the cars table and reset the SERIAL primary key sequence

TRUNCATE TABLE cars RESTART IDENTITY;

6 . 4 Truncate with cascade
---------------------------
Truncate the cars table and automatically truncate any tables that have a foreign key reference to it

TRUNCATE TABLE cars CASCADE;


OPEATORS
--------
SELECT * FROM cars WHERE brand = 'BMW';

SELECT * FROM cars WHERE year < 2020;

SELECT * FROM cars WHERE year > 2020;

SELECT * FROM cars WHERE year <= 2020;

SELECT * FROM cars WHERE year <= 2020;

SELECT * FROM cars WHERE brand != 'Toyota';

SELECT * FROM cars WHERE brand <> 'Toyota';


SELECT * FROM cars WHERE brand LIKE 'M%';   - CASE SENSITIVE , starting with M

SELECT * FROM cars WHERE brand ILIKE 'M%';  - CASE INSENSITIVE

SELECT * FROM cars WHERE brand LIKE '%m';   - ending with m

SELECT * FROM cars WHERE brand LIKE '%a%';   - includes a


SELECT * FROM cars WHERE brand = 'Toyota' AND year = 2020;

SELECT * FROM cars WHERE brand = 'Toyota' OR year = 2020;

SELECT * FROM cars WHERE brand IN ('Volvo','Toyota','Scania');

SELECT * FROM cars WHERE year BETWEEN 2020 AND 2024;

SELECT * FROM cars WHERE brand IS NULL;

SELECT * FROM cars WHERE year NOT BETWEEN 2020 AND 2024;


DISTINCT
--------
SELECT DISTINCT country FROM customers;   - distinct countries

SELECT COUNT (DISTINCT country) FROM customers;   - count distinct countries


ORDER BY
--------
SELECT * FROM customers ORDER BY customer_name;

SELECT * FROM customers ORDER BY customer_name DESC;


LIMIT and OFFSET
----------------
SELECT * FROM customers LIMIT 20;   - limit the returning records count to 20

SELECT * FROM customers LIMIT 20 OFFSET 40;   - limit the returning records count to 20 from 40


MIN & MAX
---------
SELECT MIN(price) FROM products;

SELECT MAX(price) FROM products;

SELECT MIN(price) AS lowest_price FROM products;   - make the returning value column name as lowest_price

SELECT MAX(price) AS highest_price FROM products;   - make the returning value column name as highest_price


COUNT
------
SELECT COUNT (customer_id) FROM customers WHERE city = 'London';

SUM
----
SELECT SUM(quantity) FROM order_details;

AVG
----
SELECT AVG(quantity) FROM order_details;

LIKE & ILIKE
-------------
SELECT * FROM cars WHERE brand LIKE 'M%';

SELECT * FROM cars WHERE brand ILIKE 'M%';

IN
---
The IN operator allows you to specify a list of possible values in the WHERE clause.

SELECT * FROM customers WHERE country IN ('Germany','France','UK');

NOT IN
-------
SELECT * FROM customers WHERE country NOT IN ('Germany','France','UK');

IN SELECT
---------
SELECT * FROM customers WHERE customer_id IN (SELECT customer_id FROM orders);

NOT IN SELECT
-------------
SELECT * FROM customers WHERE customer_id NOT IN (SELECT customer_id FROM orders);

AS
---
SELECT customer_id AS id FROM customers WHERE city = 'London';

AS is optional
--------------
SELECT customer_id id FROM customers WHERE city = 'London';

Concatenate columns
--------------------
SELECT product_name || unit AS product FROM products;

SELECT product_name || ' ' || unit AS product FROM products;

Alias
-------
for renaming column or table

SELECT brand AS "company" FROM cars;

SELECT brand AS "company", model AS "name" FROM cars;


JOIN
-----
A JOIN clause is used to combine rows from two or more tables, based on a related column between them.

INNER JOIN
-----------
Returns records that have matching values in both tables

SELECT testproduct_id,roduct_name,ategory_name FROM testproducts INNERJ JOIN categories ON testproducts.category_id = categories.category_id

LEFT JOIN
---------
Returns all records from the left table, and the matched records from the right table

SELECT testproduct_id,product_name,category_name FROM testproducts LEFT JOIN categories ON testproducts.category_id  categoriescategory_id

RIGHT JOIN
----------
Returns all records from the right table, and the matched records from the left table

SELECT testproduct_id,product_name,category_name FROM testproducts RIGHT JOIN categories ON testproducts.category_id = categories.category_id

FULL JOIN
---------
Returns all records when there is a match in either left or right table

SELECT testproduct_id,product_name,ategory_name FROM testproducts FULL JOIN categories ON testproducts.ategory_id  categories.tegory_id;

CROSS JOIN
----------
keyword matches ALL records from the "left" table with EACH record from the "right" table.

SELECT testproduct_id,product_name,ategory_name FROM testproducts CROSS OIN categories;

UNION
-----
The UNION operator is used to combine the result-set of two or more queries.

if some rows in the two queries returns the exact same result, only one row will be listed, because UNION selects only distinct values.

The UNION ALL to return the duplicate values;

The queries in the union must follow these rules:

They must have the same number of columns
The columns must have the same data types
The columns must be in the same order

SELECT product_id, product_name FROM products UNION SELECT testproduct_id,product_name FROM testproducts;

GROUP BY
---------
The GROUP BY clause groups rows that have the same values into summary rows, like "find the number of customers in each country".

The GROUP BY clause is often used with aggregate functions like COUNT(), MAX(), MIN(), SUM(), AVG() to group the result-set by one or more columns.

SELECT COUNT(customer_id) , country FROM customers GROUP BY country;

GROUP BY WITH JOIN
-------------------
SELECT customers.customer_name,COUNT(orders.order_id) FROM orders LEFT JOIN customers on orders.customer_id  customers.customer_id GROUP  customer_name;

HAVING
-------
The HAVING clause was added to SQL because the WHERE clause cannot be used with aggregate functions.

Aggregate functions are often used with GROUP BY clauses, and by adding HAVING we can write condition like we do with WHERE clauses.

SELECT count(customer_id), country FROM customers GROUP BY country HAVING COUNT(customer_id) > 5;

EXISTS
-------
The EXISTS operator is used to test for the existence of any record in a sub query.

The EXISTS operator returns TRUE if the sub query returns one or more records.

SELECT customer_name FROM customers WHERE EXIST (SELECT order_id FROM orders WHERE customer_id = customers.customer_id);

ANY
----
The ANY operator allows you to perform a comparison between a single column value and a range of other values.

returns a Boolean value as a result

returns TRUE if ANY of the sub query values meet the condition

SELECT product_name FROM products WHERE product_id = ANY (SELECT product_id  FROM order_details WHERE quantity > 120);


ALL
----
The ALL operator returns true if all of the subquery value meets the condition

SELECT product_name FROM products WHERE product_id = ALL (SELECT product_id FROM order_details WHERE quantity > 10);

CASE
-----
The CASE expression goes through conditions and returns a value when the first condition is met 