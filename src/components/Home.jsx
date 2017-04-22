import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem.jsx';
import { fetchPosts } from'./../redux/actions/postActions.js' ;

class Home extends Component {
    componentWillMount(){
        if(this.props.post.length === 0 ){
            this.props.fetchPosts();
        }
    }

    render() {
        const styles = {
            root: {
                maxWidth: '720px',
                margin: '30px auto'
            }
        }
        const PostList = this.props.post.map((post, index) => {
            return <PostItem key={index} post={post} />
        });
        return (
            <div style={styles.root}>
                {PostList}
            </div>
        );
    }
}

Home.propTypes = {
    post: React.PropTypes.array.isRequired
}

export default connect( ({ post }) => ({
    post
}) , {fetchPosts} )(Home);