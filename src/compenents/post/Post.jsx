import {MoreVert} from '@material-ui/icons'
import  "./post.css"; 
import { Users } from "../../Data";
import { useState } from 'react';

function Post({ post }) {

const [like,setlike]=useState(post.like);
const [isliked,setIsliked]=useState(false);

const likeHandler = () => {
    setlike(isliked ? like-1 : like+1);
    setIsliked(!isliked);
}

    return (
      <div className="post" >
            <div className="postWrapper">
                  <div className="postTop">
                      <div className="postTopLeft">
                             <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="postProfileImage"/>
                             <span className="postUserName">{ Users.filter(u => u.id === post.userId)}</span>
                      </div>
                      <div className="postTopRight"> 
                            <MoreVert/>
                      </div>
                  </div>
                  <div className="postCenter">
                      <span className="postText">{ post.description }</span>
                      <img src={post.pictureUrl}  className="postImage"/>
                  </div>
                  <div className="postBottom">

                        <div className="postBottomLeft">
                            <img src="/assets/j'aime.jpg" alt="" onClick= { likeHandler } className="aimer"/>
                            <span className="nombreAimer">{ like }</span>
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

