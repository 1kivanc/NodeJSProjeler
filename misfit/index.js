const express = require('express');


const app = express();

app.use(express.static('public'));
app.set('view engine','ejs');


app.get('/contact', (req,res) => {
    res.render('contact',{
        page_name:'contact'
    });
});


app.get('/about',(req,res) => {
    res.render('about',{
        page_name:'about'
    })
})

app.get('/gallery',(req,res) => {
    res.render('gallery',{
        page_name:'gallery'
    })
})

app.get('/news',(req,res) => {
    res.render('news',{
        page_name:'news'
    })
})

app.get('/service',(req,res) => {
    res.render('service',{
        page_name:'service'
    })
})

app.get('/trainer',(req,res) => {
    res.render('trainer',{
        page_name:'trainer'
    })
})

app.get('/',(req,res) => {
    res.render('index',
    
    {
        page_name:'index'
    });
})


app.listen(3000,() => {
    console.log('Sunucu 3000 portunda başlatıldı');


})

