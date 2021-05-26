import './message.css'
import {format} from 'timeago.js'
export default function Message({message,me}) {
    return (
        <div className={me ? "message me" : "message"}>
            <div className="messageTop">
           {/* <img src="/assets/1.jpeg" alt="" className="messageImage" />*/}
                <p className="messageText">{message.text}</p>
            </div>

            <div className="messageBottom">
                {format(message.createdAt)}
            </div>
        </div>
    )
}