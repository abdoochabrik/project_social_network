import {
  BrowserRouter as Router,
  Route,
  Switch
  } from 'react-router-dom'
import Home from './pages/home/Home.js'
import Login from './pages/login/Login.jsx';
import Profile from './pages/Profile/Profile.jsx';
import SingUp from './pages/register/Register.jsx';
import CommentList from './compenents/comment/CommentList'
import Topbar from './compenents/topbar/Topbar'
import FeedContainer from './containers/FeedContainer'
import ShareContainer from './containers/ShareContainer'
<<<<<<< HEAD
import './App.css'
function App() {
  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route exact path="/" >
            <Home/>
          </Route>
          <Route path="/login" >
            <Login/>
          </Route>
          <Route  path="/signUp" >
            <SingUp/>
          </Route>
          <Route  path="/profile" >
            <Profile/>
          </Route>
        </Switch>
        </div> 
    </Router>
=======
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
>>>>>>> dff059b9ce1817eb3ef3157fe93c97a31e7d2572
  );
}

export default App;
