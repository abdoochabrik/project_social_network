
import Sidebar from "../../compenents/sidebar/sidebar";
import Rightbar from "../../compenents/rightbar/Rightbar";
import FeedContainer from "../../containers/FeedContainer";
import './home.css'
import Topbar from "../../compenents/topbar/Topbar";
import {useSelector} from 'react-redux'
import {Redirect} from 'react-router-dom'

function Home() {
   const auth = useSelector(state => state.auth)
   if(!auth.id) return <Redirect to="/social-network-app" />
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