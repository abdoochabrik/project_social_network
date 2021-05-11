
import Topbar from "../../compenents/topbar/topbar";
import Sidebar from "../../compenents/sidebar/sidebar";
import Rightbar from "../../compenents/rightbar/Rightbar";
import Feed from "../../compenents/feed/Feed";
import './home.css'

function Home() {
    return (
      <div >

    <Topbar/><br/><br/>

    <div className="homeContainer">
      
        <Sidebar/>
        <Feed/>
        <Rightbar/>
      
    </div>

    </div>
    );
  }
  
  export default Home;