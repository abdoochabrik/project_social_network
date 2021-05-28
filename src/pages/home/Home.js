
import Topbar from "../../compenents/Navbar/Navbar";
import Sidebar from "../../compenents/sidebar/sidebar";
import Actualité from "../../compenents/Actualité/Actualité";

import './Home.css'

function Home() {
    return (
      <div >

    <Topbar/>

    <div className="homeContainer">
      
        <Sidebar/>
        <Actualité/>
      
    </div>

    </div>
    );
  }
  
  export default Home;