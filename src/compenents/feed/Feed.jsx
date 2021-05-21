import  "./feed.css";
import Post from '../../compenents/post/Post' 
import ShareContainer from '../../containers/ShareContainer'
import { useEffect } from 'react'
import CommentListContainer from '../../containers/CommetnListContainer'


function Feed({postsData, getPosts}) {

      useEffect(() => {
            getPosts()
            
      }, [getPosts])

      const {posts, error, isLoading} = postsData;
    return (
         
      <div className="feed" >
            <div className="Wrapper">
                  <ShareContainer/>
                  {posts && posts.map((p) => (
                        <div>
                               <Post key={p._id} post={p} />
                               <CommentListContainer/>
                        </div>
                 
                  ))}
                  
            </div>
      </div>
    );
  }
  
  export default Feed;