import axios from 'axios'
import {ADD_USER} from '../constants/types'

const addUser = user => dispatch =>{
    axios
        .post('Users/register',user)
        .then(res =>dispatch({
            type : ADD_USER,
            payload :res.data
        }))
        .catch(err => console.log(err))

}
export default addUser;