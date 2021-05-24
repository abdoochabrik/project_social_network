
import  "./rightbar.css";
import {Users} from "../../Data";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";
import {Add, Remove} from '@material-ui/icons'
function Rightbar({ user }) {

const[friends, setFriends] = useState([]);
const {user:currentUser, dispatch } = useContext(AuthContext);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const[followed, setFollowed] = useState(currentUser?.followings.includes(user?._id));

useEffect(() => {
     //setFollowed(current.followings.includes(user?.id))
    setFollowed(currentUser?.followings.includes(user?._id))

},[currentUser]);

useEffect(() => {
    const getFriends = async () => {
          try {
              const friendList = await axios.get("/users/friends/" + user._id)
              setFriends(friendList.data)
              //console.log(friendList.data)
          } catch (error) {
              console.log(error)
          }
    };
    getFriends();
});

const followHandler =  () => {
     try {
         if(followed){
          //  console.log(user._id)
           // console.log(currentUser.id)
         axios.put("/users/" + user._id + "/unfollow", {userId: currentUser.id});
          dispatch({type: "UNFOLLOW", payload: user.id})
         } 
         else
          {
             
             axios.put("/users/" + user._id + "/follow", {userId: currentUser.id});
             dispatch({type: "FOLLOW", payload: user.id})
          }
     } catch (error) {
         //console.log(error);
     }

     setFollowed(!followed);
}

const unfollowHandler =  () => {
    try {
        //if(followed){
         //  console.log(user._id)
          // console.log(currentUser.id)
             axios.put("/users/" + user._id + "/follow", {userId: currentUser._id})
        //} else {
            
         //   axios.put("/users/" + user._id + "/unfollow", {userId: currentUser.id});
          //  )}
    } catch (error) {
        //console.log(error);
    }

    //setFollowed(!followed)
}

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
       {user.username !== currentUser?.username && (
           <button className="rightbarUnFollowButton" onClick={followHandler}>
            { followed ? "Unfollow" : "follow" }
            { followed ? <Remove/> : <Add/>}
           </button>
       )}

       {/*{user.username !== currentUser.username && (
           <button className="rightbarFollowButton" onClick={followHandler}>
          follow 
          <Add/>
           </button>
       )}*/}
        <h4 className="rightbarTitle">user Information</h4>
        <div className="rightbarInfo">
            <div className="rightbarInfoItem">
                  <span className="rightInfoKey">lives:</span>
                  <span className="rightbarInfoValue">{user?.city}</span>     
            </div> 
            <div className="rightbarInfoItem">
                  <span className="rightInfoKey">From:</span>
                  <span className="rightbarInfoValue">{user?.from}</span>     
            </div> 
            <div className="rightbarInfoItem">
                  <span className="rightInfoKey">Realtionship</span>
                  <span className="rightbarInfoValue">Single</span>     
            </div>    
        </div>    
        <h4 className="rightbarTitle">user friends</h4>
        <div className="rightbarFollowings">
            {friends.map((friend) => (
            <Link to={"/profile/"+friend.username} style={{textDecoration:"none" }}>    
            <div className="rightbarFollowing">
                <img src={ friend.profilePicture ? PF + friend.profilePicture : PF + "/profile.png"} alt="" className="rightbarFollowingImg"/>
                <span  className="rightbarFollowingName">{ friend.username }</span>
            </div>
            </Link>
             ))}
        </div>
           
       </>
    )
}    
    return (
      <div className="rightbar">

          <div className="rightbarWrapper">
          
          </div> 
          { user ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    );
  }
  
  export default Rightbar;