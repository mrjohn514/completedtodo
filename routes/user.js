const express = require('express');

const router = express.Router();

const userController = require('../controllers/user_controller');

router.use(express.urlencoded({ extended: true }));

router.get('/signup',userController.signup)

router.get('/signin',userController.signin);

router.get('/userprofile',userController.profile)

router.get('/logout',userController.logout)

// as when someone click submit btn iin form of signup page then  as method is post and action associated 
//with that form is /user/create_user 
//so we mapped this route and added the associated controler  with it
router.post('/create_user',userController.createuser);


router.post('/create_session',userController.createsession)



module.exports=router;