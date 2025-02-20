import express from 'express';
//import { append } from 'express/lib/response';
const router=express.Router();


let posts=[
   {id:1, title:"Post one"},
   {id:2, title:"post two"},
   {id:3, title:'Post three'}
]

//Get all posts
router.get('/api/posts', (req,res)=>{
   console.log(req.query);
   const limit= parseInt(req.query.limit);

   if(!NaN && limit>0){
      return res.status(200).json(posts.slice(0,limit));
   }
   res.status(200).json(posts);
})

//Get one post
router.get('/:id',(req,res)=>{
   console.log(req.params);
   const id=parseInt(req.params.id);
   const post=posts.find((post)=>post.id ===id);

   if(!post){
      res.status(404).json({msg:`A post with the id ${id} was not found`});
   }else{
   res.status(200).json(post);
}

});
//Get x number of posts
router.get('/',(req,res)=>{
   //console.log(req.query);
   res.status(200).json(posts);
});
router.get('/about',(req,res)=>{
   res.status(200).send('Hello About page');
   res.status(200).sendFile(Path.join(_dirname,'public', 'about.html'));
});

router.get('/',(req,res)=>{
   res.send('Hello, welcome');
   res.sendFile(Path.join(_dirname,'public', 'index.html'));
});


//Create new post
router.post('/', (req, res) => {
    console.log(req.body); // Debugging: Check if req.body is defined
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "Please provide a title" });
    }

    // Generate a new id by incrementing the last post id
    const newId = posts.length + 1;
    
    const newPost = { id: newId, title };
    posts.push(newPost);

    res.status(201).json({ message: "Post created successfully", data: newPost });

    
//Update post
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id); // Extracts ID from request params and converts it to an integer.
    const post = posts.find((post) => post.id === id); // Finds the post with the given ID.

    if (!post) {
        return res.status(404).json({ error: `A post with the ID ${id} was not found` }); // If post is not found, return 404.
    }

    const { title } = req.body; // Extract title from request body.

    if (!title) {
        return res.status(400).json({ error: "Please provide a title" }); // Ensure title is provided.
    }

    post.title = title; // Update the post's title.
    res.status(200).json({ message: "Post updated successfully", data: post }); // Return the updated post.
});

//delete post
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id); // Get ID from URL
    const post = posts.find((post) => post.id === id); // Find post

    if (!post) {
        return res.status(404).json({ error: `A post with ID ${id} was not found` });
    }

    const { title } = req.body;
    
    posts=posts.filter((post)=>post.id !== id );
    res.status(200).json({ message: "Post updated successfully", data: post });
});


});

   
 



export default router;