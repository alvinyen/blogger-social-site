import React, { Component } from 'react';
import NewPost from './post/NewPost.jsx';
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';
import PostItem from './post/PostItem.jsx';
import { fetchPosts } from './../redux/actions/postActions.js';

class Dashboard extends Component {
    componentWillMount() {
        this.props.fetchPosts();
    }

    getStyles = () => {
        return {
            root: {
                maxWidth: '720px',
                margin: '30px auto'
            },
            actions: {
                marginTop: '32px',
                marginBottom: '32px',
                textAlign: 'center'
            }
        };
    }

    render() {                   // posts array
        const PostList = this.props.post.map((post) => {
            return <PostItem key={post._id} post={post} />;
        });
        const styles = this.getStyles(); 
        return (
            <div>
                <div style={styles.root}>
                    <div style={styles.actions}>
                        <Link to='posts/new'>
                            <RaisedButton label="添加新文章" primary={true} />
                        </Link>
                    </div>
                    {PostList}
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    post: React.PropTypes.array.isRequired
};

export default connect(({ post }) => ({
    post
}), { fetchPosts })(Dashboard);
