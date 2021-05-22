
import Sidebar from "../../compenents/sidebar/sidebar";
import Rightbar from "../../compenents/rightbar/Rightbar";
import FeedContainer from "../../containers/FeedContainer";
import './home.css'
import Topbar from "../../compenents/topbar/Topbar";

function Home() {
    return (
      <div >
         <Topbar/>
    <div className="homeContainer">
      
        <Sidebar/>
        <FeedContainer/>
        <Rightbar/>
      
    </div>

    </div>
    );
  }
  
  export default Home;