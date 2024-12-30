const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

let app = express();
app.use(cors());
app.use(express.json());

app.post("/signup",async (req,res)=>{
  console.log(req.body);

  try{
    let newUser = new User({
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        age:req.body.age,
        email:req.body.email,
        password:req.body.password,
        mobileNo:req.body.mobileNo,
        profilePic:req.body.profiliPic,
      });
    
     await User.insertMany([newUser])
    
      res.json({status:"success",msg:"User created successfully"});
  }catch(err){
    res.json({status:"failure",msg:"Unable to create account"});
  }

 });


app.listen(5000,()=>{
    console.log("Listening to port 5000");
});


let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    email: String,
    password: String,
    mobileNo: String,
    profilePic: String,
});

let User = new mongoose.model("users",userSchema,"users");

let insertDataIntoDB = ()=>{

    try{
        let newUser = new User({
            firstName: "Anvith",
            lastName: "Sriram",
            age: 4,
            email: "anvith@gmailcom",
            password: "navisha",
            mobileNo: "+91-8997877784",
        });
        
          User.insertMany([newUser]);
          console.log("inserted data into db successfully");
    }catch(err){
         console.log("Unable to insert data into db");
    }
};

let connectToMDB = async ()=>{

    try{
        mongoose.connect("mongodb+srv://santhoshikumari:santhoshikumari@bath2408cluster.vp7w6.mongodb.net/Batch2408db?retryWrites=true&w=majority&appName=Bath2408Cluster");

        console.log("Successfully connected to MDB");

    }catch(err){
       console.log("Unable to connect to MDB");
       console.log(err)
    }
    
};

connectToMDB();