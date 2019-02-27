const MongoClient = require('mongodb').MongoClient;


MongoClient.connect('mongodb://localhost:27017/todosapi' ,(err,client)=>{
    if(err)
    {
        return console.log('unable to connect to mongodb');
    }

    console.log('connected');

    const db= client.db("todosapi")

    db.collection('Todos').insertOne({
        text:'something to do',
        completed:false

    },(err,result) =>{
        if(err){return console.log('unable to insert to mongodb'); }

       console.log(JSON.stringify(result.ops,undefined,2));
    }
    );


    client.close();
});
