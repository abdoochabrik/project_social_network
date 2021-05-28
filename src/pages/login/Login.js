import { useContext, useRef } from 'react';
import './Login.css'
import {loginCall} from '../../API'
import { AuthContext } from '../../context/Context';
import {CircularProgress} from '@material-ui/core'
export default function Login() {

   const email = useRef();
   const password = useRef(); 
   const { user,isFetching , error, dispatch } = useContext(AuthContext);

   const handleClick = (e) => {
       e.preventDefault();
    loginCall({email:email.current.value,password:password.current.value}, dispatch)
   } 
   console.log(user);
   return (
      <div className="login">
          <div className="loginWrapper">
             

              <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Email" type="email" required ref={email} className="loginInput"/>
                        <input placeholder="password" required minLength="6" ref={password} type="password" className="loginPassword"/>
                        <button className="loginButton"> {isFetching ? <CircularProgress color="white" size="20px" /> : "Log In"}</button>
                        <span className="loginForgot">forgot your password?</span>
                        <button className="loginCreate">{isFetching ? <CircularProgress color="white" size="20px" /> : "Create a new Account"}</button>
                    </form>
              </div>
          </div>
      </div>
   );
}