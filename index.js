const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT|| 5500;
const app = express();
const studentData = require('./routes/student');
const bodyParser = require('body-parser');


// app.use(cors());
app.use(bodyParser.json());
app.use('/student', studentData);

app.get('/',(req,res)=>{
    res.json('Heelo workd');
})
try {
    mongoose.connect('mongodb://localhost:27017/students',()=>{
    console.log("Connected Successfull");
})
} catch (error) {
    console.log(error)
}



app.listen(port);

