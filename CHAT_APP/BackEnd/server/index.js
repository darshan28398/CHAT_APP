var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var mongoose = require('mongoose');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


//Mongoose Schema
var eventLog = new mongoose.Schema({
  eventType : String,
  timeStamp : String,
  userName : String,
  socketID: String
},
{
  collection: 'eventCapture'
});


mongoose.connect('mongodb://darshan:Darshan998@ds255740.mlab.com:55740/chat-app-darshan', { useNewUrlParser: true }, (err, db) => {
  if (!err) { console.log('Connection Good'); }
  else {
    console.log('Error in Connection: ' + JSON.stringify(err, undefined, 2));
  }


io.on('connection', function(socket){
//mongodb code goes here - when a socket connection is created in history
  var table = db.collection('table');
  table.insertOne({typeOfEvent: 'Connection',socketID: socket.id, timeStamp: Date()});
  console.log("User Connected");
  socket.on("new_visitor",user=>{
      console.log("new visitor",user);
      socket.user = user;
      emitOnlineUsers();
  });

  socket.on("disconnect", function(socket)
  {
      //mongodb code goes here - save in event log user disconnected with timestamp
        console.log("a user disconnected");
  })
});

});
http.listen(3000, function(){
  console.log('listening on *:3000');
});