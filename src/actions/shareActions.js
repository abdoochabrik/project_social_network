import {ADD_POST} from '../constants/types';
import axios from 'axios';


const addPost = post => dispatch => {
    axios
        .post('/Posts', post, {
            baseURL: "https://apisoc.herokuapp.com/",
            headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data'
        }
         })
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