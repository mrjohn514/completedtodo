
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

// console.log(req.cookies);

//altering the user_id cookie to value 25 by res.cookie //altering the data of cookies came through req
// res.cookie('user_id',29);


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