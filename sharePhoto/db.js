import mongoose from 'mongoose';

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

export default conn ; 