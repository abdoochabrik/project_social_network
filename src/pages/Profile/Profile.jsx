import "./profile.css";
import Topbar from "../../compenents/topbar/Topbar";
import Sidebar from "../../compenents/sidebar/sidebar";
import Rightbar from "../../compenents/rightbar/Rightbar";
import FeedContainer from "../../containers/FeedContainer";


export default function Profile() {
    return(

        <>
        <Topbar/>

        <div className="profile">
                <Sidebar/>
            <div className="profileRight">
            <div className="profileRightTop">
                 <div className="profileCover">
                     <img src="assets/téléchargement.jpg" alt="" className="profileCoverImage"/>
                     <img src="assets/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg" alt="" className="profileUserImage"/>
                 </div> <br/>
                 <div className="profileInfo">
                     <h4 className="profileInfoName">chabrik abdellatif</h4>
                     <div className="profileInfoStat">nothing is free</div>
                 </div>
             </div> <br/><br/>
             <div className="profileRightBottom">
                <FeedContainer/>
                <Rightbar profile/>
            </div>  
            
            </div>
       </div> 
       </>
    )
}