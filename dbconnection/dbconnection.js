const mongoose = require('mongoose');

//Import Dotenv file
require('dotenv/config');

mongoose.connect(process.env.DB_CONNECTION).then(()=>{
    console.log("App is connected to mongoDB successfull");
}).catch(()=>{
    console.log("App is not Connected to mongoDB")
})

