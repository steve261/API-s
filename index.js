var express = require('express');
var app = express();
var things = require('./things');  // Ensure the correct path to things.js

// Use the router on /things
app.use('/things', things);


app.listen(3000, function(){
   console.log('Server running on http://localhost:3000');
});
