import {LOADING_COMMENTS, 
    LOAD_COMMENTS_SUCCESS, 
    LOAD_COMMENTS_ERROR} from '../constants/types'

const initialState = {
    isLoading: false,
    comments : [],
    error :''
}



const commentReducer = (state =initialState, action) => {
    switch (action.type) {
        case LOADING_COMMENTS:
            
            return {
                ...state,
                isLoading: true 
            };
        case LOAD_COMMENTS_SUCCESS:
        
        return {
            ...state,
            isLoading: false,
            comments : action.payload,
            error : '' 
        };
        case  LOAD_COMMENTS_ERROR:
        
        return {
            ...state,
            isLoading: false,
            comments : [],
            error : action.payload 
        };
    
        default:
            return state;
    }
}    

export default commentReducer;