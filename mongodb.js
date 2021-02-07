// CRUD operations

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID()
// console.log(id)
// console.log(id.id.length)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, { useUnifiedTopology: true}, (error, client) => {
    if(error){
        return console.log('Unable to connect to database!');
    }
    
    const db = client.db(databaseName);

    // db.collection('users').deleteMany({
    //     age: 23
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        name: "Ashwani"
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})







    // db.collection('users').insertOne({
    //     name: 'Abhishek',
    //     age: 22
    // }, (error, result) => {
    //     if(error){
    //         console.log('Unable to insert user');
    //     }
    //     console.log(result.ops);
    // })
    // db.collection('users').insertMany([
    //     {
    //         name: 'akash',
    //         age: 23
    //     },
    //     {
    //         name: 'bablu',
    //         age: 23
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops);
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'Do exercise!',
    //         completed: true
    //     },
    //     {
    //         description: 'Do study!',
    //         completed: true
    //     },
    //     {
    //         description: 'Do cycling!',
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log('Unable to insert tasks!')
    //     }
    //     console.log(result.ops);
    // })



    // db.collection('users').findOne({name: 'Abhishek', age: 22}, (error, user) => {
    //     if(error){
    //         return console.log('Unable to fetch!')
    //     }
    //     console.log(user);
    // })
    // db.collection('users').findOne({ _id: new ObjectID("601ebbe950cace141c62fda7") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to fetch!')
    //     }
    //     console.log(user);
    // })
    // db.collection('users').find({age: 22}).toArray((error, users) => {
    //     console.log(users)
    // })
    // db.collection('users').find({ age: 22 }).count((error, users) => {
    //     console.log(users)
    // })
    // db.collection('tasks').findOne({ _id: new ObjectID("601ed7d409e0ba271c0f30ab")}, (error, task) => {
    //     console.log(task);
    // })
    // db.collection('tasks').find({completed: true}).toArray((error, tasks) => {
    //     console.log(tasks);
    // })



    // db.collection('tasks').updateMany({
    //     completed: true
    // }, {
    //     $set: {
    //         completed: false
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // db.collection('users').updateOne({
    //     _id: new ObjectID("601ec063d4361f1674d86a56")
    // }, {
    //     $set: {
    //         name: 'Ashwani'
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })
    // const updatePromise = db.collection('users').updateOne({
    //     _id: new ObjectID("601ec063d4361f1674d86a56")
    // }, {
    //     $set: {
    //         name: 'Ashwani'
    //     }
    // })
    // updatePromise.then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })