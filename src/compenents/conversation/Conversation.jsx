import axios from "axios";
import { useEffect, useState } from "react"
import "./conversation.css"

export default function Conversation({conversation, currentUser}) {
    const [username, setUser] = useState(null);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [picture, setPicture] = useState(null);
    useEffect(() => {
        const friendId = conversation.members.find((m) => m !== currentUser.id);
        const getUser = async () => {
            try {
                const res = await axios.get("/users?userId=" + friendId)
                setUser(res.data.username)
                setPicture(res.data.profilePicture)
               //console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    },[currentUser, conversation])
    return (
        <div className="conversation">
            <img src={picture ? PF + picture : PF +"/profile.png"} alt="" className="conversationImage" />
            <span className="conversationName">{username}</span>
        </div>

    )
}