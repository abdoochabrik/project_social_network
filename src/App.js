import Home from './pages/home/Home.js'
import Login from './pages/login/Login.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Register from './pages/register/Register.jsx';
import Chat from './pages/chat/Chat.jsx';
import Description from './pages/description/Description'

//import CommentList from './compenents/comment/CommentList'
//import FeedContainer from './containers/FeedContainer'
//import ShareContainer from './containers/ShareContainer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext.js';
function App() {

  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            {user ? <Home/> : <Description/>}
        </Route>

        <Route path="/profile/:username">
            <Profile/>
        </Route>

        <Route path="/chat">
            <Chat/>
        </Route>

        <Route path="/register">
            {user ? <Redirect to = "/" /> : <Register  /> }
        </Route>

        <Route path="/login">
            {user ? <Redirect to="/"/> : <Login/>} 
        </Route>
      </Switch>
    </Router>
);
}

export default App;
