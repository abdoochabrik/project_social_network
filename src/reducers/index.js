import {combineReducers} from 'redux';
import shareReducer from './shareReducer'
import postReducer from './postReducer'
import addCommentReducer from './addCommentReducer'
import commentReducer from './commentReducer'

const reducers = combineReducers({
    sharePost : shareReducer,
    postsData : postReducer,
    addComment : addCommentReducer,
    commentsData : commentReducer
})

export default reducers;