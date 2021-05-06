import "./online.css";

export default function Online({user}) {
    return (
        <li className="rightbarFriend"> 
        <div className="rightbarProfileImgContainer">
            <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="rightbarProfileImg"/>
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{ user.username }</span>
   </li> 
    )
}