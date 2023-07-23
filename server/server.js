const cors = require("cors")
const express = require("express")

// const { userCollection } = require('./mongo')

const bodyParser = require('body-parser')
const PORT = process.env.PORT || 8000
const app = express()
const db = require('./queries')
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
app.use(cors())

// app.get("/",cors(),(req,res)=>{

// })
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', cors(), (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

// app.post("/signup",async(req,res)=>{
//     const form = req.body.form
//     console.log(form)
//     const data = {
//         name:form.name,
//         email:form.email,
//         password:form.password,
//     }
    
//     await userCollection.insertMany([data])
// })

app.post('/signup',cors(), db.createUser)

app.listen(PORT,()=>{
    console.log(`port connected ${PORT}`)
})


