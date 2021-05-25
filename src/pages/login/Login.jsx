import './login.css'
import {useState} from 'react'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Login({auth,signIn}) {
    const [creds, setCreds] = useState({
        "email" : "",
        "password" :""
    })

    const handleChange = (e) =>{
        setCreds({...creds, [e.target.name] : e.target.value})
    }

    const loginSubmit =(e)=>{
        e.preventDefault()

        signIn(creds)
        setCreds({
            "email" : "",
            "password" :""
        })
    }
    if(auth.id) return <Redirect to="/" />
    return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                    <h3 className="loginLogo">CCEZsocial</h3>
                    <span className="loginD">
                        Connect with your friends on CCEZ SOCIAL.
                    </span>
              </div>

              <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Email"
                        type="email"
                        name="email" 
                        className="loginInput"
                        value={creds.email}
                        onChange={handleChange}
                        />
                        <input placeholder="password"
                        type="password"
                        name="password" 
                        className="loginPassword"
                        value={creds.password}
                        onChange={handleChange}
                        />
                        <button className="loginButton"
                        onClick={loginSubmit} >Log In</button>
                        <Link to='/signUp'>
                            <button className="loginCreate">create a new account</button>
                        </Link>
                    </div>
              </div>
          </div>
      </div>
   );
}