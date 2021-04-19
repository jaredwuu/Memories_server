import express from 'express';
import {getPosts,createPost, updatedPost,deletePost,likePost } from '../controllers/posts.js'
import auth from '../middleware/auth.js';

const router = express.Router();

//GET posts/
router.get('/',getPosts);
//POST post
router.post('/',auth, createPost);
router.patch('/:id',auth, updatedPost);
router.delete('/:id',auth,deletePost);
router.patch('/:id/likePost',auth,likePost);
// router.get('/',getPosts);


export default router;
