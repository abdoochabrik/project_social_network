import qs from 'qs'
import axios from 'axios'
import {USER_LOADED,LOG_IN,SIGN_UP,SIGN_OUT} from '../constants/types'

export const signUp = user => dispatch =>{
    axios
        .post('Users/register',user)
        .then(res =>{
            localStorage.setItem("token",res.data.Access_Token)
           dispatch({
           type : SIGN_UP,
           token :res.data.Access_Token
       })
        }
        )
        .catch(err => console.log(err))

}

export const logIn = (creds) => dispatch => {
    const data = qs.stringify(creds);
    axios 
        .post('/login' ,data ,{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
            
        })
        .then(res =>{
            localStorage.setItem("token",res.data.Access_Token)
            dispatch({
                type : LOG_IN,
                token : res.data.Access_Token
            })
        }
            )
        .catch(err=>console.log(err))
}


export const loadUser = () => (dispatch, getState) => {
    const token = getState().auth.token;
    if(token){
        dispatch ({
            type : USER_LOADED,
            token
        })  
    } else return null;
    
}

export const signOut = () => dispatch =>{
    dispatch({
        type :SIGN_OUT        
    })

}


