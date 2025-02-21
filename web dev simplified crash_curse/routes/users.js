
const express=require("express");
const router= express.Router()


router.get('/', (req,res ,next)=>{
    console.log("Hello here")
    //res.status(500).send("Hi")
    //res.status(500).json({message: "Hello there"})
    res.render("index", { text : "world"})// for rendering down some HTML, insert file path in the bracket
});

//Get all users
router.get('/', (req,res)=>{
    res.send("Users Lis")
})

//Get new
router.get('/new', (req,res)=>{
    res.send("Users New form")
})

//Add new user
router.post('/', (req,res)=>{
    res.send("Create New user")
})

//Get specific user
router.get('/:id', (req,res)=>{
    req.params.id
    res.send(`Got user ID ${req.params.id}`)
})
module.exports=router;


//mongodb+srv://steveayesiga:imanaishimwe@cluster1api.ba7td.mongodb.net/