const express = require('express');
const dotenv = require('dotenv');
const conn = require("./db");
const pageRoutes = require("./routes/pageRoutes");
const photoRoutes = require("./routes/photoRoutes");
 

dotenv.config();



const app = express();

conn();


//template engine 

app.set('view engine', 'ejs');

//public 
app.use(express.static('public'));
app.use(express.json());

app.use("/", pageRoutes);
app.use("/photo" , photoRoutes);


const port = process.env.PORT || 3000;





app.listen(port,()=> {
    console.log(`${port} da başlatıldı`);
});

