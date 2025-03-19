const express = require('express');
const { createUser, getAllUsers, getUserById, deleteUserById } = require('../controllers/user.controller');

const router = express.Router();

router.post('/v1/users', createUser);
router.get('/v1/users', getAllUsers);
router.get('/v1/users/:id', getUserById);
router.delete('/v1/users/:id', deleteUserById);


module.exports = router;
