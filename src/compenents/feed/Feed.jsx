
import  "./feed.css";
import Share from '../../compenents/share/Share'
import Post from '../../compenents/post/Post' 
import { Posts } from '../../Data';

function Feed() {
    return (
      <div className="feed" >
            <div className="Wrapper">

                  <Share/>
                  { Posts.map((p) => (
                  <Post key={p.id} post={p} />
                  ))}
                  
            </div>
      </div>
    );
  }
  
  export default Feed;