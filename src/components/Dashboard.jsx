import React, { Component } from 'react';
import NewPost from './NewPost.jsx' ;
import {Link} from 'react-router' ;
import RaisedButton from 'material-ui/RaisedButton' ;
import { connect } from 'react-redux' ;
// import PostList from './../components/PostList.jsx';
import PostItem from './../components/PostItem.jsx';

class Dashboard extends Component {
    render() {
        const PostList = this.props.post.map( (post, index) => {
            return <PostItem key={index} post={post} />
        } ); 

        const styles = {
            root: {
                maxWidth: '720px',
                margin: '30px auto'
            },
            actions: {
                marginTop: '32px',
                marginBottom: '32px',
                textAlign: 'center'
            }
        }
        return (
            <div style={styles.root}>
                <div style={styles.actions}>
                    <Link to='/posts/new'>
                        <RaisedButton label="添加新文章" primary={true} />
                    </Link>
                </div>
                {PostList}
            </div>
        );
    }
}

Dashboard.propTypes = {
    post: React.PropTypes.array.isRequired
} ;

export default connect( ({ post }) => ({
    post
}) )(Dashboard);