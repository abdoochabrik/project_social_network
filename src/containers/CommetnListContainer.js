import { connect} from 'react-redux'
import CommentList from '../compenents/comment/CommentList'

import getComments from '../actions/commentActions'

const mapStateToProps = state => {
    return {
        commentsData : state.commentsData
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        getComments : () => dispatch(getComments())
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentList);