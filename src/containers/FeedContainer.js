import { connect } from 'react-redux'
import Feed from '../compenents/feed/Feed'
import getPosts from '../actions/postActions'

const mapStateToProps = state => {
    return {
        postsData : state.postsData
    }
    
}


const mapDispatchToProps = dispatch => {
    return {
        getPosts : () => dispatch(getPosts())
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Feed);