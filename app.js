const express = require('express');
const bodyParser = require('body-parser');

const app = express();


//Import PORT From dotenv
const PORT = process.env.port || 4000;

//Import Body Parser for send data in jason form
app.use(bodyParser.json());
//Import urlencoded for import data from ejs file
app.use(express.urlencoded({extended:true}));

//Import MongoDB Connection
require('./dbconnection/dbconnection');

//To set Ejs
app.set('view engine', 'ejs');

//To render Blod HTML file
app.get('/blog_post', (req, res)=>{
    res.render('blog_post');
});


app.get('/',(req, res)=>{
    res.send("WELLCOME TO MY APP");
});

//Import Blog Router
const BLOG_ROUTER = require('./routes/blog');
app.use('/blog_route', BLOG_ROUTER);

app.listen(PORT, (req, res)=>{
    console.log(`App is Running On Port ${PORT}`);
})