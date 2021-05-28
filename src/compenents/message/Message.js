import './Message.css'
import {format} from 'timeago.js'
export default function Message({message,me}) {
    return (
        <div className={me ? "message me" : "message"}>
            <div className="messageTop">
                <p className="messageText">{message.text}</p>
            </div>
            <div className="messageBottom">
                {format(message.createdAt)}
            </div>
        </div>
    )
}