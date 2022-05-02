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
    //todo;
}

module.exports.createsession=function(req,res)
{
    //todo
}