import {MoreVert} from '@material-ui/icons'
import  "./Post.css"; 
//import { Users } from "../../Data";
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {format} from 'timeago.js';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Context';
import DeleteIcon from '@material-ui/icons/Delete';
function Post({ post }) {

const [like, setLike]=useState(post.likes.length);
const [isliked, setIsliked]=useState(false);
const [user, setUser]=useState({});

const PF = process.env.REACT_APP_PF;
const {user:currentUser} = useContext(AuthContext);
useEffect( () => {
    const fetchUser =  async () => {
          const res =  await axios.get(`/users?userId=${post.userId}`);
          setUser(res.data);
          console.log(res);
    }
    fetchUser();
    
},[post.userId])

const likeHandler = () => {
    try {
        axios.put("/posts/" + post._id + "/like", {userId : currentUser.id})
    } catch (error) {
        
    }
    setLike(isliked ? like - 1 : like + 1);
    setIsliked(!isliked);
}


const deletePost = async () => {
    try {
          console.log("pass")
           await axios.delete("/posts/" + post._id  , {userId : currentUser.id})
          console.log("delete")
    }catch(error)
    {
        console.log(error)
    }
    console.log(post._id)
    console.log(currentUser.id)

}

    return (
      <div className="post" >
            <div className="postWrapper">
                  <div className="postTop">
                      <div className="postTopLeft">
                             <Link to= {`profile/${user.username}`}>
                             <img src = { user.profilePicture ? PF + user.profilePicture : PF+"profile.png"} alt="" className="postProfileImage"/>
                             </Link>
                             <span className="postUserName">{ user.username }</span>
                             <span className="postDate">{format(post.updatedAt)}</span>
                      </div>
                      <div className="postTopRight"> 
                             <DeleteIcon onClick={deletePost}  />
                      </div>
                  </div>
                  <div className="postCenter">
                      <span className="postText">{ post?.desc }</span>
                      <img src={PF + post.image} alt="" className="postImage"/>
                  </div>
                  <div className="postBottom">

                        <div className="postBottomLeft">
                            <img src={`${PF}j'aime.jpg`}  onClick={likeHandler} alt=""  className="aimer"/>
                            <span className="nombreAimer">{ like }  </span>
                        </div>

                  </div>
            </div>
      </div>
    );
  }
  
  export default Post;

