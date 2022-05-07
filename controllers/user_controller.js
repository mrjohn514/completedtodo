//we need our model/collection so that we can create user into it so requring our collection/model
const User=require('../models/user')



module.exports.profile=function(req,res)
{
    return res.render('user_profile',{
        title:'profile'
    })
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

//sign in and create sesion for user

//when passport use fxn localstrategy to authenticate the user the control comes over here  
module.exports.createsession=function(req,res)
{
    return res.redirect('/');
}