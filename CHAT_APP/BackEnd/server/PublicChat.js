var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});


// const getOnlineUsers = () => {
//     let onlineUsers = io.sockets.onlineUsers.connected;
//     let sockets = Object.values(onlineUsers);
//     let users = sockets.map(s => s.user);
//     return users.filter(u => u!=undefined);
// };

io.on("connection", function(socket) {
  //mongodb code goes here - when a socket connection is created in history

  console.log("a user connected");

//   const emitOnlineUsers = () => {
//     socket.broadcast.emit("Online Users",getOnlineUsers());
// }

  socket.on("add_user", user => {
    socket.emit("server_message", {
      name: "Chat App",
      message: "Welcome to the Chat App !"
    });

    socket.broadcast.emit("server_message", {
      name: "Chat App:",
      message: `${user.name} just joined the chat`
    });
    socket.user = user;
    // emitOnlineUsers();
  });

  socket.on("disconnect", function(socket) {
    //mongodb code goes here - save in event log user disconnected with timestamp
    const { user } = socket;

    if (user) {
      socket.broadcast.emit("server_message", {
        name: "Chat App:",
        message: `${user.name} just left the chat`
      });
    }
    // emitOnlineUsers();
  });
});

http.listen(3000, function() {
  console.log("listening on *:3000");
});
