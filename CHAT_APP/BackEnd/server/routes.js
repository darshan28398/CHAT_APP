import PublicChat from "./Components/PublicChat"
import RoomChat from "./Components/RoomChat"


export default [
    //Mongodb apis go here
    {path:"/",exact:true,Component:PublicChat},
    {path:"/RoomChat",Component:RoomChat}
    
];