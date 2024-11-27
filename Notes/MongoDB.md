						|------------|
						|------------|
						|  MONGO DB  |
						|------------|
						|------------|

Data types in Mongo db
-----------------------
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

Date vs Timestamp
-----------------
1. Date
The "date" data type in MongoDB is used to store date and time information in a standard ISO 8601 format. It includes the year, month, day, hours, minutes, seconds, and milliseconds.

2. Timestamp
The "timestamp" data type, on the other hand, is used to represent a 8-byte BSON timestamp. It is typically used for internal purposes and may not be as human-readable as the "date" data type.

Bson
----
BSON, short for Binary JSON, is a binary-encoded serialization format used primarily for storing and transferring data in MongoDB databases. It is designed to be efficient in terms of both storage space and parsing speed compared to plain text-based formats like JSON.

Special Bson values
-------------------
1. Minkey - represents smallest possible key in mongodb , used as a placeholder
2. Maxkey - represents largest possible key in mongodb , used as a placeholder
3. Timestamp
4. ObjestID
5. Undefined

Cursor
------
Cursor is a pointer to the result set  of a query , When you query a mongodb collection the database returns a cursor. The cursor allows for efficient retrieval of large result sets without consuming excessive memory. It also supports various methods and operations to navigate, filter, and manipulate the result set.

Cursor methods
--------------
1. toArray() - This method returns an array that contains all the documents from a cursor
eg : db.demo.find({"isAdmin" : false}).toArray()

2. forEach() - This method has a function as its parameter
eg :  db.demo.find().forEach( function(myDoc) { print( "user: " + myDoc.name ); } );

3. addOption(flag) -to change the behaviour of the query using a flag 
eg : db.demo.find().addOption(DBquery.Option.tailable)

4. close() - Instruct the server to close a cursor and free associated server resources
eg : db.demo.find().close()

5. isclosed() - return true if it is closed

6. map() - This method will return an array according to the function of map
eg : db.demo.find().map(function(p) { return p.name};)

extras - collation() , comment() , hint() , hasNext() , isExhausted() , limit() , max() , min() , next()

Collection
----------
In MongoDB, a collection is a grouping of MongoDB documents. It is the equivalent of an RDBMS (Relational Database Management System) table in a relational database. Collections are used to store and organize documents, which are BSON (Binary JSON) format data structures.

Collection Methods
------------------
Create Collection - db.createCollection("collection_name")

show collection - show collections

remane collection - db.oldcollectionname.renamecollection("newcollection")

1. aggregate() - An aggregation pipeline consists of one or more stages that process documents. An aggregation pipeline supports operations on sharded collections
eg : db.sales.aggregate([
   // Stage 1: Calculate total revenue for each product
   {
      $project: {
         product: 1,
         totalRevenue: { $multiply: ["$quantity", "$price"] }
      }
   },

   // Stage 2: Group by product and calculate the average price
   {
      $group: {
         _id: "$product",
         totalRevenue: { $sum: "$totalRevenue" },
         averagePrice: { $avg: "$price" }
      }
   }
]);

2. countDocuments - return the number of documents

3. bulwrite() - This method is used to perform multiple write operation in a single call
eg : db.collection.bulkWrite([
   { insertOne: { document: { _id: 1, name: "Alice", age: 25 } } },
   { updateOne: { filter: { name: "Bob" }, update: { $set: { age: 30 } } } } ])

4. createIndex() - Create an index for one or more field it improves querying
eg : db.products.createIndex({ productName: 1 });

5. createIndexes - It allow us to create multiple indexes on a single operation
eg : db.products.createIndexes([
   { key: { productName: 1 } },
   { key: { category: 1 } } ]);

6. datasize() - return the size of the collection

7. deleteOne - Used to delete a document in the collection
eg : db.students.deleteOne({ name: "Bob" });

8. deleteMany - used to delete multiple document in a collection
eg : db.students.deleteMany({ age: { $gte: 25 } });

9. drop() - Removes the specified collection from the database.

10. dropIndex() - Removes a specified index on a collection.

11. dropIndexes() - Removes all indexes on a collection.

12. explain() - Returns information on the query execution of various methods.

13. find() - Performs a query on a collection or a view and returns a cursor object.

14. findAndModify() - It provides a way to automatically update and return the document
eg : db.collection.findAndModify({ query: <query>, sort: <sort>, update: <update>, options: <options> });
	extras - findOneAndReplace(), findOneAndUpdate() , findOneAndDelete()

15. findOne() - return one document that satisfies the query

16. distinct() - Returns an array of documents that have distinct values for the specified field.

17. getIndexes() - return the array of documents that describes the existing indexes on a collection

18. insertOne() - Used to insert a single document

19. insertMany() - used to insert multiple document it must be inside an array

20. mapReduce() - used for processing and analyzing large amounts of data in a collection.

21. updateOne() - Modifies a single document in a collection.
eg :  db.users.updateOne( { name: "Alice" }, { $set: { age: 26 } } );

22. updateMany() - Modifies multiple documents in a collection.
eg : db.users.updateOne( { status: "Active" }, { $set: { age: 30 } } );


Document
--------
document is a fundamental unit of data storage and retrieval. It is a structured data object that represents a single record or entry in a MongoDB collection. 

1. Adding new document 
 insertOne()
 insertMany()

2. Nested documents - Nested documents are documents that are embedded within the fields of another document.

Advanges of Nested documents
----------------------------
1. Hierarchical Data representation

2. Reduced number of collection

3. Atomic updates

4. Improved query performance

5. Schema flexibility

6. Denormalization

7. Easier serialization and easier deserialization

Methods to insert in MongoDB
---------------------------
1. insertOne

2. insertMany

3. bulkWrite
eg : const bulkInsertOperations = [
   { insertOne: { document: { orderNumber: "124", customerName: "Jane Smith" } } },
   { insertOne: { document: { orderNumber: "125", customerName: "Tom Johnson" } } }
];
db.orders.bulkWrite(bulkInsertOperations);

4. aggregate
eg : db.product.aggregate( [
	{ $match : { price : {$gte : 15} } },
	{$out : "highvalueProduct"}
])
 If the condition is satisfied, then it will return a new collection with name "highvalueProduct"


Finding or Querying
--------------------
1. Find()
eg : db.collection.find(query, projection);

query - An optional query condition or filter that specifies which documents to retrieve.
projection - An optional parameter that specifies which fields should be included or excluded in the result.

2. findOne({ filter }) -  It returns the first document that satisfies the filter criteria.

3. finding in nested array
 eg : db.employees.find({ename : "Rahul"},{ename : 1,"address.city" : 1})

 3a.field.field
 eg : db.collection.find({ field.filed : "vlaue" })

 3b. $match - The $match stage is used to filter the documents based on specific conditions.
	eg: db.collection.aggregate( [ { $match : { date : { $gte : "value" , $lte : "value" } } } ] )

 3c. exact match
 eg : db.books.find({ title: "The Great Gatsby" }); - normal matching 
      db.books.find({ title: { $eq: "The Great Gatsby" }, author: { $eq: "F. Scott Fitzgerald" } });

 3d. multiple match - including multiple match stages in aggregate function
 eg : db.products.aggregate([{ $match: { price: { $gt: 10, $lt: 20 } } },{ $match: { quantity: { $gt: 100 } ]);


Array 
-----
1. with specific order
 eg : db.books.find({ "genres": { $in: ["Fantasy", "Adventure", "Mystery", "Science Fiction"] } });

2. without specific order
 eg : db.books.find({ "genres": { $all: ["Fantasy", "Adventure", "Mystery", "Science Fiction"] } });

3. query by array index
 eg : db.std.find({scores.1 : {$eq : 80 , $exists : true}})

4. query by array size
 eg : db.std.find({ scores : {$size : 5}})


Projection
----------
1. Include and exclude fields
 eg : db.std.find({ "scores.1": { $exists: true } });

2. Projection in aggregation
 eg : db.collection.aggregate([ { $match: { "field": "value" } }, { $project: { "field1": 1, "field2": 1, "_id": 0 } } ])


Filtering
---------
1. find( filter )
 eg : db.collectionName.find({ "fieldName": "value" })

2. find( filter , fields to get)
 eg : db.collection.find( {field : value }, { field1 : 1, field2 : 1, field3 :  0})


Method chaining
---------------
1. count() - The count() method in MongoDB is used to count the number of documents that match a specific query criteria within a collection.
 eg : db.collection.count({ field : "value"})

2. limit() - The limit() method in MongoDB is used to restrict the number of documents returned by a query to a specified maximum number.
 eg : db.collection.find().limit(num)

3. sort(1 or -1) - the sort() method is used to sort the documents in the result set of a query. 1 for ascending and -1 for descending order
 eg : db.collection.find().sort({ name : 1})

4. skip() - the skip() method is used to skip the specified number of dicument in a result
 eg : db.collection.find().skip(num)


Operators
---------

1. $gt - greater than , $gte - greater than or equal

2. $lt - less than , $lte - less than or equal

3. $or - used to query for documents that match at least one of several conditions.
 eg : db.books.find( { $or: [ { genre: "Mystery" },{ author: "Agatha Christie" },{ year: { $gte: 2000 } } ] } )

4. $and - used to query for documents that match all of several conditions.
 eg : db.collection.find( { $and : [{ field1 : "value 1"},{field2 : "value 2"}] } )

5. $not - used to negate a condition, effectively returning documents that do not match the specified condition.
 eg : db.collection.find( { field1 : {$not : {$eq : "value"} } } )

6. $in - used to querys for a documents where a specific field value  matches any value  in a provided array
 eg : db.collection.find( { filed : {$in : [ v1,v2,v3 ] } } )

7. $nin -  operator is the negation of $in. It is used to query for documents where a specific field's value does not match any value in a provided array.
 eg : db.collection.find( { filed : {$nin : [ v1,v2,v3 ] }} )

8. $all - used to query for documents where a specific field contains an array that includes all of the specified values.
 eg : db.std.find({scores : {$all : [value,value,value] } } )

9. $set - Using with updateOne, updateMany and update.
 eg : db.demo.updateOne( { name : "Midhun" },{ $set : { age : 22 } } )

10. $unset - used to remove a specific field from a document. Using with updateOne, updateMany and update.
 eg : db.demo.updateOne( { name : "Midhun" },{ $unset : { age : "" } } )

11. $elemMatch - used to check whether the field and value is in the object array
 eg : db.person.find( { array : { $elemMatch : { field : value , field : value } } } )

12. $slice - used to limit the number of elements returned in an array field.
 eg : db.person.find({},{ addresses : { $slice : 1 } } )

13. $size - used to query documents where an array field has a specific number of elements
 eg : db.person.find( { addresses : { $size : 2 } } )

14. $inc 1 - used to increment the field by 1 used with update, updateOne, updateMany
 eg : db.demo.updateOne({name : "Midhun"}, {$inc : {age : 1}})

15. $inc -1 - used to decrement the field by 1 used with update, updateOne, updateMany
 eg : db.demo.updateOne({name : "Midhun"}, {$inc : {age : -1}})

16. $push - used to add an element to an array field, a specified value to the end of the array within a document.
 eg : db.std.updateOne( { name : "Alice" },{ $push : { scores : 100} } )

17. $pull - used to remove elements from an array field that match a specified condition.
 eg : db.std.updateOne( { name : "Alice" },{ $pull : { scores : 100 } } )

18. $each - used with the push operator to insert the values of an array to the existing array.
 eg : db.std.updateOne( { name : "Alice" }, { $push : { scores : { $each : [100,200] } } } )

19. $pull , $in - the in operator can use with the pull operator to remove multiple elemnts from the array at a time
 eg : db.std.updateOne( { name : "Alice" }, { $pull : { scores : { $in : [100,200] } } } ) 

20. $eq - used to compare values and retrieve documents where a specified field is equal to a particular value.
 eg : db.std.find( { name : { $eq : " Alice" } } 

21. $ne - used to compare values and retrieve documents where a specified field is not equal to a particular value.
 eg : db.std.find( { name : { $ne : "Alice"} } )

22. $currentDate - used to set the value of a field to the current date and time or to a timestamp.
 eg : db.std.updateOne({name : "Alice"},{$currentDate : {date : true } } ) - this will add a new date field

23. $exists - used to check for the existence of a field within a document. If the field exist the query will return the document
 eg : db.std.find( {name : { $exists : true } } )   

24. $rename - used to rename a field within a document. It allows you to change the name of a field while keeping its value intact.
 eg : db.collectionName.update( {},{ $rename : { "oldfiledName" : "newfieldName"} },{multi : true} )

25. $expr - allows you to perform complex expressions and comparisons within queries. It is often used to compare fields within a document or to perform arithmetic operations.
 eg : db.prod.find( { $expr : { $lt : [ "$discount",{ $multiply : [ "$price",0.8 ] } ] } } )
 eg : db.prod.find( { $expr : { $ne : [ "$discount","$price" ] } } )

26. $upsert - The upsert operation can be useful when you want to modify a document if it exists, or create a new one if it doesn't
 eg : db.myCollection.update( { _id: 123 },{ $set: { name: "John" } },{ upsert: true } )

27. $text - used for performing full-text search in MongoDB. To use $text, you need to create a text index on one or more fields in your collection.
 eg : db.articles.createIndex({ content: "text" });
      db.articles.find({ $text: { $search: "mongodb" } })

28. $where - allows you to run JavaScript expressions within your queries.
 eg : db.myCollection.find({
  $where: function() {
    return this.field1 + this.field2 === 10;
  }
});

29. $pop - used to remove first or last element from an array
 eg : db.collection.update( { _id: documentId },{ $pop: { arrayField: 1 } } ) //to remove last element
      db.collection.update( { _id: documentId },{ $pop: { arrayField: -1 } } ) // To remove the first element


Aggregation
-----------
1. How does it work ? 
Aggregation in MongoDB is a framework for processing and transforming data within a collection. It allows you to perform various operations on documents, such as filtering, grouping, sorting, and computing new values. Aggregation is a powerful tool for generating reports, extracting insights, and preparing data for analysis.
 
2. Advantages 
-------------
a. Data transformation
b. Data reduction
c. Grouping
d. Complex calculation
e. Array and join operations
f. perform optimization
g. Pipelining

Aggregation stages
-----------------
$sort , $count , $limit , $skip

1. $match - used to filter documents based on specified criteria. It's similar to the find method.
 eg : db.orders.aggregate( [ { $match : { price : { $gte : 10, $lte :16 } } } ] )

2. $out - used to save the result of an aggregation pipeline to a new collection. 
 eg : db.orders.aggregate( [ { $match : { price : { $gte : 10 , $lte : 16 } } },{ $out : "newcollection" } ] )

3. $project - allows you to reshape documents by selecting specific fields, renaming them, or adding computed fields.
 eg : db.orders.aggregate( [ { $project : { _id : 0, name : "Prod_name", total_revenue : { $multiply : [ "price","quantity" ] } } } ] )

4. $lookup - used for performing a left outer join between documents from the current collection and documents from another collection based on a common field.
 eg : db.sales.aggregate( [ { $lookup: { from: "products", localField: "productId", foreignField: "_id", as: "productInfo" } } ] )

5. $unwind - used to deconstruct arrays within documents, creating separate documents for each element in the array.
 eg : db.collectionName.aggregate( [ { $unwind : arrayfieldName } ] )

6. $group
 6a. Group by a field
	group documents by a specific field and perform aggregations within each group
	eg :  db.sales.aggregate( [ { $group: { _id: "$product",totalRevenue: { $sum: { $multiply: [ "$price","$quantity" ] } } } } ] )

 6b. Grouping by multiple field
	group by multiple fields to create more granular groups.
	eg : db.sales.aggregate( [ { $group: { _id: { product: "$product", year: { $year: "$date" } }, totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } } } } ] )

 6c. Grouping by nested field
	eg : db.customers.aggregate( [ { $group: { _id: "$address.city", totalCustomers: { $sum: 1 } } } ] )


Aggregation example
-------------------

db.collectionName.aggregate(pipeline,options)a

pipeline = Array of operations


Accumulators Operators
----------------------
1. $sum
 eg : db.orders.aggregate([ { $group: { _id: { name: "$name", size: "$size" }, totalRevenue: { $sum: { $multiply: ["$price", "$quantity"] } } } } ] )

2. $max
 eg : db.orders.aggregate([{$group: {_id: {name: "$name",size: "$size"},maxPrice: { $max: "$price" }}}])

3. $avg
 eg : db.orders.aggregate([{$group: {_id: {name: "$name",size: "$size"},avgQuantity: { $avg: "$quantity" }}}])

4. $min
 eg : db.orders.aggregate([{$group: {_id: {name: "$name",size: "$size"},minDate: { $min: "$date" }}}])

5. addToset - used to add values to an array field without duplicates.
 eg : db.users.aggregate([{$unwind: "$tags" },{$group: {_id: null,uniqueTags: { $addToSet: "$tags" } }}])


Sharding
--------
Sharding is a method for distributing data across multiple servers or nodes to ensure horizontal scalability and improved performance.

Shard Key: The shard key is a field or a combination of fields that determines how data is distributed across different shards.MongoDB uses the shard key to route documents to the appropriate shard

Shard Servers: These are individual MongoDB instances or clusters that store a subset of the data. Each shard contains a portion of the entire dataset, and collectively they hold the entire dataset of the MongoDB deployment.

Config Servers: Config servers store metadata about the sharded cluster, including the distribution of data across shards and the shard key ranges.

Query Router (mongos): The query router is an interface between the application and the sharded cluster. It directs queries to the appropriate shard and aggregates the results.

Chunks: Data is divided into smaller segments called "chunks." Each chunk is a range of shard key values and is stored on a specific shard.

Advantages of sharding
----------------------
Horizontal scalability
Load balancing
High availability
Geographic distribution
Efficient use of hardware

Types of sharding
-----------------
1. Hashed Sharding:

In Hashed Sharding, MongoDB distributes data across shards by applying a hash function to a specific field (the shard key). The hash function converts the shard key value into a hash value, which is used to determine the target shard.

2. Ranged Sharding:

Ranged Sharding involves distributing data based on specific ranges of shard key values. Each shard is responsible for a specific range of values, and data is distributed according to these ranges.

3. Zone Sharding:

Zone Sharding is used when you want to control the placement of data based on specific criteria such as data center locations, geographic regions, or other attributes.

Shard key types 
---------------
1. shard hotspots
------------------
A shard hotspot occurs when a large proportion of read or write operations are directed to a single shard, causing that shard to become a bottleneck.

2. normal shard key
-------------------
A normal shard key is chosen based on the application's access patterns, queries, and distribution of data. It is designed to evenly distribute the data across the shards to avoid hotspots. 

3. hashed shard key
-------------------
A hashed shard key involves applying a hash function to a specific field (the shard key) to determine the target shard. 

Vertical scaling
----------------
Vertical Scaling: Vertical scaling involves increasing the capacity of a single server by adding more resources, such as CPU, RAM, or storage. It's also known as "scaling up."

Horizontal scaling
------------------
Horizontal Scaling: Horizontal scaling, on the other hand, involves adding more servers to a cluster to distribute the workload. MongoDB's sharding is a form of horizontal scaling.

Zones
----
Zones in MongoDB are used for data partitioning and routing control. You can create zones to control which data is stored on specific shards within a sharded cluster.

Auto balancing
--------------
The auto-balancer is a feature in MongoDB that automatically redistributes data across the shards in a sharded cluster to maintain even data distribution.

Cluster
-------
In MongoDB, a cluster is a group of servers or nodes that work together to store and manage the data. MongoDB clusters are designed for high availability, fault tolerance, and horizontal scalability.

Types of clusters
-----------------
Replica set
-----------
A replica set is the basic building block of MongoDB's high availability architecture. It consists of multiple MongoDB instances (nodes) that replicate data to ensure fault tolerance and data redundancy.

Sharded cluster
----------------
A sharded cluster is designed to horizontally scale MongoDB by distributing data across multiple shards

Arbiter
-------
An arbiter is a lightweight member in a replica set that does not store data but participates in replica set elections

Embedding
----------
Embedding involves nesting one or more documents or objects within another document.

Linking (Normalization)
-----------------------
Linking involves storing references or foreign keys to related documents in separate collections rather than embedding them directly.


$or vs $in vs $and
-----------------
$or - performs a logical OR operation on an array of two or more expressions, and selects documents that satisfy at least one of the expressions.
 eg : db.products.find({ $or: [{ price: { $lt: 10 } }, { quantity: { $gt: 20 } }] })

$in - used to select documents where the value of a field matches any value in a specified array.
 eg : db.products.find({ color: { $in: ["red", "blue"] } })

$and - used to combine multiple expressions into a single query, and selects documents that satisfy all the specified conditions.
 eg : db.products.find({
  $and: [{ category: "electronics" }, { price: { $lt: 100 } }]
})

Gridfs
------
GridFS (Grid File System) is a specification for storing and retrieving large binary objects, such as audio, video, images, and other binary data, in MongoDB.  which has a 16 MB size limit for individual documents. GridFS allows you to store and manage files larger than this size limit by dividing them into smaller chunks.

Journaling
----------
 "journaling" refers to a technique used to ensure the durability and consistency of data in the face of system failures or crashes. Journaling is particularly important for databases like MongoDB to maintain data integrity and recover from unexpected events.

Journaling Working
------------------
Write Operations: When data is written to MongoDB, it is first written to an in-memory data structure known as the "write-ahead log" (WAL) or "journal."

Asynchronous Disk Write: Periodically, MongoDB flushes the in-memory write-ahead log to disk in a sequential and efficient manner. This process is asynchronous, which means that MongoDB can continue processing new write operations while the journal is being written to disk.

Commit to Data Files: Once the data is safely stored in the journal, MongoDB writes it to the permanent data files on disk.

CAP Theorom
-----------
The CAP theorem, also known as Brewer's theorem, is a fundamental concept in distributed computing. According to the CAP theorem, a distributed system can achieve at most two of these properties simultaneously but not all three.

Properties are - Consistency , Availability , Partiton Tolerance

Consistency
-----------
All the clients see the same view of data  even right after  update or delete

Availability
------------
All clients can find a  replica of data even in case of partial node failures

Partition tolerance
-------------------
It is a guarentee the system continue to operation even if there is a  network issue in the data center and some of the computers  are unreachable

Capped collection
-----------------
Capped collection is a type of collection with a fixed size that behaves differently from a regular collection. It has some unique characteristics such as fixed size , insertion order , auto deletion and no updation.

db.createCollection("logs", { capped: true, size: 1048576 });

Non sql db's
------------
Mongo db
Apache cloud db
IBM db2
Apache cassandra
Neo4j
Redis
Amazon Dynamo DB
Amazon Neptune

Replace vs Update
-----------------

Replace - replace entire document

Update - Updating specific field

Drop vs Remove
--------------

Drop - deleting the entire collection
 eg : db.coolectionName.drop()

Remove - deleting document from a collection that satisfiying the condition
 eg : db.collectionName.remove({ field :  "value" })

Primary key vs Secondary key
----------------------------

Primary key - In MongoDB, each document (record) has a special field called "_id," which serves as a primary key by default.

Secondary key - In MongoDB, secondary keys are implemented using indexes.

MongoDB
-------
MongoDB is a NoSQL database that stores data in a flexible, schema-free format. It is designed for high-performance, scalability, and ease of development, making it suitable for a wide range of applications. MongoDB uses collections and documents to organize data and is known for its ability to handle large volumes of data and unstructured information efficiently.

BSON (Binary JSON):
-------------------
BSON is a binary-encoded serialization format used by MongoDB to represent structured data. It offers advantages like efficient storage and traversal

MongoDB Shell
--------------
a command-line interface for MongoDB:
Interactive command-line tool.
Connects to MongoDB databases.
Supports JavaScript-based queries and commands.

Advantages of MongoDB
----------------------
- Flexible schema design.
- Scalability and sharding capabilities.
- High performance for read-heavy workloads.
- JSON-like document format.
- Rich query capabilities.
- Replication and high availability.

Disadvantages of MongoDB
------------------------
- Limited transaction support.
- Not suitable for complex, multi-join queries.
- Memory-intensive for write-heavy workloads.
- No built-in support for ACID transactions.
- Inconsistent query performance.
- Potential data integrity issues with flexible schema.


SQL (Structured Query Language)
-------------------------------
- Data structure is structured with tables.
- Requires a fixed schema for data.
- Utilizes SQL (Structured Query Language) for querying.
- Typically vertically scalable, by adding more resources to a single server.
- Provides ACID properties (Atomicity, Consistency, Isolation, Durability).
- Best for structured data with complex relationships.
- Examples include MySQL, PostgreSQL, Oracle.
- Mainly relies on relational data models.

NoSQL (Not Only SQL)
--------------------
- Data structure is flexible and unstructured.
- Allows dynamic or schema-less data.
- Supports various query languages or APIs.
- Achieves horizontal scalability, by adding more servers to a distributed system.
- Follows BASE properties (Basically Available, Soft state, Eventually consistent).
- Suitable for unstructured or semi-structured data with varying requirements.
- Examples include MongoDB, Cassandra, Redis, Couchbase.
- Supports various data models, such as Document, Key-Value, Column-Family, Graph, etc.

Schema
------
A schema, in the context of databases, is a blueprint or structure that defines the organization and format of data in a database. It specifies how data is organized, what types of data can be stored, and the relationships between different data elements.

Unary Operators
---------------
1. $type 
2. $lt 
3. $gt 
4. $or 
5. $and
6. $multiply

Relationships
-------------
1. Embedding - Embedding is a way to represent relationships by directly including one document or entity within another.
2. Referencing - Referencing involves representing relationships by storing references (such as IDs) to related documents or entities.
3. One to one - This represents a relationship where one entity is associated with exactly one other entity.
4. One to many - This represents a relationship where one entity is associated with more than one	 entity.
5. One to Squillions - This is similar to one-to-many, but with a much larger number of related entities.
6. Many to many - In a many-to-many relationship, multiple entities on one side can be related to multiple entities on the other side.

Batch size
----------
The batchSize option specifies the maximum number of documents that should be returned in a single batch from the server to the client. A batch is essentially a chunk of query results.
 eg : db.myCollection.find({}).batchSize(50);

Atomic operations
-----------------
Atomic operations are database operations that are guaranteed to be executed as a single, indivisible unit. 
set inc push pull addToset unset

Types of index
--------------
1. Single Field Index
 eg : db.demo.createIndex({name : 1})

2. Compound Index - A compound index is created on multiple fields within a document. It is useful when queries involve multiple fields and can improve the efficiency of queries that filter or sort by a combination of these fields.
 eg : db.demo.createIndex({name : 1,age : 1})

3. Unique Index - ensures that the values for a specified field or a combination of fields are unique across all documents in a collection. 
 eg : db.collection.createIndex({ unique_field: 1 }, { unique: true });

4. Text Index - Text indexes are used for performing full-text search on string content.
 eg : db.collection.createIndex({ text_content: "text" });

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

8. Wildcard Index - A wildcard index is a type of text index that supports wildcard and regex queries.
 eg : db.text_collection.createIndex({ text_content: "text" });

9. Background Index - Background indexes are created without blocking write operations on the database, improving overall performance during index creation.
 eg : db.collection.createIndex({ field_name: 1 }, { background: true });

10. TTL Indexes:-
Purpose: TTL indexes, or Time-To-Live indexes, automatically remove documents from a collection after a specified amount of time.

Functionality: They are useful for managing data that has a temporal aspect, like logs or sessions that should be automatically purged after a certain duration.

11. Sparse Index:-
an index that only includes documents that contain the indexed field. 


Fault tolerance
---------------
Fault tolerance in MongoDB refers to the system's ability to continue functioning and providing services in the presence of hardware failures, software errors, or other unexpected issues.

To achieve fault tolerance 
Replica set
Automatic failover
Write concerns
Data distribution
Journaling
Backup and restore

Query
-----
a query is a request for specific information or data from a database. It is a way to retrieve, filter, and manipulate data stored in a database to meet specific criteria or requirements. Queries are used to communicate with a database management system (DBMS) to extract the desired data.


Regex
------

/a$/ - last a

/^a/ - first a

/a/ - a in that field

/iam/ - string

/A.a/ - starting A then any single character and end with a

'[aeiou]{2,3}' - specifies that you are looking for 2 or 3 consecutive vowels in the value of "testProperty".

/^abcx*/ - starting with abc and is followed by zero or more x

/^abcx+/ - starting with abc and is followed by one or more x

/^abcx?/ - Find documents where 'fieldName' can be either 'abc' or 'ab'

/m/i - case insensitive


NTFS -  New Technology File System, is a file system developed by Microsoft. It is the default file system for Windows operating systems

Namespace - a namespace refers to the combination of the database name and the collection name. It is a way to uniquely identify a specific collection within a database. For example, if you have a database named "mydatabase" and a collection named "mycollection," the namespace would be "mydatabase.mycollection."

Covered query - a query where all the fields in the query are covered by an index, and the index itself provides all the data 
needed to fulfill the query. 

View
----
That allows you to create virtual collections based on aggregation pipelines. Views allow you to define complex data transformations, filtering, and aggregation logic 
