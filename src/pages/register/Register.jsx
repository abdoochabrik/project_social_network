import './register.css'
import {useState} from 'react'

export default function Register({addUser}) {
    const [user, setUser] = useState({
        "username":'',     
        "email":'',        
        "password":'',     
        "passwordAgain":'',
    })

    const handleChange = e =>{
        setUser({...user, [e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        
    const { password, passwordAgain } = user;
    if (password !== passwordAgain) {
        alert("Passwords don't match");
    } else {
        addUser(user)
        setUser({
            "username":'',     
            "email":'',        
            "password":'',     
            "passwordAgain":''
            })
        }
    }

   return (
      <div className="login">
          <div className="loginWrapper">
              <div className="loginLeft">
                    <h3 className="loginLogo">CCEZsocial</h3>
                    <span className="loginD">
                        Connect with your friends on CCEZ SOCIAL.
                    </span>
              </div>
            <form action="" method="post"  >
              <div className="loginRight">
                    <div className="loginBox">
                        <input onChange={handleChange}
                            placeholder="username" 
                            name="username" 
                            type="text" 
                            className="loginInput" 
                             />
                        <input onChange={handleChange} 
                            placeholder="Email" 
                            name="email" 
                            type="email" 
                            className="loginInput"        />
                        <input onChange={handleChange}
                            placeholder="password" 
                            name="password" 
                            type="password" 
                            className="loginPassword"  />
                        <input onChange={handleChange}
                            placeholder="confirm password" 
                            name="passwordAgain"  
                            type="password" 
                            className="loginPassword"  />
                        <button type="submit" 
                        onClick={handleSubmit} 
                        className="loginButton">Register Now</button>
                        <button className="loginCreate">Login Into Your Account</button>
                    </div>
              </div>
            </form> 
          </div>
      </div>
   );
}