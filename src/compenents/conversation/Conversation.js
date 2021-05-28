import axios from "axios";
import { useContext, useEffect, useState } from "react"
import "./Conversation.css"
//import {AuthContext} from "../../context/Context"
export default function Conversation({conversation, currentUser}) {
    const [username, setUser] = useState(null);
    const PF = process.env.REACT_APP_PF
    const [picture, setPicture] = useState(null);
    const [userss, setUsers] = useState([])
    

    
   useEffect(() => {
       /*const getUsers = async () => {
           const currentid = currentUser.id
                      try {
               const userss = await axios.get("/users?userId=" + currentid);
     //          console.log(currentUser._id)
               //setUsers(userss.data.username)
          //     console.log(userss.data.followings)
           } catch (error) {
               console.log(error)
           }*/
           /*const createConv= async () => {
        try {
            await axios.post("/conversations", {senderId : currentUser.id , receiverId : "60ad44f340263f5318ba47f4"})
        } catch (error) {
            console.log(error)
        }
    }*/
       console.log("hhh")
           
       
       //getUsers();
   },[currentUser.id])

    useEffect(() => {

    /*const createConv= async () => {
        try {
            await axios.post("/conversations", {senderId : currentUser.id , receiverId : "60ad44f340263f5318ba47f4"})
        } catch (error) {
            console.log(error)
        }
    }*/
        
        const getUser = async () => {
            const friendId = conversation.members.find((m) => m !== currentUser.id);
            try {
                const res = await axios.get("/users?userId=" + friendId)
                setUser(res.data.username)
                setPicture(res.data.profilePicture)
               //console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        //createConv()
        getUser()
    },[currentUser, conversation])

    return (
        <div className="conversation">
            <img src={picture ? PF + picture : PF +"/profile.png"} alt="" className="conversationImage" />
            <span className="conversationName">{username}</span>
        </div>

    )
}