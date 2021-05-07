import './login.css'

export default function Login() {
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
                        <input placeholder="Email" className="loginInput"/>
                        <input placeholder="password" className="loginPassword"/>
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">forgot your password?</span>
                        <button className="loginCreate">create a new account</button>
                    </div>
              </div>
          </div>
      </div>
   );
}