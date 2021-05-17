import Share from '../compenents/share/Share'
import addPost from '../actions/shareActions'
import {connect} from 'react-redux'


const mapDispatchToProps  = dispatch => {
    return {
        addPost : (post) => dispatch(addPost(post))
    }
}

export default connect(null, mapDispatchToProps)(Share);
