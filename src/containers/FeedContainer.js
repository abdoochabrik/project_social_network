import { connect } from 'react-redux'
import getPosts from '../actions/postActions'
import Feed from '../compenents/feed/Feed'

const mapStateToProps = state => {
    return {
        postsData : state.posts
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        getPosts : () => dispatch(getPosts())
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Feed);