import {ADD_POST} from '../constants/types'

const initialstate ={
    userId : '',
    descripton :'',
    text : '',
    picture : '',
    date : null    
    }
export default function(state = initialstate, action){
    switch (action.type) {
        case ADD_POST :
            return {
                ... state,
                descripton:action.payload.descripton,
                userId : action.payload.userId,
                date : action.payload.date,
                picture : action.payload.picture,
                text : action.payload.text
            } ;
        default:
             return state;
    }   
}