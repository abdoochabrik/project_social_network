import  "./feed.css";
import Post from '../../compenents/post/Post' 
import { Posts } from '../../Data';
import Share from '../../compenents/share/Share';
import { useState,useEffect, useContext } from 'react'
import axios from "axios"
import { AuthContext } from "../../context/AuthContext";

function Feed({ username }) {

      const {user} = useContext(AuthContext); 
      const [posts,setPosts]=useState([]);

      useEffect( () => {
            const fetchPosts =  async () => {
                  const res = username  
                  ? await axios.get("/posts/profile/" + username)
                  : await axios.get("posts/friendPosts/" + user.id);
                  setPosts(res.data);
                  console.log(res);
            }
            fetchPosts();
            
      },[username, user?.id])

    return (
      <div className="feed" >
            <div className="Wrapper">
                  {(!username || username === user?.username) && <Share /> }
                  { posts.map((p) => (
                  <Post key={p._id} post={p} />
                  ))}
            </div>
      </div>
    );
  }
  
  export default Feed;