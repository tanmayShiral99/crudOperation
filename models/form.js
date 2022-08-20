const mongoose = require('mongoose');
const formSchema = mongoose.Schema;

const newschema = new formSchema({
    name:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true,
        unique:true
    },
    location:{
        type:String,
        required:true
    }
},{collection:'ajay'})

module.exports = mongoose.model('Userschema',newschema);