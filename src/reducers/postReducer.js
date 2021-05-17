import {
    LOADING_POSTS, 
    LOAD_POSTS_SUCCESS, 
    LOAD_POSTS_ERROR 
    } 
    from '../constants/types';


const initialState = {
    isLoading: false,
    posts : [],
    error :''
}

export default (state = initialState, action) =>{
    switch (action.type) {
        case LOADING_POSTS:
            return {
                ...state,
                isLoading : true
            }
        case LOAD_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                posts : action.payload,
                error :''
            }
        case LOAD_POSTS_ERROR:
            return {
                ...state,
                isLoading: false,
                posts : [],
                error : action.payload
            }
    
        default:
            return state
    }
}
