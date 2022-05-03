//we need our model/collection so that we can create user into it so requring our collection/model
const User=require('../models/user')

//added profile controller
module.exports.profile=function(req,res){

  //now i know i can get user info here in profile as req has cookies and user id is stored in cookies
  //user cookies stored user_id=id of user in db 
  //we had done this in step 4 of authentication
  //so i user cookies from req and search the db for id = req.cookies.user_id
  // and just passed the upcoming user from find to ejs to render

   if(req.cookies.user_id)
   {
    User.findById(req.cookies.user_id,function(err,user){

      if(err){console.log("error finding user"); return}
  
      if(user)
      {
        return res.render('user_profile',{
          title:"uprofile",
          vuser:user
      })
      }
      else{
      return res.redirect('user/signin');
      }
  
      })
   }
   else
   {
   return res.redirect('/user/signin')
   }


}



module.exports.logout=function(req,res)
{
  res.clearCookie("user_id");
  return res.redirect('/user/signin');
}







module.exports.signup=function(req,res){
return res.render('user_signup',{
    title:"codeial signup"
})
}


module.exports.signin=function(req,res)
{
    return res.render("user_signin",{
        title:"codeial | signin"
    })
}


module.exports.createuser=function(req,res)
{
    //if password and confirm password of form does not match redirect back
    if(req.body.password!=req.body.confirmpassword)
    {
    res.redirect('back');    
    }
  
//finding the db with email enterd in form if we  find the same mail in db then we will redirect back
//if not we will create a user with that info in db

 User.findOne({email:req.body.email},function(err,user){
  
    if(err){console.log("error in findin users"); return}

    if(!user){

        //created user with info enterd through signup page
        User.create(req.body,function(err,user){
            if(err){console.log("error in creating users"); return}

            return res.redirect('/user/signin');
        });
    }

   //if email mathced in db we will redirect back 
    else
    {
    res.redirect('back');
    }

 });




}


//signin and creagte session for user
module.exports.createsession=function(req,res)
{
  //steps for authenticate

///step1 :find the user

   User.findOne({email:req.body.email},function(err,user){
    if(err){console.log("errror creating session"); return}

// step2: handle user found
   if(user)
   {

//step3 :if user found handle passwod which dont match
   if(user.password!=req.body.password)
   {
     return  res.redirect('back');
   }

 //step4 :handle session creation
    res.cookie('user_id',user.id);
    return res.redirect('/user/userprofile') 

   }
   
   else
   {
  //step5 :handle user if not found 
  return res.redirect('back');
   }

   })


}