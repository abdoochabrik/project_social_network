import './topbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

function Topbar() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user} = useContext(AuthContext); 
    return (

      <div className="topbarContainer">
           <div className="topbarCenter">
             {/*
             <div className="searchbar">
               <Search className="searchIcon" />
               <input placeholder="serach for friends" className="searchInput"/>
             </div>*/}
           </div>
           
           <div className="topbarRight">
             <div className="topbarLinks">
             <Link to="/" style={{textDecoration:"none", color:"white" }}><span className="topbarLink">Home</span></Link>
               <span className="topbarLink">Deconnexion</span>
               <Link to ="/chat" style={{textDecoration: "none"}} >
               <span className="topbarLink" style={{color: "white"}}>Messenger</span>
               </Link>
             </div>
             <Link to = {"/profile/" + user?.username}>
             <img src={user?.profilePicture ? PF + user?.profilePicture : PF + "/profile.png"} alt="" className="topbarImage"/>
             </Link>          
           </div>
      </div>
    );
  }
  
  export default Topbar;