import './chat.css';
//import Topbar  from "../../components/topbar/topbar"
import Topbar from "../../compenents/topbar/topbar";
import Conversation from '../../compenents/conversation/Conversation';
import Message from '../../compenents/message/Message';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function Chat() {
    const {user} = useContext(AuthContext);
    const [conversations, setConversations] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [messages, setMessages] = useState(null);
    const [newMessage, setNewMessage]  =  useState("")   

    useEffect(() => {
      const getConversations = async () => {
          try {
              const res = await axios.get("/conversations/" + user.id)
              setConversations(res.data)
          } catch (error) {
              console.log(error)
          }
      }
      getConversations()
        
    },[user?.id])
    useEffect(() => {
        const getMessage= async () => {
            try {
            const res = await axios.get("/messages/"+currentChat?._id);
            setMessages(res.data)
            console.log(currentChat?._id)
        }catch(err) {
            console.log(err)
        }
    }
    getMessage()
    },[currentChat])

    const handleSubmit= async (e) => {
     e.preventDefault();
     const message ={
         senderId: user.id,
         text: newMessage,
         conversationId: currentChat._id
     }     
    try {
        const res = await axios.post("/messages", message);
        setMessages([...messages, res.data])
        setNewMessage("")
    } catch (error) {
        console.log(error)
    }
    }
    return (

        <>
        <Topbar/>
        <div className="messenger">
             <div className="chatMenu">
                 <div className="chatMenuWrapper">
                     <input type="text" placeholder="serach for friends"  className="chatMenuInput" />
                     {conversations.map((c) => (
                         <div onClick={() => setCurrentChat(c)}>
                         <Conversation conversation={c} currentUser={user}/>
                         </div>
                     ))}
                 </div>
             </div>
             <div className="chatBox">
                 <div className="chatBoxWrapper">
                     { currentChat ?
                     <>
                     <div className="chatBoxTop">
                         {messages.map((m) => (
                                 <Message message={m} me={m.senderId !== user.id}/>  
                         ))}
                                                  
                     </div>
                     <div className="chatBoxBottom">
                           <textarea className="chatMessageInput"
                            placeholder="enter a message"
                            onChange={(e) => setNewMessage(e.target.value)}
                            value={newMessage}
                            ></textarea>
                           <button className="send" onClick={handleSubmit}>send</button>
                     </div></> : <span className="openConversation">Start a chat right Now</span>  }
                 </div>
             </div>
        </div>
        </>
    )
}