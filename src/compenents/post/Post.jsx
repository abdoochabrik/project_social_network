import {MoreVert} from '@material-ui/icons'
import  "./post.css"; 
//import { Users } from "../../Data";
import { useEffect, useState } from "react";
import axios from "axios";

function Post({ post }) {

const [like,setlike]=useState(post.likes.length);
const [isliked,setIsliked]=useState(false);
const PF = process.env.REACT_APP_PUBLIC_FOLDER ;

const likeHandler = () => {
    setlike(isliked ? like-1 : like+1);
    setIsliked(!isliked);
}
const [user,setUser]=useState([]);

      useEffect( () => {
            const fetchUsers =  async () => {
                  const res =  await axios.get(`Users/${post.userId}`);
                  setUser(res.data);
                  console.log(res)
            }
            fetchUsers();
            
      },[]

      )

    return (
      <div className="post" >
            <div className="postWrapper">
                  <div className="postTop">
                      <div className="postTopLeft">
                             <img src={user.picture || PF+"/post/avatarP.jpg"} alt="" className="postProfileImage"/>
                             <span className="postUserName">{ user.username}</span>
                      </div>
                      <div className="postTopRight"> 
                            <MoreVert/>
                      </div>
                  </div>
                  <div className="postCenter">
                      <span className="postText">{ post?.descripton }</span>
                      <img src={PF+post.photo} alt="" className="postImage"/>
                  </div>
                  <div className="postBottom">

                        <div className="postBottomLeft">
                            <img src={`${PF}/j'aime.jpg`} alt="" onClick= { likeHandler } className="aimer"/>
                            <span className="nombreAimer">{ like } like this post</span>
                        </div>

                        <div className="postBottomright">
                            <span className="nombreComments">{ post.comment }</span>
                        </div>

                  </div>
            </div>
      </div>
    );
  }
  
  export default Post;

