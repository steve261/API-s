let posts=[
   {id:1, title:"Post one"},
   {id:2, title:"post two"},
   {id:3, title:'Post three'}
]

//@desxription gets all posts
//@route GET /api/posts

export const getPosts=(req,res,next)=>{
   console.log(req.query);
   const limit= parseInt(req.query.limit);

   if(!NaN && limit>0){
      return res.status(200).json(posts.slice(0,limit));
   }
   res.status(200).json(posts);
}

//@des get single posts
//@route  GET /api/posts/:id
export const getSinglePost=(req,res,next)=>{
   console.log(req.params);
   const id=parseInt(req.params.id);
   const post=posts.find((post)=>post.id ===id);

   if(!post){
      const error =new Error(`A post with the id ${id} was not found`);
      error.status=404;
      return next(error);
   }else{
   res.status(200).json(post);
}

};

//@des create new post
//@route POST /api/posts/:id
export const newPost=(req, res,next)=>{ 
    console.log("Received body:", req.body); // Debugging: Check if req.body is defined
    const { title } = req.body;

    if (!title) {
      const error =new Error(`please include a title`);
      error.status=400;
      return next(error);
    }

    // Generate a new id by incrementing the last post id
    const newId = posts.length + 1;
    
    const newPost = { id: newId, title };
    posts.push(newPost);

    res.status(201).json({ message: "Post created successfully", data: newPost });
};
//@des Update post
//@route PUT /api/posts/:id

export const updatePost= (req, res,next) => {
    const id = parseInt(req.params.id); // Extracts ID from request params and converts it to an integer.
    const post = posts.find((post) => post.id === id); // Finds the post with the given ID.

    if (!post) {
      const error =new Error(`A post with the id ${id} was not found`);
      error.status=404;
      return next(error);
   }

    const { title } = req.body; // Extract title from request body.

    if (!title) {
        return res.status(400).json({ error: "Please provide a title" }); // Ensure title is provided.
    }

    post.title = title; // Update the post's title.
    res.status(200).json({ message: "Post updated successfully", data: post }); // Return the updated post.
};

//@des delete post
//@route PUT /api/posts/:id

export const deletePost=(req, res,next) => {
    const id = parseInt(req.params.id); // Get ID from URL
    const post = posts.find((post) => post.id === id); // Find post

    if (!post) {
        return res.status(404).json({ error: `A post with ID ${id} was not found` });
    }

    const { title } = req.body;
    
    posts=posts.filter((post)=>post.id !== id );
    res.status(200).json({ message: "Post updated successfully", data: post });
};