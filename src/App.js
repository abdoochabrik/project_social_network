import {
  BrowserRouter as Router,
  Route,
  Switch
  } from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {loadUser} from './actions/authActions'
import Home from './pages/home/Home.js'
import LoginContainer from './containers/LoginContainer';
import Profile from './pages/Profile/Profile.jsx';
import RegisterContainer from './containers/RegisterContainer.js';
import './App.css'

function App() {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <Router>
      <div className="App" >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LoginContainer} />
          <Route  path="/signUp" component={RegisterContainer} />
          <Route  path="/profile" component={Profile} />
        </Switch>
      </div> 
    </Router>
  );
}

export default App;
