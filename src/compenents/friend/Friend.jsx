import "./friend.css";

export default function Friend({user}) {
    return (
        <li className="sidebarFriend">
        <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="sidebarFriendImg"/>
        <spam className="sidebarFriendName">{user.username}</spam>
        </li>
    )
}
