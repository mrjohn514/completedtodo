const express = require('express');

//for reading and writing into cookies we are using library called cookie parser
//step 1 : npm install cookie-parser
//step 2: require the cookie-pareser library 


const cookieParser=require('cookie-parser');

const port = 8000;

const app = express();

//we have to tell the app to use cookie parsr and we know the place to change the  upcoming data through req
//can be alterd in middleware so 
app.use(cookieParser());



// Redirect all to index.js inside routes directory
app.use('/', require('./routes'));

// Setting view engine as ejs
app.set('view engine', 'ejs');
// Setting path for views
app.set('views', './views');


// to use static files, present in assets directory
app.use(express.static('assets'));

// Setting express to listen to port 8000
app.listen(port, function(err){
    if(err){
        console.log("Error Occurred while trying to run server on port : ", port);
        return;
    }
    console.log("Express Server is up and Running on port : ", port);
});





// app.post('/create-todo',function(req,res){

//   todo.create({
//     work:req.body.work,
//     category:req.body.category,
//     date:req.body.date
    
//     },function(err,newtodo){
//     if(err)
//     {
//       console.log("errerr");
//       return
//     }
//     console.log('*********',newtodo);
//     return res.redirect('back');
    
//     });

// })



// app.post('/delete-todo',function(req,res){

//     // If user haven't selected any task to delete
//     if(req.body.id == undefined){
//       console.log("User haven't selected any task to delete");
//       return res.redirect('back');
//   }
//   // If only one task is to be deleted
//   else if(typeof(req.body.id) == 'string'){
//       todo.findByIdAndDelete(req.body.id, function(err){
//               if(err){
//                   console.log("error deleting task ");
//                   return;
//               }
//               return res.redirect('back');
//           });
//   }
//   // If multiple tasks are to be deleted
//   else{
//       for(let i of req.body.id){
//           todo.findByIdAndDelete(i, function(err){
//               if(err){
//                   console.log("error deleting tasks ");
//                   return;
//               }
//           });
//       }
//       return res.redirect('back');
//   }

// })








// app.listen(port,function(err){
//   if(err)
// {
//  console.log("server is not running");
//  return;   
// }
// else
// console.log("hey expres server is live",port);
// })