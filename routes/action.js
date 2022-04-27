const express = require('express');
const router = express.Router();

// import actions controller path to use required controller
const actionsController = require('../controllers/action_controller');

// Middleware to decode data coming from browser
//here we have to put this otherwise date received from submit is not understanded
// we use in index main when like app.use when we define every thing ther
//now router is handling all requests so defindedd here
router.use(express.urlencoded({ extended: true }));

// this will handle the requests coming to /action/create-task and execute create function from actions_controller.js
router.post('/create-todo', actionsController.create);

router.post('/delete-todo',actionsController.delete);



module.exports = router;