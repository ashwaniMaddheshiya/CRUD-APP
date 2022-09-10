import express from "express";
import {getUser, createUser, deleteUser, editUser} from '../controllers/users.js'

const router = express.Router();


router.get('/users', getUser);
router.post('/user', createUser);
router.delete('/user/:id', deleteUser);
router.put('/user/:id', editUser);

export default router