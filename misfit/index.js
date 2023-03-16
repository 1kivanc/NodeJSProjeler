const express = require('express');
const mongoose = require('mongoose');
const pageRoute = require('./routes/pageRoute');
const Photo = require('./models/PhotoModels');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/misfit');

app.use(express.static('public'));
app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/" ,pageRoute);

app.post('/uploadPhotos',async (req,res) => {
    await Photo.create(req.body);
    console.log()
    res.redirect('/');
});

app.listen(3000,() => {
    console.log('Sunucu 3000 portunda başlatıldı');


})

