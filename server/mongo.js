const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27001/erupi")
.then(() => {
    console.log("mongo connected")
})
.catch(()=>{
    console.log("failed")
})

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,  
    },
    email:{
        type:String,
        required:true,  
    },
    password:{
        type:String,
        required:true,  
    },
    e_balance:{
        type:String,
        required:false, 
    }
})

const userCollection = mongoose.model("userCollection", userSchema)

const collection = {
    userCollection
}

module.exports = collection