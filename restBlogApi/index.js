const express = require("express");
const dotenv = require("dotenv")
const db = require("./database/database.js")
const auth = require("./routes/authRoute.js")
const app = express()
dotenv.config();

const port = process.env.PORT || 3000
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb",extended:true}))



app.use("/",auth)

app.get('/' ,(req,res)=> {
    res.json({message:"server is ready"})
} )

db()

app.listen(port,() => {
    console.log("server started")
})


