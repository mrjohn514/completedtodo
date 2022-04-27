// import database configuaration here it is important becaouse controller usees db rather than in home
const db = require('../config/mongoose');

// import database model
const todo = require('../models/todoapp');

// This function will create a new task entry in the database from the entered data and refresh the whole page
module.exports.create = function(req,res){

    todo.create({
      work:req.body.work,
      category:req.body.category,
      date:req.body.date
      
      },function(err,newtodo){
      if(err)
      {
        console.log("errerr");
        return
      }
      console.log('*********',newtodo);
      return res.redirect('back');
      
      });
  
  }


module.exports.delete=function(req,res){

      // If user haven't selected any task to delete
      if(req.body.id == undefined){
        console.log("User haven't selected any task to delete");
        return res.redirect('back');
    }
    // If only one task is to be deleted
    else if(typeof(req.body.id) == 'string'){
        todo.findByIdAndDelete(req.body.id, function(err){
                if(err){
                    console.log("error deleting task ");
                    return;
                }
                return res.redirect('back');
            });
    }
    // If multiple tasks are to be deleted
    else{
        for(let i of req.body.id){
            todo.findByIdAndDelete(i, function(err){
                if(err){
                    console.log("error deleting tasks ");
                    return;
                }
            });
        }
        return res.redirect('back');
    }
  
  }