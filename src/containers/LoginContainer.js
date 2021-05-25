import {connect} from 'react-redux';
import {logIn} from '../actions/authActions'
import Login from '../pages/login/Login'


const mapStateToProps = state =>{
    return{
        auth : state.auth
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        signIn : (creds) => dispatch(logIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)