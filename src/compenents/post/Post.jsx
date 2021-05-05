import {MoreVert} from '@material-ui/icons'
import  "./post.css"; 
import { Users } from "../../Data";

function Post({ post }) {

const user = Users.filter(u => u.id===1);
console.log(user[0].username);
    return (
      <div className="post" >
            <div className="postWrapper">
                  <div className="postTop">
                      <div className="postTopLeft">
                             <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="postProfileImage"/>
                             <span className="postUserName">{ Users.filter(u => u.id === post.userId)[0].username}</span>
                      </div>
                      <div className="postTopRight"> 
                            <MoreVert/>
                      </div>
                  </div>
                  <div className="postCenter">
                      <span className="postText">{ post?.desc }</span>
                      <img src="/assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="postImage"/>
                  </div>
                  <div className="postBottom">

                        <div className="postBottomLeft">
                            <img src="/assets/j'aime.jpg" alt="" className="aimer"/>
                            <span className="nombreAimer">{ post.like }</span>
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

