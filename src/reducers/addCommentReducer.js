import {ADD_COMMENT} from '../constants/types'

const initialState = {
    "_id": "",
    "text": "",
    "date": null,
    "userId": null,
    "postId": null,
}

const  addCommentReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_COMMENT :
            return {
                ...state,   // const a = {...object}
                _id : action.payload._id,
                text : action.payload.text,
                date : action.payload.date,
                userId : action.payload.userId,
                postId : action.payload.postId
            }
            
    
        default:
            return state;
    }
}

export default addCommentReducer; 