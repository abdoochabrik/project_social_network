import {combineReducers} from 'redux';
import shareReducer from './shareReducer'
import postReducer from './postReducer'
import addCommentReducer from './addCommentReducer'
import commentReducer from './commentReducer'
import registerReducer from './registerReducer'

const reducers = combineReducers({
    sharePost : shareReducer,
    postsData : postReducer,
    addComment : addCommentReducer,
    commentsData : commentReducer,
    user: registerReducer
})

export default reducers;