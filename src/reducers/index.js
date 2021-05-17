import {combineReducers} from 'redux';
import shareReducer from './shareReducer'
import postReducer from './postReducer'

const reducers = combineReducers({
    sharePost : shareReducer,
    posts : postReducer
})

export default reducers;