import express from 'express';

import {signin,signup,updateData} from '../controllers/users.js'

const router=express.Router();


router.post('/signin',signin);
router.post('/signup',signup);
router.patch('/:id', updateData);

export default router;