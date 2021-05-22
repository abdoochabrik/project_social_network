import Home from './pages/home/Home.js'
import Login from './pages/login/Login.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Register from './pages/register/Register.jsx';
import CommentList from './compenents/comment/CommentList'
import FeedContainer from './containers/FeedContainer'
import ShareContainer from './containers/ShareContainer'
import Sidebar from './compenents/sidebar/sidebar';
import Rightbar from './compenents/rightbar/Rightbar';
import Chat from './pages/chat/Chat.jsx';
function App() {
  return (
    <>
      { /*<FeedContainer/> */}
      <Chat/>
      {/* <CommentList/> */}
    </>
  );
}

export default App;
