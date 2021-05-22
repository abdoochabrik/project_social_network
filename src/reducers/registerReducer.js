import {ADD_USER} from '../constants/types'

const initialState = {
    "username":'',     
    "Email":'',        
    "password":'',     
    "passwordAgain":''
}
const regiterReducer = (state=initialState, action) =>{
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                username : action.payload.username,  
                email :action.payload.email,     
                password :action.payload.password,  
                passwordAgain :action.payload.passwordAgain
            }
    
        default:
            return state;
    }
}

export default regiterReducer