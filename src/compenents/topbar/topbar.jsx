import './topbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import { Link } from 'react-router-dom'

function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (

      <div className="topbarContainer">

           <div className="topbarLeft"> <span className="logo">CCEZ network</span> </div>
           <div className="topbarCenter">
             <div className="searchbar">
               <Search className="searchIcon" />
               <input placeholder="serach for friends" className="searchInput"/>
             </div>
           </div>
           <div className="topbarRight">
             <div className="topbarLinks">
               <Link to="/" style={{textDecoration:"none"}}>
                   <span className="topbarLink">Home</span>
               </Link>
          
               <Link to="/login" style={{textDecoration:"none"}} >
                    <span className="topbarLink">Deconnexion</span>       
               </Link>
        
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
             <img src={`${PF}/j'aime.jpg`}  alt="" className="topbarImage"/>
           </div>
      </div>
    );
  }
  
  export default Topbar;