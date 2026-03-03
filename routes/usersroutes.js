const express = require("express");
const router = express();
const {registerUser , loginUser , logoutUser} = require('../controllers/authusercontroller')
router.post('/register' , registerUser)
router.post('/login' , loginUser)
router.get('/logout' , logoutUser)


module.exports = router;