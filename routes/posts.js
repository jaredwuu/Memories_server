import express from 'express';
import {getPosts,createPost} from '../controllers/posts.js'
const router = express.Router();

//GET posts/
router.get('/',getPosts);

router.get('/',getPosts);
router.get('/',createPost);
// router.get('/',getPosts);
// router.get('/',getPosts);
// router.get('/',getPosts);


export default router;