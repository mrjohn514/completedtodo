
const todo=require('../models/todoapp');


var color_list={
    eating:"#ff2b75;",
    gym:"rgb(9, 171, 225)",
    home:"rgb(210, 14, 213)",
    cleanning:"#201487",
    market:"orange",
    other:"#ff2b75;"
  }
  
module.exports.home=function(req , res){


  
  todo.find({},function(err,todos){      
if(err)
{
  console.log("error fetching from db");
  return;
}
return res.render('todo',{                    
    todo_list:todos,
    title:"my Todo list",
    clist:color_list
  });



  })



} 