    
import  "./sidebar.css";
import { Users } from '../../Data';
import {RssFeed, HelpOutline, WorkOutline, Event, School, WorkOffOutlined} from '@material-ui/icons';
import Friend from "../friend/Friend";
import axios from "axios";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

function sidebar() {

    
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
                <button className="sidebarButton">Friends List</button>
                <hr className="sidebarHr"/>

                <ul className="sidebarListFriends">
                   { Users.map(u => (
                       <Friend key={u.id} user={u} />
                   ))}

                </ul>
           </div>
      </div>
    );
  }
  
  export default sidebar;