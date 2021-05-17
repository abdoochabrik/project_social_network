import {ADD_POST} from '../constants/types';
import axios from 'axios';


const addPost = post => dispatch => {
    axios
        .post('/Posts', post)
        .then(res =>
            dispatch(
                {
                    type : ADD_POST,
                    payload : res.data
                }
                
            ))
        .catch(err=> console.log(err))
     
}


export default addPost;