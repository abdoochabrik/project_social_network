import './topbar.css'
import { Search, Person, Chat, Notifications } from '@material-ui/icons'
import {Link, useHistory} from 'react-router-dom'
import {signOut} from '../../actions/authActions'
import { useDispatch } from 'react-redux'


function Topbar() {

  const history =useHistory();
  const dispatch = useDispatch();
  const logOut = () =>{
    dispatch(signOut())
    history.push('/login')
  }
  return (

      <div className="topbarContainer">

           <div className="topbarLeft">
             <Link to="/" ><span className="logo">social network</span> </Link>     
            </div>
           <div className="topbarCenter">
             <div className="searchbar">
               <Search className="searchIcon" />
               <input placeholder="serach for friends" className="searchInput"/>
             </div>
           </div>
           <div className="topbarRight">
             <div className="topbarLinks">
               <Link to="/" ><span className="topbarLink">Home</span> </Link>
               <Link onClick={logOut} to="/login" ><span className="topbarLink">Log out</span></Link>
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
             <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="topbarImage"/>
           </div>
      </div>
    );
  }
  
  export default Topbar;