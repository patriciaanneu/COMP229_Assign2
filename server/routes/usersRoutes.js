import express from 'express';
import {
    getAllUsers,
    getUsersByID,
    createUsers,
    updateUsers,
    removeUsersByID,
    removeAllUsers
} from '../controllers/usersController.js';

const router = express.Router();

//CRUD routes for users
router.get('/', getAllUsers); //get all users
router.get('/:id', getUsersByID); //get users by id
router.post('/', createUsers); //add new user
router.put('/:id', updateUsers); //update user by id
router.delete('/:id', removeUsersByID); //remove user by id
router.delete('/', removeAllUsers); //remove all users

export default router;