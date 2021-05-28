import { PermMedia, Room, Label, EmojiEmotions} from '@material-ui/icons'
import  "./Partager.css";
import {useContext, useRef, useState} from 'react';
import { AuthContext } from '../../context/Context';
import axios from 'axios';

function Share() {
   const {user} = useContext(AuthContext);
   const PF = process.env.REACT_APP_PF;
   const desc = useRef();
   const [file,setFile] = useState(null);

   const submitHandler = async (e) => {
       e.preventDefault();
       const newPost = {
           userId: user.id,
           desc: desc.current.value      
       } 
       if(file) {
           const data = new FormData();
           const fileName = /*Date.now()*/  file.name
           data.append("file", file)
           data.append("name", fileName)
           newPost.image = fileName;
           try {
               await axios.post("/upload", data)
           } catch (error) {
               console.log(error)
           }
       }
         try {
             await axios.post("/posts", newPost)
         } catch (error) {
             console.log(error)
         }
   }
    return (
      <div className="share" >
          <div className="Wrapper">
          <div action="" method="post">
              <div className="shareTop">
                  <img src={ user.profilePicture ? PF + user.profilePicture : PF+"profile.png"} alt="" className="shareTopImg"/>
                  <input
                  placeholder={"what's in your mind" + " " + user.username } 
                  className="shareInput"
                   ref={desc}/>
              </div>
              <hr/>
              <form className="shareButtom" onSubmit={submitHandler}>
                  <div  htmlFor="file" className="shareOptions">
                      <label className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo</span>
                            <input style={{display : "none"}} type="file" id="file" accept=".png, .jpeg, .jpg" onChange={(e) => setFile(e.target.files[0])} />
                      </label>
                      </div>
                  <button 
                  type="submit" 
                  className="shareButton">share</button>
              </form>
              </div>
          </div>
      </div>
    );
  }
  

export default Share;
