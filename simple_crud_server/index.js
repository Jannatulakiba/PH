
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { MongoClient } from 'mongodb';

const app = express()
const port = process.env.port || 5000


app.use(cors())
app.use(express.json())


const client = new MongoClient(`mongodb+srv://${process.env.db_user}:${process.env.db_pass}@cluster0.8hmkkvj.mongodb.net/?compressors=zlib`);

export async function connectToMongoDb () {
    try {
        await client.connect();
 console.log("succesfully connected to mongodb")
        return client;
    }
    catch(err) {
        console.dir(err)
    }

}
       const connectedClient = await connectToMongoDb();
       const db = connectedClient.db("crud_server")
       const users = db.collection('user')






 app.get('/' ,(req , res) => {
    res.send("simple crud operation ")
})

app.get ('/users' , async(req,res) => {
     const cursor = users.find({});

  const allusers = await cursor.toArray();
res.send(allusers)

})



app.listen(port , () => {
    console.log(`simple crud server running on : ${port}`)
})