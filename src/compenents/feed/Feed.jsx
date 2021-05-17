import  "./feed.css";
import Post from '../../compenents/post/Post' 
import { Posts } from '../../Data';
import ShareContainer from '../../containers/ShareContainer'
import { useEffect } from 'react'


function Feed({postsData, getPosts}) {

      console.log(postsData)

      useEffect(() => {
            getPosts()
            
      }, [getPosts])

    return (
      <div className="feed" >
            <div className="Wrapper">
                  <ShareContainer/>
                  { Posts.map((p) => (
                  <Post key={p.id} post={p} />
                  ))}
            </div>
      </div>
    );
  }
  
  export default Feed;