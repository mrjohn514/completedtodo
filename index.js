const express = require('express');

//for reading and writing into cookies we are using library called cookie parser
//step 1 : npm install cookie-parser
//step 2: require the cookie-pareser library 


const cookieParser=require('cookie-parser');

const port = 8000;

//adding library express session for encrypting cookies
const session =require('express-session');
const passport = require('passport');
const passportlocal=require('./config/passport-local-strategy');


const app = express();

//we have to tell the app to use cookie parsr and we know the place to change the  upcoming data through req
//can be alterd in middleware so 
app.use(cookieParser());



// Setting view engine as ejs
app.set('view engine', 'ejs');
// Setting path for views
app.set('views', './views');




//setting the middleware that will takes in the session cookies and encrypt it

app.use(session({
  name:'codeial',  ///name of cookie
 secret: 'blahsomething',            //whenever encryption happen ther is key to encode and decode    
saveUninitialized:false,  //whenever thre is req which is not initialised ->means when teh user is not loged in identity is not establish
//so i dont want to store extra data so set to false

resave:false,  //when the identity is established or some sort of session data/user info is present then do i want to save that data again ->no so false
cookie:{
    maxAge:(1000*60*100)      //for how much millisec cookie live
}

}))

//telling app to use passport
app.use(passport.initialize());
app.use(passport.session());

//whenever this function is called it will check wheather a sesssion cookie is present or not
//if present then it will set the 
// user will be set in locals ;

//so whenever app is intialised this is also called (automatically called as midllware)
//so whenver any req is called in then this is called andd  
app.use(passport.setAuthenticatedUser);


//also have to put routes after these
// Redirect all to index.js inside routes directory
app.use('/', require('./routes'));
 



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