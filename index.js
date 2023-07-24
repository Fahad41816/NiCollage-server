const express = require("express")
const app = express()
const cors = require('cors')
require("dotenv").config()

//medelwere 
app.use(cors())




const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.DatabaseUrl;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const Collage = client.db('NICollage').collection('Collages')

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
   
    








    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);



app.get("/",(req, res)=>{

    res.send('collage website project...')

})


 

app.listen(process.env.PORT, ()=>{
    console.log('server running....')
})


