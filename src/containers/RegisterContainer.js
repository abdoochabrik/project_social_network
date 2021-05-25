import {connect} from 'react-redux';
import Register from '../pages/register/Register'
import {signUp} from '../actions/authActions'


const mapDispatchToProps = dispatch =>{
    return {
        signUp : (user)=>dispatch(signUp(user))
    }
} 

const mapStateToProps = state =>{
    return {
        auth : state.auth
    }
} 



export default connect(mapStateToProps, mapDispatchToProps)(Register)