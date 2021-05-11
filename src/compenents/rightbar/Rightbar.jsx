
import  "./rightbar.css";
import {Users} from "../../Data";
import Online from "../online/Online";

function Rightbar({profile}) {

const HomeRightbar = () => {
    return(
        <>
         <img src="/assets/online.jpeg" alt="" className="hello"/> 
          <ul className="rightbarFriendsList">
              {Users.map(u => (
                  <Online key={u.id} user={u} />
              ))}
          </ul> 
        </>
    )
}
const ProfileRightbar = () => {
    return(
       <>
        <h4 className="rightbarTitle">user Information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                  <span className="rightInfoKey">lives:</span>
                  <span className="rightbarInfoValue">Rabat</span>     
            </div> 
            <div className="rightbarInfoItem">
                  <span className="rightInfoKey">From:</span>
                  <span className="rightbarInfoValue">Agadir</span>     
            </div> 
            <div className="rightbarInfoItem">
                  <span className="rightInfoKey">Realtionship</span>
                  <span className="rightbarInfoValue">Single</span>     
            </div>    
        </div>    
        <h4 className="rightbarTitle">user friends</h4>
        <div className="rightbarFollowings">
            <div className="rightbarFollowing">
                <img src="assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="rightbarFollowingImg"/>
                <span  className="rightbarFollowingName">chabrik</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="rightbarFollowingImg"/>
                <span  className="rightbarFollowingName">chabrik</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="rightbarFollowingImg"/>
                <span  className="rightbarFollowingName">chabrik</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="rightbarFollowingImg"/>
                <span  className="rightbarFollowingName">chabrik</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="rightbarFollowingImg"/>
                <span  className="rightbarFollowingName">chabrik</span>
            </div>
            <div className="rightbarFollowing">
                <img src="assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="rightbarFollowingImg"/>
                <span  className="rightbarFollowingName">chabrik</span>
            </div>
        </div>
       </>
    )
}    
    return (
      <div className="rightbar">
 
          {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    );
  }
  
  export default Rightbar;