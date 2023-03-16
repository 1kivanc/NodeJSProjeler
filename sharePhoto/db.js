const mongoose = require('mongoose');

const conn = () => {
    mongoose.connect(process.env.DB_URI,{
        dbName:'photogram',
        useNewUrlParser:true,
        
    })
    .then(()=> {
        console.log('Db Connected');
    }).catch((err)=> {
        console.log(err);
    })
}

module.exports = conn;