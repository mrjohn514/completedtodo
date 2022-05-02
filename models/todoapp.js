const mongoose =require('mongoose');                 //adding mongoose module
 
const todoschema= new mongoose.Schema({                 //creating schema means defining the fields of our document

work:{
  type:String,
  required:true   
},
category:{
    type:String,
    required:true
},
date:{
    type:String,
    required:true
}


})
//we need to tell what would be the name of collection using this schema and so Todo is the name of
//collection in database
const Todo = mongoose.model('todo',todoschema);

module.exports=Todo;
