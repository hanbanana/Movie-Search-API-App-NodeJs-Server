var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path');


var PORT = process.env.PORT || 8080;

 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.get('/searchMovie', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    
});


app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})