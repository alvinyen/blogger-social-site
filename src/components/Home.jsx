import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostItem from './post/PostItem.jsx';
import { fetchPosts } from './../redux/actions/postActions.js';
import { browserHistory } from 'react-router';

class Home extends Component {
    componentWillMount() {
        if( this.props.auth.currentUser.admin ){
            browserHistory.push('dashboard');
        }
        if (this.props.post.length === 0) {
            this.props.fetchPosts();
        }
    }

    getStyles = () => {
        return {
            root: {
                maxWidth: '720px',
                margin: '30px auto'
            }
        } ;
    }

    render() {
        const styles = this.getStyles() ;
        const PostList = this.props.post.map((post, index) => {
            return <PostItem key={index} post={post} />
        });
        return (
            <div>
                <div style={styles.root}>
                    {PostList}
                </div>
            </div>
        );
    }
}

Home.propTypes = {
    post: React.PropTypes.array.isRequired,
    auth: React.PropTypes.object.isRequired
}

export default connect(({ post, auth }) => ({
    post,
    auth
}), { fetchPosts })(Home);
