const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
require ('dotenv/config')
const app=express()
app.use(express.json())
// app.use(bodyparser.json());
app.use(cors());

const user=require('./routes/user')
app.use('/user', user)
app.get("/hi",(req,res)=>{
    try {
        res.send("Hello World")
        
    } catch (error) {
        console.log(error)
    }
})

// const port=6000

// Connencting to Mongoose
mongoose.connect(process.env.CONNECT_DB,{ useNewUrlParser: true ,useUnifiedTopology: true })
.then(()=>{
    console.log("Connected to DB")
})
.catch(error=>{
    console.log(error)
})




app.listen(5000,()=>{console.log(`Listning on port ${5000}`)})
