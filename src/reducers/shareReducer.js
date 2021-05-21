import {ADD_POST} from '../constants/types'

const initialstate ={
    userId : '',
    description :'',
    picture: null,
    date : null    
    }
export default function(state = initialstate, action){
    switch (action.type) {
        case ADD_POST :
            return {
                ... state,
                description:action.payload.description,
                userId : action.payload.userId,
                date : action.payload.date,
                picture : action.payload.picture
            } ;
        default:
             return state;
    }   
}