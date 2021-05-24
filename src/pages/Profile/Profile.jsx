import "./profile.css";
import Topbar from "../../compenents/topbar/topbar";
import Sidebar from "../../compenents/sidebar/sidebar";
import Rightbar from "../../compenents/rightbar/Rightbar";
import Feed from "../../compenents/feed/Feed";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router'
export default function Profile() {

const [user, setUser]=useState({});
const username = useParams().username;
console.log(username)
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

useEffect( () => {
    const fetchUser =  async () => {
          const res =  await axios.get(`/users?username=${username}`);
          setUser(res.data);
          console.log(res);
    }
    fetchUser();
    
},[])

    return(

        <>
        <Topbar/>

        <div className="profile">
                <Sidebar/>
            <div className="profileRight">
            <div className="profileRightTop">
                 <div className="profileCover">
                     <img src={ user.coverPicture || PF+"profile.png"} alt="" className="profileCoverImage"/>
                     <img src={ PF + user.profilePicture || PF+"profile.png"} alt="" className="profileUserImage"/>
                 </div> <br/>
                 <div className="profileInfo">
                     <h4 className="profileInfoName">{user.username}</h4>
                     <div className="profileInfoStat">{user?.desc}</div>
                 </div>
             </div> <br/><br/>
             <div className="profileRightBottom">
                <Feed username={username}/>
                <Rightbar user = {user}/>
            </div>  
            
            </div>
       </div> 
       </>
    )
}