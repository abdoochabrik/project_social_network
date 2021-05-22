import {connect} from 'react-redux';
import Register from '../pages/register/Register'
import addUser from '../actions/registerActions'


const mapDispatchToProps = dispatch =>{
    return {
        addUser : (user)=>dispatch(addUser(user))
    }
} 

export default connect(null, mapDispatchToProps)(Register)