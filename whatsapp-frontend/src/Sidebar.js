import React,{useState, useEffect } from 'react';
import './Sidebar.css';
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import {Avatar,IconButton} from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat"
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChat from './SidebarChat';
import db from "./firebase";

export default function Sidebar() {
    const [rooms,setRooms] = useState([]);

    useEffect(() => {
        const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => 
        setRooms(snapshot.docs.map(doc =>({
                    id:doc.id,
                    data: doc.data(),
                }))
            )
);
return () => {
    unsubscribe();
}
    }, []);
    return (
        <div className="sidebar">
            
            <div className="sidebar_header">
                <Avatar src="https://media2.picsearch.com/is?IP4PT-e6RLp0Gf4Asp4PLHbJkf35zlNTe-P5rTg1BhU&height=336"/>
                <div className="sidebar_headerRight">
                    <IconButton>
                       <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                       <ChatIcon />
                    </IconButton>
                    <IconButton>
                       <MoreVertIcon />
                    </IconButton>
                    

                </div>
            </div>

            <div className="sidebar_search">
                <div className="sidebar_searchContainer">
                    <SearchOutlined />
                    <input placeholder="Search or start new chart" type="text"/>

                </div>
            </div>
            <div className="sidebar_chats">
                <SidebarChat addNewChat/>
                {rooms.map((room) =>(
                    <SidebarChat key={room.id} id={room.id}
                    name={room.data.name} />
                ))}
            </div>

            
        </div>
    )
}
