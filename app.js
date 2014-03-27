var express = require('express');
var app = express();
app.use(express.bodyParser());

//var name = 'Ian Welch';

//var job = 'Lecturer';

//var room = 'CO337';


var person = {"name":"Ian Welch",
	      "job":"Lecturer",
	      "room":"CO337"}


app.get('/person', function(req, res) {
   res.send(person);
});

app.post('/person', function(req, res) {
    
    if(!req.body.hasOwnProperty('name') || !req.body.hasOwnProperty('job') ||!req.body.hasOwnProperty('room')) {
	  res.statusCode = 400;
	  return res.send('Error 400: Post syntax incorrect.');
    }
 
 person.name = req.body.name;

 person.job = req.body.job;

 person.room = req.body.room;

 res.json(true);

});

app.get('/person/room',function(req,res){
    res.send({"room":person.room});
});

app.post('/person/room',function(req,res){
  
  if(!req.body.hasOwnProperty('room')){
    res.statusCode = 400;
    return res.send('Error 400: Post syntas incorret(no "room" attribute)');
  }
  
  person.room = req.body.room;
  res.json(true);
});

var server = app.listen(3000, function() {
   console.log('Listening on port %d', server.address().port);
});
