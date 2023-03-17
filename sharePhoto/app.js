const express = require('express');
const dotenv = require('dotenv');
const conn = require("./db");
const pageRoutes = require("./routes/pageRoutes");
const photoRoutes = require("./routes/photoRoutes");
const userRoutes = require("./routes/userRoutes"); 

dotenv.config();



const app = express();

conn();


//template engine 

app.set('view engine', 'ejs');

//public 
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/", pageRoutes);
app.use("/photos" , photoRoutes);
app.use("/users" ,userRoutes);


const port = process.env.PORT || 3000;





app.listen(port,()=> {
    console.log(`${port} da başlatıldı`);
});

