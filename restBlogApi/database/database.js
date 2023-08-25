const mongoose = require("mongoose")

const db = () => {
    mongoose.connect(process.env.CONN_URII,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=> {
        console.log("mongodb connected")
    }).catch((err) => {
        console.log(err)
    })
}

module.exports = db