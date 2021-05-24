import './chatOnline.css'

export default function ChatOnline() {
    return (
        <div className="chatOnline">
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className="chatOnlineImg" src="/assets/1.jpeg" alt="" />
                    <div className="chatOnlineBadge"></div>
                </div>
                <span className="chatOnlineName">chabrik abdellatif</span>
            </div>
        </div>
    )
}