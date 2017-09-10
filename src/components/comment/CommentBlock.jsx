import { connect } from 'react-redux';
import React, { Component } from 'react';
import InputBox from './InputBox.jsx';
import CommentBox from './CommentBox.jsx';
import { fetchCommentsByPostId } from '../../redux/actions/commentActions';


class CommentBlock extends Component {
    componentWillMount = () => {
        console.log(this.props.post_id);
        this.props.fetchCommentsByPostId(this.props.post_id);
    }

    getStyles() {
        return {
            container: {
                border: 'red solid 2px',
                display: 'inline-box',
                width: 500,
                margin: '0 auto',
                color: '#1d2129',
                backgroundColor: '#F4F5F7'
            }
        };
    }

    render() {
        const styles = this.getStyles();
        const { isAuthenticated } = this.props.auth;
        const { post_id } = this.props;
        
        return (
            <div style={styles.container}>
                { isAuthenticated ? <InputBox post_id={post_id} /> : '' }
                <CommentBox />
            </div>
        );
    }
}

export default connect(({ auth }) => ({
    auth
}), { fetchCommentsByPostId })(CommentBlock);
