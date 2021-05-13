
import  "./feed.css";
import Share from '../../compenents/share/Share'
import Post from '../../compenents/post/Post' 
//import { Posts } from '../../Data';
import { useEffect, useState } from "react";
import axios from "axios";

function Feed() {

      const [posts,setPosts]=useState([]);

      useEffect( () => {
            const fetchPosts =  async () => {
                  const res =  await axios.get("/Posts/userCurrent/609bf5cd7ad6e1712f584524");
                  setPosts(res.data);
                  console.log(res);
            }
            fetchPosts();
            
      },[]

      )
    return (
      <div className="feed" >
            <div className="Wrapper">

                  <Share/>
                  {posts.map((p) => (
                  <Post key={p.id} post={p} />
                  )) }
                  
            </div>
      </div>
    );
  }
  
  export default Feed;