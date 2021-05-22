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
  );
}

export default App;
