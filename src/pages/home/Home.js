
import Topbar from "../../compenents/topbar/topbar";
import Sidebar from "../../compenents/sidebar/sidebar";
import Rightbar from "../../compenents/rightbar/Rightbar";
import Feed from "../../compenents/feed/Feed";

import './home.css'
import Chat from '../chat/Chat'

function Home() {
    return (
      <div >

    <Topbar/>

    <div className="homeContainer">
      
        <Sidebar/>
        <Feed/>
     
    
      
    </div>

    </div>
    );
  }
  
  export default Home;