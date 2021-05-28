import {createContext, useReducer} from 'react';
import  Reducer from './Reducer'

const INITIAL_STATE = {
    user: 
      
    { 
        id:"60a2b272b7bfb1338cad5bc7",
        profilePicture:"",
        coverPicture:"",
        followers:[],
        followings:[],
        username:"ibrahima",
        email:"ibrahima@gmail.com"
    },

    isFetching : false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer ,INITIAL_STATE);
    return (
        <AuthContext.Provider 
        value={{
            user:state.user,
            isFetching:state.isFetching,
            error:state.error,
            dispatch
             }} >  { children }
        </AuthContext.Provider>
    )
}
