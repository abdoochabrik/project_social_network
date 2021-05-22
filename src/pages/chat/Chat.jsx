import './chat.css';
//import Topbar  from "../../components/topbar/topbar"
import Topbar from "../../compenents/topbar/topbar";
import Conversation from '../../compenents/conversation/Conversation';
import Message from '../../compenents/message/Message';
//import ChatOnline from '../../compenents/chatOnline/ChatOnline';
import ChatOnline from '../../compenents/chatOnline/ChtaOnline'
export default function Chat() {
    return (

        <>
        <Topbar/>
        <div className="messenger">
             <div className="chatMenu">
                 <div className="chatMenuWrapper">
                     <input type="text" placeholder="serach for friends"  className="chatMenuInput" />
                     <Conversation/>
                     <Conversation/>
                     <Conversation/>
                     <Conversation/>
                 </div>
             </div>
             <div className="chatBox">
                 <div className="chatBoxWrapper">
                     <div className="chatBoxTop">
                            <Message/> 
                            <Message me={true}/> 
                            <Message/> 
                            <Message me={true}/> 
                            <Message/> 
                            <Message me={true}/> 
                            <Message/> 
                            <Message me={true}/>                         
                     </div>

                     <div className="chatBoxBottom">
                           <textarea className="chatMessageInput" placeholder="enter a message"></textarea>
                           <button className="send">send</button>
                     </div>
                 </div>
             </div>
             <div className="chatOnline">
                 <div className="chatOnlineWrapper">
                     <ChatOnline/>
                     <ChatOnline/>
                     <ChatOnline/>
                     <ChatOnline/>
                     <ChatOnline/>
                     <ChatOnline/>
                     <ChatOnline/>
                     <ChatOnline/>
                 </div>
             </div>
        </div>
        </>
    )
}