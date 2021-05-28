import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import store from './store'
//import {Provider} from 'react-redux'
import  {AuthContextProvider} from "./context/Context"

ReactDOM.render(
  <React.StrictMode>
   <AuthContextProvider>
   <App />   
  </AuthContextProvider> 
</React.StrictMode>,
document.getElementById('root')
);

