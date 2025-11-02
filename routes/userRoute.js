const express = require('express'); 

const { registerUser, loginUser } = require('../controllers/userController'); 

const router = express.Router(); 

router.post('/register', registerUser);  //route for registration

router.post('/login', loginUser);   //route for login

module.exports = router; 