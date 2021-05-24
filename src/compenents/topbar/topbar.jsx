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

           <div className="topbarLeft"><Link to="/" style={{textDecoration:"none" }}> <span className="logo">social network</span></Link> </div>
           <div className="topbarCenter">
             <div className="searchbar">
               <Search className="searchIcon" />
               <input placeholder="serach for friends" className="searchInput"/>
             </div>
           </div>
           <div className="topbarRight">
             <div className="topbarLinks">
               <span className="topbarLink">Home</span>
               <span className="topbarLink">Deconnexion</span>
             </div>
             <div className="topbarIcons">
               <div className="topbarIconItem">
                 <Person/>
                 <span className="topbarIconBadge">2</span>
               </div>
               <div className="topbarIconItem">
                 <Chat/>
                 <span className="topbarIconBadge">8</span>
               </div>
               <div className="topbarIconItem">
                 <Notifications/>
                 <span className="topbarIconBadge">3</span>
               </div>
             </div>
             <Link to = {"/profile/" + user?.username}>
             <img src={user?.profilePicture ? PF + user?.profilePicture : PF + "/profile.png"} alt="" className="topbarImage"/>
             </Link>          
           </div>
      </div>
    );
  }
  
  export default Topbar;