import Home from './pages/home/Home'
import Login from './pages/login/Login';
import Profile from './pages/Profile/Profile';
import Register from './pages/register/Register';
import Chat from './pages/chat/Chat';
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
import { AuthContext } from './context/Context.js';
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
