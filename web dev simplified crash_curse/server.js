const express=require('express');
const app =express();

app.set('view engine', 'ejs')



console.log("Server is running at port 8000")

const userRouter= require('./routes/users')
app.use('/users', userRouter )
app.listen(8000)