    
import  "./sidebar.css";
import { Users } from '../../Data';
import {RssFeed, HelpOutline, WorkOutline, Event, School, WorkOffOutlined} from '@material-ui/icons';
import axios from "axios";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import { useContext, useEffect, useState } from "react";

function sidebar() {
    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const[friends, setFriends] = useState([]);
    useEffect(() => {
        const getFriends = async () => {
              try {
                  const friendList = await axios.get("/users/users")
                  setFriends(friendList.data)
              } catch (error) {
                  console.log(error)
              }
        };
        getFriends();
    },[user.id]);
        
    return (
      <div className="sidebar">
           <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Reseau</span>
                    </li>
                    <li className="sidebarListItem">
                        <School className="sidebarIcon"/>
                        <span className="sidebarListItemText">School</span>
                    </li>
                    <li className="sidebarListItem">
                        <HelpOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Event</span>
                    </li>
                    <li className="sidebarListItem">
                        <WorkOutline className="sidebarIcon"/>
                        <span className="sidebarListItemText">Work</span>
                    </li>
                </ul>
                <hr/>
                <label className="mightfollow">Users you migh follow</label>
                <hr className="sidebarHr"/>
                
                <ul className="sidebarListFriends">
                      {/* <Friend friends={friends}/> */}
                    {friends.map((friend) => (
                    <Link to={"/profile/"+friend.username} style={{textDecoration:"none", color:"black" }}>    
                    <div className="rightbarFollowing">
                    <img src={ friend.profilePicture ? PF + friend.profilePicture : PF + "/profile.png"}  style={{width:30, height:30}} alt="" className="rightbarFollowingImg"/>
                    <span  className="rightbarFollowingName">{ friend.username }</span>
                    </div>
                    </Link>
                    ))}

                </ul>
           </div>
      </div>
    );
  }
  
  export default sidebar;