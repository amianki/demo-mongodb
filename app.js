const mongodb = require("mongodb").MongoClient
const url = "mongodb://localhost:27017"
const client = new mongodb(url);
const localDB = client.db("local");
const demoCollection = localDB.collection("demoCollection");
// For READ data...
// demoCollection.find({}).toArray().then((data)=>{
//     console.log(data);
// })
//for CREATE data
demoCollection.insertOne({"name":"Babli"}).then(console.log)




