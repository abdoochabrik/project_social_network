import "./friend.css";

export default function Friend({user}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sidebarFriend">
        <img src={PF+user.profilePicture} alt="" className="sidebarFriendImg"/>
        <spam className="sidebarFriendName">{user.username}</spam>
        </li>
    )
}
