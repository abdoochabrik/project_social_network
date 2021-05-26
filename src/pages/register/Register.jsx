import axios from 'axios';
import { useRef } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './register.css'

export default function Register() {

    const email = useRef();
    const password = useRef(); 
    const username = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handlClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value){
            passwordAgain.current.setCustomValidity("entrez le meme password")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
            await axios.post("/auth/register", user);
            history.push("/login");
        }catch(err) {
            console.log(err);
        }
    }}
   return (
      <div className="login">
          <div className="loginWrapper">

              <div className="loginRight">
                    <form className="loginBox" onSubmit={handlClick}>
                        <input placeholder="username" required ref={username} className="loginInput"/>
                        <input placeholder="Email"  required ref={email} type="email" className="loginInput"/>
                        <input placeholder="password"  required ref={password} type="password" className="loginPassword"/>
                        <input placeholder="passwordAgain" minLength="6" required ref={passwordAgain} type="password" className="loginPassword"/>
                        <button className="loginButton">Register Now</button>
                        <Link to = "/login">
                        <button className="loginCreate" >Login Into Your Account</button>
                        </Link>
                    </form>
              </div>
          </div>
      </div>
   );
}