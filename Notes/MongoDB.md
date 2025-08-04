## `database` ##
================
A database is an organized collection of structured or unstructured data that is stored and accessed electronically. It is designed to efficiently store, manage, retrieve, and manipulate data for various applications.

## `database management System` ##
=================================
A Software that interacts with end users applications and the database itself to capture and analyze the data.

## `Types of Databases` ##
=========================
- Relational DB - `mysql, postgresql`

- No sql DB - `mongoDB, CouchDB`

- In memory DB - `Redis`   -> its like a cache, we can store apis that frequently used

- Distributed SQL DB - `cockroach DB`  -> A relational database that horizontally scales across multiple servers, 
  maintaining ACID compliance and SQL querying

- Time series DB - `Influx DB`   -> A database optimized for storing and querying time-stamped or time-series data

- Object orientent DB - `db40`   -> Storing data as an object

- Graph DB - `Neo4j`  -> A database designed to manage and query data with complex relationships, 
  represented as nodes and edges

- Hierarchial DB - `IBM IMS`   -> A database that organizes data in a tree-like structure 
  with parent-child relationships.

- Network DB - `IDMS`   -> A database that uses a graph-like structure with many-to-many relationships

- Cloud DB - `Amazon RDS`   -> A database hosted on cloud platforms

## `Relational DB` ##
=====================
- Data is stored in structured tables with rows and columns.
- Requires a fixed schema for organizing data.
- Uses SQL (Structured Query Language).
- Scales vertically by adding resources to one server.
- Ensures strong reliability with ACID properties (Atomicity, Consistency, Isolation, Durability).
- Ideal for structured data,
- Examples: MySQL, PostgreSQL

If the db follows codds 12 rule [0 - 12] then the db becomes a relational db

mysql [ maxDB, mariaDB also ] is developed by micahel videnium
postgresql is developed by michael stonebreaker

`mysql vs postgresql`
-----------------------
`MySQL` is primarily known for its speed and simplicity, making it a go-to choice for web applications and read-heavy workloads.

`PostgreSQL` emphasizes advanced features and standards compliance, excelling in handling complex queries, extensibility (user defined functions), and support for diverse data types.

## `No SQL  DB` ##
===================
- Data is stored in flexible, schema-less formats.
- Allows dynamic, unstructured, or semi-structured data.
- Uses query languages or APIs, like MQL (MongoDB Query Language).
- Scales horizontally by adding servers.
- Follows BASE properties (Basically Available, Soft state, Eventually consistent).
- Great for real-time analysis, big data, and social media apps.
- Supports various models, like Document, Key-Value, Column-Family, and Graph.

`Non sql db's`
---------------
Mongo db
Redis
IBM db2
Neo4j
Apache cloud db
Apache cassandra
Amazon Dynamo DB
Amazon Neptune





## `MongoDB` ##
================
- MongoDB is a NoSQL database that stores data in a flexible, schema-free format. 
- It is designed for high-performance, scalability, and ease of development
- MongoDB uses collections and documents to organize data.
- MongoDB can handle large volumes of unstructured data
- No need for joins
- No need for data normalisation

developed in times of 2009 by the company 10gen and the name comes from Humoungous means huge, very big. Then the 10gen company later renamed to mongoDB inc.

`Collection`
------------
- In MongoDB, a collection is a group of MongoDB documents. 
- It is the equivalent of a table in a relational database. 
- Collections are used to store and organize documents, which are BSON (Binary JSON) format data structures.

`document`
---------
- Each collection contains one or more documents, which are like rows in a table. 
- However, unlike rows, documents in a collection can have different structures and fields, 
  offering flexibility in data storage.

`Advanges of Nested documents`
-------------------------------
1. Hierarchical Data representation
2. Reduced number of collection
3. Atomic updates
4. Improved query performance
5. Schema flexibility
6. `Denormalization` -> Denormalization is the process of intentionally adding redundancy to a database by storing related data together in a single table or place. 
7. Easier `serialization` and `deserialization`
   `serialisation` -> Converting a programming language's object (like a JavaScript object) into a format that can be stored in MongoDB (like BSON, a binary JSON format).

`View`
-------
- View allows you to create virtual collections based on aggregation pipelines. 
```json
db.createView(
  "electronicsView",       // Name of the view
  "products",              // Source collection
  [ 
    { $match: { category: "Electronics" } }  // Query to filter data 
  ]
);
db.electronicsView.find();
```
`Query`
-------
- A query is a request for specific information or data from a database.
- It is used to retrieve, filter, and manipulate data based on specific criteria.
- Queries enable communication in between database and Database Management System (DBMS).
- The purpose is to extract desired data efficiently.

`fields`
--------
Each document has multiple fields

`BSON (Binary JSON)`
-----------------------
BSON, short for Binary JSON, is a binary-encoded serialization format used primarily for storing and transferring data in MongoDB databases. It is designed to be efficient in terms of both storage space and parsing speed compared to plain text-based formats like JSON.

`MongoDB Shell`
-----------------
- An interactive command-line interface for MongoDB
- It connects to MongoDB databases.
- Supports JavaScript-based queries and commands.

`Advantages of MongoDB`
------------------------
- Flexible schema design.
- Scalability and sharding capabilities.
- High performance for read-heavy workloads.
- BJSON document format.
- Rich query capabilities.
- Replication and high availability.

`Disadvantages of MongoDB`
---------------------------
- Limited support for transactions across multiple documents.
- Not ideal for complex queries involving multiple joins.
- Can use a lot of memory for write-heavy operations.
- ACID transactions are supported but limited compared to relational databases.
- Query performance may vary based on data structure and indexing.
- Flexible schema can lead to data inconsistency if not managed carefully.

`Primary key`
-------------
Primary key - In MongoDB, each document (record) has a special field called "_id," which serves as a primary key by default.

`Secondary key`
-----------------
Secondary key - In MongoDB, secondary keys are implemented using indexes.

`__v version`
----------------
 __v field is a special property automatically added by Mongoose.
 When multiple operations try to update the same document simultaneously, Mongoose uses the __v field to detect conflicting modifications.

`Namespace`
--------------
a namespace refers to the combination of the database name and the collection name. It is a way to uniquely identify a specific collection within a database.

`Schema`
-----------
- A schema is a blueprint or structure that defines the organization and format of data in a database. 
- It specifies how data is organized, what types of data can be stored, and the relationships between different data elements.
- We can add properties to a field to control the value of that field and this method is called `data sanitizing`.

`Schema flexibility` in MongoDB means that you don't have to define a fixed structure (schema) for your data before storing it. Each document in a collection can have a different structure, with varying fields, types, and sizes.

```js
const userSchema = new mongoose.Schema({
   name : {
      type : String
   }
})
module.export = mongoose.model("User",userSchema);
```

- We can also add `schema methods` that handles functions example creating jwt token etc...., we must use normal function there and use `this` keyword for referencing the schema.

```js
userSchema.methods.generateJWT = async function() {
    const user = this;
    const token = await jwt.sign({_id : user._id},process.env.JWT_HASH,{ expiresIn : "1d" });
    return token;
};
```
- We can also add `Schema.pre` function to call this function on everytime while saving the model;
```js
userSchema.pre("save",function(){
   const schmea = this; // Here this is pointing the Schema;
});
```
- Validate function in schema is used to velidate  specific value
```js
firstName : {
        type : String,
        validate(value) {
            if(!validator.isAlpha(value)){
                throw new Error("Enter only alphabets.");
            }
        }
    },
```





## `Data types in Mongo db` ##
==============================
1. string
2. boolean 
3. Number
 3a. Number int - 32 bit
 3b. Number long - 64 bit
 3c. Number decimal - 34 decimal places after the dot
 3d. Number double	 - rounded decimal point
4. ObjectID - Consisting of three values 
	Increamenting counter - 3 bytes
	Timestamp - 4 bytes
	Random value - 5 bytes
5. Date
 5a. ISODate - It stores date and time in a standard ISO 8601 format.
 5b. Timestamp -  64-bit value , It represents a point in time, typically used for tracking changes to documents.
6. Embeded Documents - nested document
7. Decimal128 - store decimal value with high precision
8. regex - Mongodb supports querying using regular expression
9. Bindata - Binary data can stored using this data type
10. Array
11. null

`Special Bson values`
----------------------
1. Minkey - represents smallest possible key in mongodb , used as a placeholder
2. Maxkey - represents largest possible key in mongodb , used as a placeholder
3. Timestamp
4. ObjestID

`javascript scope inside mongodb`
---------------------------------
1. With scope
```js
{
   $scope : { x : 5, y : 10},
   $code : "function() {return x+y}",
}
```
2. Without scope
```js
{
   $code : "function(){return Math.random()}"
}
```





## `Regex` ##
=============
/^a/ - first a
/a$/ - last a
/a/ - a in that field
/iam/ - string

/A.a/ - starting A then any single character and end with a, The dot (.) is used in regular expressions to match any single character except newline characters.
```js
db.products.find({ name: /A.a/ });
```

'[aeiou]{2,3}' - specifies that you are looking for 2 or 3 consecutive vowels in the value of "testProperty".
```js
db.words.find({ testProperty: /[aeiou]{2,3}/ });
```
/^abcx*/ - starting with abc and is followed by zero or more x

/^abcx+/ - starting with abc and is followed by one or more x

/^abcx?/ - Find documents where 'fieldName' can be either 'abc' or 'abcx' here x is optional.

/m/i - case insensitive





## `Cursor` ##
==============
Cursor is a pointer to the result set  of a query , When we query a mongodb collection the database returns a cursor. The cursor allows for efficient retrieval of large result sets without consuming excessive memory. Cursors are lazy-loaded.

`Cursor methods`
-----------------
1. toArray() - This method returns an array that contains all the documents from a cursor
eg : db.cm.find().toArray()

2. forEach() -  This method takes a function as a parameter and applies it to each document returned by the cursor.
eg :  db.cm.find().forEach(doc => print(doc.name))

3. limit(): Limits the number of documents returned by the query.
eg : db.cm.find().limit(5);

4. close() - This method instruct the server to close a cursor and free associated server resources
eg : db.cm.find().close()

5. isclosed() - return true if it is closed

6. map() - This method allows you to apply a function to each document in the cursor and return an array of results.
eg : db.cm.find().map(doc => doc.name)

7. skip(): used to skip a specified number of documents in the result set.
eg : db.cm.find().skip()

8. max(): Limits the results to documents with field values greater than or equal to the specified value.
eg : db.cm.find().max({ age: 30 })

9. min(): Limits the results to documents with field values less than or equal to the specified value.
eg : db.cm.find().min({ age: 30 })

10. next(): Returns the next document in the cursor.
eg : var cursor = db.cm.find();
cursor.next()

11. hasNext(): Returns true if there are more documents to be returned from the cursor, otherwise false.
eg : db.cm.find().hasNext()

12. isExhausted(): Returns true if the cursor has returned all documents, otherwise false.
eg : db.cm.find().isExhausted()

13. collation(): Specifies the collation (language-specific rules for string comparison) for the query.
eg : db.cm.find().collation({ locale: "en", strength: 2 })

14. comment(): Adds a comment to the query for easier debugging or logging.
eg : db.cm.find().comment("Fetching all users")

15. hint(): Provides an index to use for the query.
eg : db.cm.find().hint({ age: 1 })

16. rewind(): used to reset a cursor to the beginning. After calling this method, we can iterate over the cursor from the start again.
eg : db.cm.find().rewind()

17. addOption(flag) - This method allows us to change the behavior of the query using a flag. Flags are set using DBQuery.Option and can modify the query's behavior.
eg : db.cm.find().addOption(DBQuery.Option.tailable)





## `Collection Methods` ##
==========================
Create database - use db;

Delete database - db.dropDatabase;

Create Collection - db.createCollection("collection_name")

show collections - show collections

remane collection - db.oldCollectionName.renameCollection("newCollectionName")

delete a collection - db.collectionname.drop()

`countDocuments()` - return the number of documents
```js
db.collectionName.coutDocuments();
```

`datasize()` - return the size of the collection
```js
db.collectionName.dataSize();
```

`explain()` - Returns information on the query execution of various methods.
```js
db.orders.explain();
```

`drop()` - Removes the specified collection from the database.
```js
db.collectionName.drop();
```

`distinct()` - Returns an array of distinct values for the specified field.
```js
db.collectionName.distinct("name");
```

`find()` - Performs a query on a collection or a view and returns a cursor object.
```js
db.collectionName.find();   // returns all documents
db.collectionName.find({ name : "Midhun" });  // return all documents with name "Midhun"
db.collectionName.find({}, { name: 1, email: 1, _id: 0 });   // projection to display only the name and email fields
db.collectionName.find({ "address.city": "San Antonio" });   // find documents with nested field
```

`findOne()` - return one document that satisfies the query
```js
db.collectionName.findOne({ _id: 20 });   // find only one document with id = 20
```

`findOneAndUpdate()` - It provides a way to find one and automatically update and return the document
```js
db.collectionName.findOneAndUpdate(
  { email: "tina@example.com" },
  { $set: { "preferences.theme": "light" } },
  { returnDocument: "after" }
);  // This is find a single document and update its nested field theme and return the updated docuement

```

`findOneAndReplace` - to replace an entire docuement
```js
db.collectionName.findOneAndReplace(
  { _id: 21 },
  {
    name: "Uma",
    age: 30,
    isActive: true,
    email: "uma_new@example.com",
    roles: ["admin"],
    address: { city: "Austin", zip: "73301" },
    preferences: { newsletter: false, theme: "light" }
  },
  { returnDocument: "after" }
);
```

`findOneAndDelete` - to delete a single docuement
```js
db.collectioName.findOneAndDelete({ _id : 20 });
```

`insertOne()` - Used to insert a single document
```js
db.collectionName.insertOne({
  _id: 22,
  name: "John",
});
```

`insertMany()` - used to insert multiple document it must be inside an array
```js
db.collectionName.insertMany([
  {
    _id: 23,
    name: "Sophia",
  },
  {
    _id: 24,
    name: "Liam",
  }
]);
```

`bulkwrite()` - Performs multiple write operations (insert, update, delete) in a single request.
```js
db.collectionName.bulkWrite([
  {
    insertOne: {
      document: {
        _id: 25,
        name: "Emma",
      }
    }
  },
  {
    updateOne: {
      filter: { _id: 22 },
      update: { $set: { age: 29 } }
    }
  },
  {
    deleteOne: {
      filter: { _id: 23 }
    }
  }
]);
```

`updateOne()` - Modifies a single document in a collection. By default it will not return the updated document but it return `{ acknowledged: true, matchedCount: 1, modifiedCount: 1 }`
```js
db.collectionName.updateOne(
  { _id: 21 },  // Filter
  { 
    $set: { email: "uma_new@example.com", age: 30 }  // Update
  }
);
```
`updateMany()` - Modifies multiple documents in a collection.
```js
db.collectionName.updateMany(
  { isActive: true },  // Filter
  { 
    $set: { status: "active" }  // Update
  }
);
```
`replaceOne()` - replaces a single document that matches the filter. Does not return the replaced document.
```js
db.collectionName.replaceOne(
  { _id: 2 },
  {
    name: "Bob Updated",
    age: 35,
    isActive: true,
    email: "bob.updated@example.com",
    roles: ["user"],
    address: { city: "San Diego", zip: "92101" },
    preferences: { newsletter: true, theme: "dark" }
  }
);
```

`deleteOne()` - Used to delete a document in the collection
```js
db.collectionName.deleteOne({ name: "Bob" });
```
`deleteMany()` - used to delete multiple document in a collection
```js
db.collectionName.deleteMany({ age: { $gte: 25 } });
```

`createIndex()` - Create an index for one or more field it improves querying
```js
db.collectionName.createIndex({ name: 1 })
db.collectionName.createIndex({ name: 1 }, { unique : true })
```
`createIndexes()` - It allow us to create multiple indexes.
```js
db.collectionName.createIndexes([
  { key: { email: 1 }, name: "email_index", unique: true },
  { key: { age: -1 }, name: "age_desc_index" },
  { key: { status: 1, createdAt: -1 }, name: "compound_index" }
])
```
`dropIndex()` - Removes a specified index on a collection.
```js
db.collectionName.dropIndex({email : 1});
```
`dropIndexes()` - Removes all indexes on a collection.
```js
db.collectionName.dropIndexes();
```
`getIndexes()` - List all the indexes on the collection
```js
db.collectionName.getIndexes();
```

`mapReduce()` - The mapReduce() method is used for processing data and generating aggregated results using a map and reduce function.
```js
// Map function to emit key-value pairs (name, 1)
var mapFunction = function() {
  emit(this.name, 1);
};

// Reduce function to sum the values for each name
var reduceFunction = function(key, values) {
  return Array.sum(values);
};

// Running mapReduce to count occurrences of each name in the "users" collection
db.collectionName.mapReduce(
  mapFunction,
  reduceFunction,
  { out: "name_count" }
);
```

`remove()` - `deprecated` Deleting document from a collection that satisfiying the condition 
```js
db.collectionName.remove( { _id : 2 } );  // remove the document which satisfies the condition
db.collectionName.remove({}); // remove all documents
```





## `Methods to insert in MongoDB` ##   
======================================
1. insertOne

2. insertMany

3. bulkWrite
```js
const bulkInsertOperations = [
   { insertOne: { document: { orderNumber: "124", customerName: "Jane Smith" } } },
   { insertOne: { document: { orderNumber: "125", customerName: "Tom Johnson" } } }
];
db.collectionName.bulkWrite(bulkInsertOperations);
```

4. aggregate
```js
db.collectionName.aggregate( [
	{ $match : { price : {$gte : 15} } },
	{ $out : "highvalueProduct" }
])
 // If the condition is satisfied, then it will return a new collection with name "highvalueProduct"
 ```





## `Operators` ##
====================

`$gt` - greater than , `$gte` - greater than or equal
```js
db.collectionName.find( { age : { $gt : 20 } } );
db.collectionName.find( { age : { $gte : 20 } } );
```

`$lt` - less than , `$lte` - less than or equal
```js
db.collectionName.find( { age : { $lt : 20 } } );
db.collectionName.find( { age : { $lte : 20 } } );
```

`$set` - Using with updateOne and updateMany to update a field value.
 ```js
 db.collectionName.updateOne( { _id : 2 },{ $set : { age : 20 } } );
 ```

`$unset` - Using with updateOne and updateMany to remove a value of a field.
```js
db.collectionName.updateOne( { _id : 2 },{ $unset : { age : "" }});
```

`$not` - used to negate a condition, effectively returning documents that do not match the specified condition.
```js
db.collectionName.find( { age : { $not : { $eq : 30 } } } );
```

`$or` - used to query for documents that match at least one of several conditions.
```js
db.collectionName.find( { $or : [ { isActive : true } , { roles : 'admin' } ] } )
```

`$and` - used to query for documents that match all of several conditions.
```js
db.collectionName.find( { $and : [ { isAdmin : true } , { roles : 'admin' } ] } );
```

`$inc 1` - used to increment the field by 1 used with update, updateOne, updateMany
 ```js
 db.collectionName.updateOne( { _id : 2 }, { $inc : { age : 1 } } );
 ```

`$inc -1` - used to decrement the field by 1 used with update, updateOne, updateMany
```js
db.collectionName.updateOne( { _id : 2}, { $inc : { age : -1 } } );
```

`$eq` - used to compare values and retrieve documents where a specified field is equal to a particular value.
```js
db.collectionName.find( { age : { $eq : 30 } } );
```

`$ne` - used to compare values and retrieve documents where a specified field is not equal to a particular value.
```js
db.collectionName.find( { _id :2 },{ age : { $ne : 30 } } );
```

`$rename` - used to rename a field within a document.
 ```js
 db.collectionName.updateMany( {}, { $rename : { "email" : "new eamil" } } );
 ```

`$upsert` - The upsert operation can be useful when you want to modify a document if it exists, or create a new one if it doesn't
```js
db.collectionName.updateOne( { _id : 26 },{ $set : { name : "Midhun" } },{ upsert : true } );
```

`$exists` - used to check for the existence of a field within a document. If the field exist the query will return the document
```js
db.collectionName.find({ name : { $exists : true } } );
```

`$currentDate` - used to set the value of a field to the current date and time in ISO format.
```js
db.collectionName.updateOne(
  { _id: 1 },
  { $currentDate: { "lastLogin": true } }
);
```

`$expr` - allows the use of aggregation expressions within a query
```js
db.collectionName.find({
  $expr: { $gt: ["$age", "$score"] }
});
```

`$text` - used for performing full-text search in MongoDB. To use $text, you need to create a text index.
```js
db.collectionName.createIndex( { title : "text" } ) ;
db.collectionName.find( { $text : { $search : "mongodb"}})
```

`$where` - used to run JavaScript expressions within our queries.
```js
 db.myCollection.find({
  $where: function() {
    return this.field1 + this.field2 === 10;
  }
});
```

```````````Array operators```````````

`$in` - used to query for a documents where a specific field value matches any value  in a provided array
```js
db.collectionName.find({
  roles: { $in: ['admin', 'user'] }
});
```

`$nin` -  operator is the negation of $in. It is used to query for documents where a specific field's value does not match any value in a provided array.
```js
db.collectionName.find( { age : { $nin : [1,2,3,4] } } );
```

`$all` - used to query for documents where a specific field contains an array as value that includes all of the specified values.
```js
db.collectionName.find( { hobbies : { $all : ['reading','cycling','coding'] } } );
```

`$elemMatch` - used to match documents containing an array field with objects, where at least one object in the array satisfies all the specified query conditions.
```js
{
  "_id": 1,
  "scores": [{ "subject": "math", "score": 90 }, { "subject": "english", "score": 80 }]
},
{
  "_id": 2,
  "scores": [{ "subject": "math", "score": 70 }, { "subject": "english", "score": 85 }]
}

db.collectionName.find({
  scores: { $elemMatch: { subject: "math", score: { $gt: 85 } } }
});
```

`$slice` - used to limit the number of elements returned from an array field.
 ```js
 db.collectionName.find( { _id : 2},{ roles : { $slice : 3 } } ); // this will return the first 3 values of roles array
 db.collectionName.find( { _id : 2},{ roles : { $slice : -2 } } ); // this will return the last 2 values of roles array
 db.collectionName.find( { _id : 2},{ roles : { $slice : {offset,limit} } } ); // this will return the limited number of values from the offset of roles array
 ```

`$size` - used to match documents based on the number of elements in an array.
```js
db.collectionName.find( { roles : { $size : 2 } } );  // return the document where the roles array have 2 elements
```

`$push` - used to add a new element to an array field.
```js
db.collectionName.updateOne( { _id : 2},{ $push : { roles : "trainer" } } );
```

`$pull` - used to remove a specific element from an array.
```js
db.coolectionName.updateOne( { _id : 2 },{ $pull : { roles : "admin" } } );
```

`$push` with `$each` - used to push multiple values to an array with in an array.
 ```js
 db.collectionName.updateOne( { _id :2 },{ $push : { roles : { $each : [1,2,3] } } } );
 ```

`$pull` with `$in` - pull with in is used to to remove multiple values from an array at a time.
 ```js
 db.collectionName.updateOne( { _id :2 },{ $pull : { roles : { $in : [1,2,3] } } } );
 ```

`$pop` - used to remove first or last element from an array.
```js
db.collectionName.updateOne( { _id :2 },{ $pop : { roles : 1 } } );  // remove the first element of the array
db.collectionName.updateOne( { _id :2 },{ $pop : { roles : -1 } } ); // remove the last element of the array
```





### `Tip`
=========
| Operation Type | Syntax Pattern                   | Example                |
| -------------- | -------------------------------- | ---------------------- |
| **Query**      | `{ field: { operator: value } }` | `{ age: { $gt: 20 } }` |
| **Update**     | `{ operator: { field: value } }` | `{ $inc: { age: 1 } }` |
`Find documents where the age field is greater than 20`
`Increment the age field by 1`





## `Method chaining` ##
========================
`count()` - The count() method in MongoDB is used to count the number of documents that match a specific query criteria within a collection.
```js
db.collectionName.find({}).count(); // returns the number of documents
```

`limit()` - The limit() method in MongoDB is used to restrict the number of documents returned by a query.
```js
db.collectionName.find({}).limit(); // to restrict the number of returning docuements.
```

`sort({fieldName : 1 or -1})` - the sort() method is used to sort the documents in the result set of a query. 1 for ascending and -1 for descending order.
```js
db.collection.find().sort({ name : 1});
```

`skip()` - the skip() method is used to skip the specified number of dicument in a result.
```js
db.collection.find().skip(num);
```





## `Unary Operators` ##
=======================
Unary operators are operators that are applied to a single operand or value
1. $type 
2. $lt 
3. $gt 
4. $or 
5. $and
6. $multiply





## `Aggregation` ##
====================
Aggregation in MongoDB is a powerful framework that processes and transforms data from a collection by passing documents through a sequence of stages, each performing a specific operation

db.collectionName.aggregate(pipeline,options)
pipeline = Array of operations
 
`Advantages` 
-------------
a. Data transformation
b. Data reduction
c. Grouping
d. Complex calculation
e. Array and join operations
f. perform optimization
g. Pipelining

`Aggregation stages`
--------------------
`$match` - used to filter documents based on specified criteria. It's similar to the find method.
```js
db.collectionName.aggregate([{ $match: { age: { $gte: 25 } } }]);
```

`$project` - used to reshape documents by selecting specific fields, renaming them, or adding computed fields.
```js
 db.collectionName.aggregate( [ { $project : { _id : 0, name : "Prod_name", total_revenue : { $multiply : [ "price","quantity" ] } } } ] );

 db.collectionName.aggregate( [ { $project : { name : 1, age : 1, _id : 0 } } ] );
```

`$group` - Groups documents by a specified identifier
```js
db.collectionName.aggregate( [ { $group : { _id : "$isActive" }}]);
```

`$sort` - sort the docuements
```js
db.collectionName.aggregate( [ { $sort : { age : -1 } } ] );
```

`$limit` - Restricts the number of documents passing through the pipeline.
```js
db.collectionName.aggregate( [ { $sort : { age : -1 } },{ $limit : 1 } ] );
```

`$skip` - Skips a specified number of documents and passes the remaining ones.
```js
db.collection.aggregate( [ { $sort : {age : -1 } } , { $skip : 5 } ] );
```

`$count` - Count the documents that returns the stages.
```js
db.collection.aggregate([
  { $sort: { age: -1 } },
  { $skip: 5 },
  { $count: "totalDocuments" }
]);
```

`$unwind` - used to deconstruct arrays within documents, creating separate documents for each element in the array.
```js
 db.collectionName.aggregate( [ { $unwind : "$arrayfieldName" } ] )
 ```

 `$lookup` - used for performing a left outer join between documents from the current collection and documents from another collection based on a common field.
 ```js
 db.collectionName.aggregation([{
  $lookup: {
    from: "targetedCollectionName",        // The target collection to join
    localField: "fieldFromOurCurrentCollection",  // Field from the current collection
    foreignField: "fieldFrom fromOurTargetedCollection", // Field from the target collection
    as: "outputArray"             // The name of the array to store the matched results
  }
}]);
```

`$out` - used to save the result of an aggregation pipeline to a new collection.
```js
 db.collectionName.aggregate( [ { $match : { price : { $gte : 10 , $lte : 16 } } },{ $out : "newcollection" } ] )
``` 

`$facet` -  Processes multiple aggregation pipelines in parallel within a single stage.
```js
db.collectionName.aggregate([
  {
    $facet: {
      activeUsers: [{ $match: { isActive: true } }, { $count:"count" }],
      averageAge: [{ $group: { _id: null, avgAge: { $avg: "$age" } } }]
    }
  }
]);
```

`$addFields` - Adds new field or modify existing field without removing the other fields.
```js
db.collectionName.aggregate([{ $addFields: { fullName: { $concat: ["$firstName", " ", "$lastName"] } } }]);
```

`$replaceRoot` - Replaces the entire document with a specified subdocument.
```js
db.collectionName.aggregate([{ $replaceRoot: { newRoot: "$address" } }]);
```

`$redact` - Modifies the documents' structure by removing or keeping parts of the document based on conditions.
```js
db.collectionName.aggregate([{ $redact: { $cond: { if: { $eq: ["$isActive", true] }, then: "$$KEEP", else: "$$PRUNE" } } }]);
```

`$bucket` - Categorizes documents into groups, or "buckets", based on specified ranges.

`$bucketAuto` - Automatically creates "buckets" based on the distribution of data.
```js
db.collectionName.aggregate([{ $bucketAuto: { groupBy: "$age", buckets: 4 } }]);
```

`$collStats` - Returns statistics about a collection, such as storage size, document count, and index usage.
```js
db.collectionName.aggregate([{ $collStats: { storageStats: {} } }]);
```

`$geoNear` - Returns documents that are near a specified geospatial point, sorted by distance.

`$sample` - Randomly selects a specified number of documents from the input.
```js
db.collectionName.aggregate([{ $sample: { size: 3 } }]);
```

`$merge` - merges the result of the aggregation pipeline to an existing collection.
```js
db.sales.aggregate([
  {
    $group: {
      _id: "$region",
      totalSales: { $sum: "$amount" }
    }
  },
  {
    $merge: {
      into: "regional_sales",  // Target collection to merge into
      on: "_id",              // Field to match documents (default is "_id")
      whenMatched: "merge",   // Action when a match is found ("merge", "replace", "keepExisting", etc.)
      whenNotMatched: "insert" // Action when no match is found ("insert", "discard", etc.)
    }
  }
]);
```




## `Accumulators Operators` ##
===============================
Accumulator operators are special operators used inside aggregation pipelines, mainly within stages like $group and $project, to perform calculations across multiple documents and produce summary results.

`$sum`
 eg : db.orders.aggregate([ { $group: { _id: { name: "$name", size: "$size" }, totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } } } } ] )

`$max`
 eg : db.orders.aggregate([{$group: {_id: {name: "$name",size: "$size"},maxPrice: { $max: "$price" }}}])

`$avg`
 eg : db.orders.aggregate([{$group: {_id: {name: "$name",size: "$size"},avgQuantity: { $avg: "$quantity" }}}])

`$min`
 eg : db.orders.aggregate([{$group: {_id: {name: "$name",size: "$size"},minDate: { $min: "$date" }}}])

`$addToset` - used to add values to an array field without duplicates.
 eg : db.users.updateOne(
  { _id: 1 }, 
  { $addToSet: { skills: "JavaScript" } }
);



## `Sharding` ##
=================
Sharding is a method for distributing data across multiple servers to ensure horizontal scalability and improved performance.

`Shard Key`: The shard key is a field or a combination of fields that determines how data is distributed across different shards in the sharded cluster. MongoDB uses the shard key to route documents to the appropriate shard

`sharded cluster`: A group of shard servers, along with config servers and at least one query router (mongos), is collectively referred to as a sharded cluster in MongoDB.

`Shard Servers`: These are individual MongoDB instances or replica sets, collectively referred to as shards. Each shard contains a portion of the entire dataset, and collectively they hold the complete dataset of the MongoDB deployment.

`Config Servers`: Config servers store metadata about the sharded cluster, including the distribution of data across shards and the shard key ranges.

`Query Router (mongoos)`: The query router is an interface between the application and the sharded cluster. It directs queries to the appropriate shard and aggregates the results.

`Chunks`: Data is divided into smaller segments called "chunks." Each chunk represents a contiguous range of shard key values and is stored on a specific shard. MongoDB automatically manages and balances chunks across shards to ensure even data distribution and load balancing.

`shard hotspot`
--------------
A shard hotspot occurs when a large proportion of read or write operations are directed to a single shard, causing that shard to become a bottleneck.

`Advantages of sharding`
-------------------------
Horizontal scalability
Load balancing
High availability
Geographic distribution
Efficient use of hardware

`Types of sharding`
------------------
1. Hashed Sharding:
In Hashed Sharding, MongoDB distributes data across shards by applying a hash function to a specific field (the shard key). The hash function converts the shard key value into a hash value, which is used to determine the target shard.

2. Ranged Sharding:
Ranged Sharding involves distributing data based on specific ranges of shard key values. Each shard is responsible for a specific range of values, and data is distributed according to these ranges.

3. Zone Sharding:
Zone Sharding is used when you want to control the placement of data based on specific criteria such as data center locations, geographic regions, or other attributes.

`Shard key types `
-----------------
1. `normal shard key`
----------------------
A normal shard key is a field (or combination of fields) selected based on how the application queries and accesses data. It ensures that data is distributed evenly across shards to prevent overloading any single shard.

2. `hashed shard key`
----------------------
A hashed shard key involves applying a hash function to a specific field (the shard key) to determine the target shard. 





## `Cluster` ##
=================
In MongoDB, a cluster is a group of servers or nodes that work together to store and manage the data. MongoDB clusters are designed for high availability, fault tolerance, and horizontal scalability.

`Types of clusters`
-------------------
1. Replica set
--------------
A replica set is the basic building block of MongoDB's high availability architecture. It consists of multiple MongoDB instances (nodes) that replicate data to ensure fault tolerance and data redundancy.

   `Arbiter` -> An arbiter is a lightweight member in a replica set that does not store data but participates in replica set elections

2. Sharded cluster
-------------------
A sharded cluster is designed to horizontally scale MongoDB by distributing data across multiple shards

3. Standalone cluster
-----------------------
A single MongoDB instance running without replication or sharding. It does not involve any additional nodes like replicas or arbiters.





## `Journaling` ##
=====================
 "journaling" refers to a technique used to ensure the durability and consistency of data in the face of system failures or crashes. 

`Journaling Working`
---------------------
Write Operations: When data is written to MongoDB, it is first written to an in-memory data structure known as the "write-ahead log" (WAL) or "journal."

Asynchronous Disk Write: Periodically, MongoDB flushes the in-memory write-ahead log to disk in a sequential and efficient manner.

Commit to Data Files: Once the data is safely stored in the journal, MongoDB writes it to the permanent data files on disk.





## `CAP Theorom` ##
====================
The CAP theorem, also known as Brewer's theorem, is a fundamental concept in distributed computing. According to the CAP theorem, a distributed system can achieve at most two of these properties simultaneously but not all three.

Properties are - Consistency , Availability , Partiton Tolerance

`Consistency`
--------------
All the clients see the same view of data even right after update or delete

`Availability`
---------------
All clients can find a replica of data even in case of partial node failures

`Partition tolerance`
----------------------
It is a guarentee the system continue to operate even if there is a  network issue in the data center and some of the computers are unreachable

`Capped collection`
--------------------
Capped collection is a type of collection that behaves differently from a regular collection. It has some unique characteristics such as fixed size , insertion order , auto deletion and no updation.

db.createCollection("logs", { capped: true, size: 1048576 });





## `Index` ##
================
Suppose the collection have millions of documents the querying will be expensive this time we need indexing for the documents.
If we are making a filed in a model `unique : true` mongodb will make this filed automatically indexing.

1 (Ascending): Sorts and queries data in ascending order.
-1 (Descending): Sorts and queries data in descending order.
text: Index for searching text fields with support for stemming, scoring, and language analysis.
hashed: Index for hashing field values to distribute data evenly across shards.
2d: Index for querying geospatial data in a flat, two-dimensional plane.
2dsphere: Index for querying geospatial data on a spherical surface (Earth-like geometry).
geoHaystack: Index for fast querying of geospatial data in small areas with a supporting field.

Example : If a collection is storing the user connection to other user data and suppose the application have 1000 users and 1000 users are send 100 request then the collection will have 100000 documents this time we need indexing for our database.

`Types of index`
-----------------
1. Single Field Index
 eg : db.demo.createIndex({name : 1})
 eg: Schema.index({ field : 1}) // 1 for ascending and -1 for descending

2. Compound Index - A compound index is created on multiple fields within a document. It is useful when queries involve multiple fields and can improve the efficiency of queries that filter or sort by a combination of these fields.
 eg : db.demo.createIndex({name : 1,age : 1})
 eg: Schema.index({ field1 : 1, field2 : 1})

3. Unique Index - ensures that the values for a specified field or a combination of fields are unique across all documents in a collection. 
 eg : db.collection.createIndex({ unique_field: 1 }, { unique: true });

4. Text Index - Text indexes are used for performing full-text search on string content.
 eg : db.collectionName.createIndex({ title: "text", content: "text" })
 eg : db.collectionName.find({ $text : { $search : "Mongodb" }})

5. Geospatial Index - Geospatial indexes are designed for efficient handling of location-based data.
Functionality: They enable MongoDB to execute queries involving spatial data, such as finding documents near a specific location or within a certain distance.
 eg : db.places.createIndex({ location: "2dsphere" });

6. Hashed Index - Hashed indexes are used to index a single field and store hashed values.
 eg : db.collection.createIndex({ hashed_field: "hashed" });

7. Partial Index - A partial index is created on a subset of documents in a collection based on a filter expression.
 eg : db.collection.createIndex(
  { status: "A", qty: { $lt: 30 } },
  { partialFilterExpression: { status: "A" } }
);

8. Wildcard Index - A wildcard index ($**) creates indexes on all fields or on fields matching a path pattern, making it useful for documents with dynamic or varying structures.
 eg : db.text_collection.createIndex({ "$**" : 1 })

9. Background Index - Background indexes are created without blocking write operations on the database, improving overall performance during index creation.
 eg : db.collection.createIndex({ field_name: 1 }, { background: true });

10. TTL Indexes:-
Purpose: TTL indexes, or Time-To-Live indexes, automatically remove documents from a collection after a specified amount of time.

Functionality: They are useful for managing data that has a temporal aspect, like logs or sessions that should be automatically removed after a certain duration.

11. Sparse Index:-
An index that only includes documents that contain the indexed field. 





## `Relationships` ##
======================
1. Embedding - Embedding is a way to represent relationships by directly including one document or entity within another.
2. Referencing - Referencing involves representing relationships by storing references (such as IDs) to related documents or entities.
3. One to one - This represents a relationship where one entity is associated with exactly one other entity.
4. One to many - This represents a relationship where one entity is associated with more than one	 entity.
5. One to Squillions - This is similar to one-to-many, but with a much larger number of related entities.
6. Many to many - In a many-to-many relationship, multiple entities on one side can be related to multiple entities on the other side.

`ref` with `populate`
------------------------
ref is used to reference one model from another.
populate() is used to fetch the full document from the referenced model instead of just its ID.
```js
Post.find().populate('author', ['name', 'age'])
Post.find().populate('author', "name age -_id");
```

`Linking (Normalization)`
--------------------------
Linking involves storing references or foreign keys to related documents in separate collections rather than embedding them directly.





## `Vertical scaling` ##
=========================
involves increasing the capacity of a single server by adding more resources, such as CPU, RAM, or storage.

## `Horizontal scaling` ##
===========================
Adding more servers to a cluster to distribute the workload. MongoDB's sharding is a form of horizontal scaling.

## `Zones` ##
==============
Zones in MongoDB are used for data partitioning and routing control. We can create zones to control which data is stored on specific shards within a sharded cluster.

## `Auto balancing` ##
========================
The auto-balancer is a feature in MongoDB that automatically redistributes data across the shards in a sharded cluster to maintain even data distribution.

## `Gridfs` ##
================
GridFS (Grid File System) is a specification for storing and retrieving large binary objects, such as audio, video, images, and other binary data, in MongoDB. which has a 16 MB size limit for individual documents. GridFS allows us to store and manage files larger than this size limit by dividing them into smaller chunks.

## `NTFS` ##
==============
New Technology File System, is a file system developed by Microsoft. It is the default file system for Windows operating systems

## `Batch size` ##
=====================
The batchSize option specifies the maximum number of documents that should be returned in a single batch from the server to the client
 eg : db.myCollection.find({}).batchSize(50);

## `Atomic operations` ##
==========================
Atomic operations are database operations that are guaranteed to be executed as a single, indivisible unit. 
set inc push pull addToset unset

## `Fault tolerance` ##
=======================
The system's ability to continue operating even when some of its components fail.

To achieve fault tolerance 
Replica set
Automatic failover
Write concerns
Data distribution
Journaling
Backup and restore

## `Scatter gather` ##
=========================
Scatter-gather is a query process where MongoDB sends a query to all shards and then gathers the results to return a complete response. This happens when the query cannot use the shard key to target a specific shard.

## `Covered query` ##
=======================
A query where all the fields in the query are covered by an index, and the index itself provides all the data needed to fulfill the query. 

`mongoose` - The nodejs library that makes it easier to work with mongoDB
`mongod` - The core server that runs the mongoDB database
`mongos` - A query router used in sharded cluster.