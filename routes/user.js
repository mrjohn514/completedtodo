const express = require('express');

const router = express.Router();

const userController = require('../controllers/user_controller');

router.use(express.urlencoded({ extended: true }));

router.get('/signup',userController.signup)

router.get('/signin',userController.signin);

module.exports=router;