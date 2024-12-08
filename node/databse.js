const { MongoClient } = require('mongodb');

//  connection url
const URL = "mongodb+srv://midhunkpaniker:BFJUhTLXduglunaS@cluster0.kwu06.mongodb.net/";

const client = new MongoClient(URL);

const dbname = "HelloWorld";

async function main(){
    await client.connect()
    console.log("connected successfully to server");
    const db = client.db(dbname);
    const collection = db.collection('users');


    // const sampleData = { 
    //     fname: "deepu",
    //     lname: "pandya",
    //     city: "tamilandu"
    // }

    // const insertdoc = await collection.insertOne(sampleData);
    // if(insertdoc){
    //     console.log("data inserted successfully.");
    // }else{
    //     console.log("data inserting error");
    // }
    
    // const updateDoc = await collection.updateOne({ fname : "deepika" },{ $set : { fname : "Deepika" }});
    // if(updateDoc){
    //     console.log("document updated",updateDoc);
    // }else{
    //     console.log("document updating error");
    // }
    
    // const delDoc = await collection.deleteOne({fname : "deepika"});
    // if(delDoc){
    //     console.log("document deleted",delDoc);
    // }else{
    //     console.log("document deleting error");
    // }
    
    
    // const data = await collection.find({}).toArray();
    // if(data.length > 0){
    //     console.log("data : ",data);
    // }else{
    //     console.log("there is no data in the collection");
    // }

    // const findRes = await collection.find({fname : "deepika"}).toArray();
    // console.log(findRes)

    return 'done.';
}



main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());