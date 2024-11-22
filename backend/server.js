const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const port = process.env.PORT || 5000;
const app = express()
require('dotenv').config();

// JWT
const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  optionsSuccessStatus:200,
  methods: ['GET', 'POST', 'PUT', 'DELETE' ], 
  credentials: true,
}));
app.use(express.json())
// app.use(cookieParser());


// Custom Middleware for Token Verification
const verifyToken = (req,res,next) =>{
    const authorization = req.headers.authorization;
    if(!authorization){
        return res.send({massage: "No Token"})
    }

  const token = authorization.split(' ')[1];

  jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,decoded) =>{
//     // error
    if(err){
      return res.status(401).send({message: 'Unauthorized'})
    }
//     // When Token is Valid
    console.log('Value in the Token',decoded)
    req.decoded = decoded 
    next()
  })
}

// Custom Middleware for Verify seller
    const verifySeller = async (req,res,next)=>{
    const email = req.decoded.email;
    const query = {email: email}
    const user = await userCollection.findOne(query)
        if(user?.role !=="seller"){
            return res.send({massage:"Forbidden Access"})
        }
    next()
}


// Create Connection with the MongoDB Database
const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.kfxlp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create Client
const client = new MongoClient(url,{
    serverApi:{
        version:ServerApiVersion.v1,
        strict:true,
        deprecationErrors:true
    }
});


const userCollection = client.db('project_name').collection("users")
const productCollection = client.db('project_name').collection("products")



const dbConnect = async () =>{
    try{
        client.connect();
        console.log("MongoDB Database Connected successfully")

        // Get User
        app.get("/user/:email",async(req,res)=>{
            const query = {email: req.params.email}
            const user = await userCollection.findOne(query)
            res.send(user)
        })



        // Insert user Data
        app.post("/users",async(req,res)=>{
            const user = req.body;

            // Check Already user have account or not
            const query = {email: user.email}
            const existingUser = await userCollection.findOne(query)

            if(existingUser){
                return res.send({massage: "User already exist"})
            }

            const result = await userCollection.insertOne(user);
            res.send(result);
            console.log(user)
        })

        // Add Product
    app.post("/addProducts",verifyToken,verifySeller, async(req,res)=>{
    const product = req.body
    const result = await productCollection.insertOne(product)
    res.send(result)
    })

    // Get Products
    app.get("/allProducts", async(req,res)=>{
        
    })


    } catch(error){
        console.log(error.name, error.massage)
    }
};

dbConnect()


// Data Related Work
app.get('/',(req,res)=>{
    return res.json("Server is running")
})


// Auth Related Work
app.post('/jwt', async(req,res)=>{
   const userEmail = req.body;
//   console.log(user)
  // Create Token
  const token = jwt.sign( userEmail , process.env.ACCESS_TOKEN_SECRET,{expiresIn:'1d'});

  res.send({token})
})


app.listen(port,()=>{
    console.log(`Server in running on port ${port}`)
})