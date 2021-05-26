import {combineReducers} from 'redux';
import shareReducer from './shareReducer'
import userReducer from '../reducers/userReducer'

const reducers = combineReducers({
    user: userReducer
});

export default reducers;