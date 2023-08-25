const express = require("express");
const dotenv = require("dotenv")
const db = require("./database/database.js")
const app = express()
dotenv.config();

const port = process.env.PORT || 3000

app.get('/' ,(req,res)=> {
    res.json({message:"sunucu hazır"})
} )

db()




app.listen(port,() => {
    console.log("sunucu başlatıldı")
})


