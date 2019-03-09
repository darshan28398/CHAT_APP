var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", function(socket) {
  //mongodb code goes here - when a socket connection is created in history

  console.log("a user connected");

  socket.on("join_room", room => {
    socket.join(room);
  });

  socket.on("message", ({ room, message }) => {
    //message,room
    socket.to(room).emit("message", {
      message,
      name: "Friend"
    });
  });

  socket.on("typing)", ({ room }) => {
    socket.to(room).emit("typing", "Someone is typing");
  });

  socket.on("stopped_typing", ({ room }) => {
    socket.to(room).emit("stopped_typing");
  });
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
