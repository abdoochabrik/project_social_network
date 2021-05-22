import './message.css'

export default function Message({me}) {
    return (
        <div className={me ? "message me" : "message"}>
            <div className="messageTop">
            <img src="/assets/1.jpeg" alt="" className="messageImage" />
                <p className="messageText">hi my name is chabrik</p>
            </div>

            <div className="messageBottom">
                1 minute ago
            </div>
        </div>
    )
}