import jwtDecode from 'jwt-decode'
import {USER_LOADED,LOG_IN,SIGN_UP, SIGN_OUT} from '../constants/types'
const initialState = {
    token : localStorage.getItem("token"),
    email :null,
    username :null,
    id :null
}

const authReducer = (state = initialState, action) =>{
    switch (action.type) {
        case USER_LOADED:
        case SIGN_UP:
            const user = jwtDecode(action.token)
            return {
                ...initialState,
                token : action.token,
                email : user.email,
                id : user.id,
                username :user.username
            };
        case LOG_IN:
            const user1 = jwtDecode(action.token)
            return {
            ...initialState,
                token : action.token,
                email : user1.email,
                id : user1.id,
                username :user1.username
            };
        case SIGN_OUT:
            localStorage.removeItem("token")
            return {
                token : null,
                email : null,
                username : null,
                id : null
            };
        default:
            return state;
    }
}

export default authReducer;