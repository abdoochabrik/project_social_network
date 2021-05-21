import AddCommentComponent from '../compenents/comment/AddComment'
import AddComment from '../actions/addCommentActions'
import {connect} from 'react-redux'


const mapDispatchToProps = dispatch => {
    return {
        addComment : (comment) => dispatch(AddComment(comment))
    }    
}

export default connect(null, mapDispatchToProps)(AddCommentComponent)