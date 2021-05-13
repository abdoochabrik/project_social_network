import "./profile.css";
import Topbar from "../../compenents/topbar/topbar";
import Sidebar from "../../compenents/sidebar/sidebar";
import Rightbar from "../../compenents/rightbar/Rightbar";
import Feed from "../../compenents/feed/Feed";

export default function Profile() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER ;

    return(

        <>
        <Topbar/>

        <div className="profile">
                <Sidebar/>
            <div className="profileRight">
            <div className="profileRightTop">
                 <div className="profileCover">
                     <img src={`${PF}/téléchargement.jpg`} alt="" className="profileCoverImage"/>
                     <img src={`${PF}/WhatsApp Image 2021-03-09 at 21.11.04 (2).jpeg`}  alt="" className="profileUserImage"/>
                 </div> <br/>
                 <div className="profileInfo">
                     <h4 className="profileInfoName">chabrik abdellatif</h4>
                     <div className="profileInfoStat">nothing is free</div>
                 </div>
            </div>     <br/><br/>  
             <div className="profileRightBottom">
                <Feed/>
                <Rightbar profile/>
            </div>             
        </div>
       </div> 
       </>
    )
}