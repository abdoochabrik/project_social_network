import axios from 'axios'
import {ADD_COMMENT} from '../constants/types'
const addComment = comment => dispatch => {
    axios
        .post('./Comments', comment)
        .then(res =>
            dispatch({
                type : ADD_COMMENT,
                payload : res.data
            }))
        .catch(err=> console.log(err));
}

export default addComment;