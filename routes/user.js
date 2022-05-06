const express = require('express');

const router = express.Router();

//importing passport 
const passport=require('passport');

const userController = require('../controllers/user_controller');

router.use(express.urlencoded({ extended: true }));

router.get('/signup',userController.signup)

router.get('/signin',userController.signin);

// as when someone click submit btn iin form of signup page then  as method is post and action associated 
//with that form is /user/create_user 
//so we mapped this route and added the associated controler  with it
router.post('/create_user',userController.createuser);

//use passport as middleware to authenicate

//basically when  req come to this route first passport will authenticate and 
//if authencation is done then usercontroller.createsession called
//other wsie failureredirect to signin again

router.post('/create_session',passport.authenticate(
'local',
{failureRedirect:'/user/signin'}

),userController.createsession)

module.exports=router;