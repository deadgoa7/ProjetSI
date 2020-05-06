const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'projetArchitecture';

// connect to your cluster
const client = MongoClient.connect(url, function(err,client) { 
  if(err){
    console.log("Error while connecting to MongoDB: " + err);
  }
  const testDb = client.db(dbName);
  findDocuments(testDb, function() {
    client.close();
  });
  
});


const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('festivals');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    if(err){
      console.log("Error with find function: " + err);
    }
    else {
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    }
  });
}

