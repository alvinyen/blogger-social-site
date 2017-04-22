import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './PostItem.jsx';
class Home extends Component {
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
    posts: React.PropTypes.array.isRequired
}

export default connect( ({ post }) => ({
    post
}) )(Home);