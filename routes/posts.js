import express from 'express';
import {getPosts,createPost, updatedPost,deletePost,likePost } from '../controllers/posts.js'

const router = express.Router();

//GET posts/
router.get('/',getPosts);


//POST post
router.post('/',createPost);

router.patch('/:id',updatedPost);

router.delete('/:id',deletePost);

router.patch('/:id/likePost',likePost);
// router.get('/',getPosts);


export default router;