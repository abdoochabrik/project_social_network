import "./Amis.css";

export default function Online({user}) {

    const PF = process.env.REACT_APP_PF;
    return (
        <li className="rightbarFriend"> 
        <div className="rightbarProfileImgContainer">
            <img src={PF+user.profilePicture} alt="" className="rightbarProfileImg"/>
            <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUserName">{ user.username }</span>
   </li> 
    )
}
