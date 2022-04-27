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

const Todo = mongoose.model('todo',todoschema);

module.exports=Todo;
