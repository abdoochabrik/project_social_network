import {combineReducers} from 'redux';
import shareReducer from './shareReducer'
import postReducer from './postReducer'
import addCommentReducer from './addCommentReducer'
import commentReducer from './commentReducer'
import auth from './authReducer'

const reducers = combineReducers({
    sharePost : shareReducer,
    postsData : postReducer,
    addComment : addCommentReducer,
    commentsData : commentReducer,
    auth: auth
})

export default reducers;