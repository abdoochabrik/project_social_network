import './register.css'

export default function Register() {
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
                        <input placeholder="username" className="loginInput"/>
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="password" className="loginPassword"/>
                        <input placeholder="passwordAgain" className="loginPassword"/>
                        <button className="loginButton">Register Now</button>
                        <button className="loginCreate">Login Into Your Account</button>
                    </div>
              </div>
          </div>
      </div>
   );
}