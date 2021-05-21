import axios from 'axios'
import {LOADING_COMMENTS, 
    LOAD_COMMENTS_SUCCESS, 
    LOAD_COMMENTS_ERROR} from '../constants/types'


const loadingComments = ()  => {
    return {
        type :LOADING_COMMENTS
    }
}

const loadCommentsSuccess = comments  => {
    return {
        type : LOAD_COMMENTS_SUCCESS,
        payload : comments
    }
}

const loadCommentsError = error => {
    return {
        type : LOAD_COMMENTS_ERROR,
        payload : error
    }
}


const getComments = () => dispatch => {   
        dispatch(loadingComments())
        axios
            .get('/Comments')
            .then(res => dispatch(loadCommentsSuccess(res.data)))
            .catch(err => dispatch(loadCommentsError(err)))
}

export default getComments;