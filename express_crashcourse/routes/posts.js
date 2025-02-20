import express from 'express';
import {
   deletePost, 
   getPosts, 
   getSinglePost, 
   newPost, 
   updatePost } from '../controllers/post_controller.js';
//import { append } from 'express/lib/response';
const router=express.Router();

//Get all posts
router.get('/',getPosts);

//Get one post
router.get('/:id',getSinglePost);
/*
//Get x number of posts
router.get('/',(req,res,next)=>{
   //console.log(req.query);
   res.status(200).json(posts);
});
router.get('/about',(req,res,next)=>{
   res.status(200).send('Hello About page');
   res.status(200).sendFile(Path.join(_dirname,'public', 'about.html'));
});

router.get('/',(req,res)=>{
   res.send('Hello, welcome');
   res.sendFile(Path.join(_dirname,'public', 'index.html'));
});
*/

//Create new post
router.post('/',newPost );

  
//Update post
router.put('/:id',updatePost);

//delete post
router.delete('/:id', deletePost);

export default router;