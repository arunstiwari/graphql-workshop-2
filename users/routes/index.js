const express = require('express');
const {registerNewUser} = require('../controllers');
const router = express.Router();

router.post('/users', registerNewUser);
router.post('/login', loginUser);
router.get('/users', fetchAllUsers);
router.get('/users/:id', fetchUserById);

module.exports = router;