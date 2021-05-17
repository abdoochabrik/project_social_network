import Home from './pages/home/Home.js'
import Login from './pages/login/Login.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Register from './pages/register/Register.jsx';
import CommentList from './compenents/comment/CommentList'
import FeedContainer from './containers/FeedContainer'
import ShareContainer from './containers/ShareContainer'
function App() {
  return (
    <>
      <FeedContainer/>
      {/* <CommentList/> */}
    </>
  );
}

export default App;
