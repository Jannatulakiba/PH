import express from 'express';
import { MongoClient } from 'mongodb';


const app = express()
const PORT = process.env.PORT || 5000


const client = new MongoClient("mongodb://simple_server:jrinwMWw2bO84GF1@ac-ojgnd2i-shard-00-00.8hmkkvj.mongodb.net:27017,ac-ojgnd2i-shard-00-01.8hmkkvj.mongodb.net:27017,ac-ojgnd2i-shard-00-02.8hmkkvj.mongodb.net:27017/?ssl=true&replicaSet=atlas-ipneee-shard-0&authSource=admin");

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}
connectToMongoDB()

app.get('/' , (req , res) => {
        res.send("hellow word from express")
})
app.get('/about' , (req , res) => {
        res.send("hellow word About")

})


const users = [
  {
    id: 1,
    name: "Akiba",
    email: "akiba@example.com",
    password: "12345678",
    role: "user",
    age: 22,
    isActive: true,
  },
  {
    id: 2,
    name: "Safa",
    email: "safa@example.com",
    password: "12345678",
    role: "user",
    age: 22,
    isActive: true,
  },
];

app.get('/users' , (req , res) => {
        res.send(users)
})

app.listen (PORT , () => {
    console.log(`Server is running ${PORT}`)
})