
import Home from './pages/home/Home.js'
import Login from './pages/login/Login.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Register from './pages/register/Register.jsx';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() 
{
  return (
       <Router>
         <Switch>
           <Route exact path="/">
               <Home/>
           </Route>

           <Route path="/profile:username">
               <Profile/>
           </Route>

           <Route path="/register">
               <Register/>
           </Route>

           <Route path="/login">
               <Login/>
           </Route>
         </Switch>
       </Router>
  );
}

export default App;
