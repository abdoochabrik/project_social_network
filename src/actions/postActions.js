import axios from 'axios'
import {
    LOADING_POSTS, 
    LOAD_POSTS_SUCCESS, 
    LOAD_POSTS_ERROR 
    } from '../constants/types';

const loadingPosts = ()  => {
    return {
        type :LOADING_POSTS
    }
}

const loadPostsSuccess = posts  => {
    return {
        type : LOAD_POSTS_SUCCESS,
        payload : posts
    }
}

const loadPostsError = error => {
    return {
        type : LOAD_POSTS_ERROR,
        payload : error
    }
}

const getPosts = () => dispatch => {   
        dispatch(loadingPosts())
        axios
            .get('/Posts')
            .then(res => dispatch(loadPostsSuccess(res.data)))
            .catch(err => dispatch(loadPostsError(err)))
}

export default getPosts;