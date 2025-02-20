/*const express=require('express')
const app=express()


app.get('/', function(req, res){
   res.send("Hello world!");
});

app.get('/hello', function(req, res){
   res.send("Hello World!");
});
app.post('/hello', function(req, res){
   res.send("You just called the post method at '/hello'!\n");
});

app.all('/test', function(req, res){
   res.send("HTTP method doesn't have any effect on this route!");
});

app.listen(3000)
*/

import express from 'express';
import path from 'path';
import {fileURLToPath }from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';
import NotFound from './middleware/NotFound.js';
const port=process.env.PORT || 8000

//Get the directory name
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);
console.log(__filename);

const app=express();

//Body parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(logger);

//setup static folder(static server)
//app.use(express.static(path.join(_dirname,'public')));
app.use(express.static(path.join(__dirname, 'public')));

//Routes
app.use('/api/posts', posts);

app.use(NotFound);

//Error Handler
app.use(errorHandler);
app.listen(port,()=>console.log(`server is running on port ${port}`));