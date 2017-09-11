import io from 'socket.io-client';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import InputBox from './InputBox.jsx';
import CommentBox from './CommentBox.jsx';
import { 
    // fetchCommentsByPostId, 
    // loadInitialCommentsSocket 
    initialComments,
    ADD_COMMENT
} from '../../redux/actions/commentActions';


let socket;

class CommentBlock extends Component {
    constructor(props) {
        super(props);
        
        const { dispatch } = this.props;

        socket = io.connect(`http://localhost:3000?post_id=${this.props.post_id}`); // 後面跟要連接的位址
        // dispatch(loadInitialCommentsSocket(socket, this.props.post_id));

        socket.on('initialComments', ({ comments }) => {
            dispatch(initialComments(comments));
        });

        socket.on('commentAdded', (responseData) => {
            dispatch({ type: ADD_COMMENT, comment: responseData.comment });
        });

        socket.on('news', function (data) {
            console.log(data);
            socket.emit('my other event', { my: 'data' });
        });
    }
    componentWillMount = () => { 
        // console.log(this.props.post_id);
        
        // this.socket.emit('loadInitialComments', { 'post_id': this.props.post_id });
        // loadInitialCommentsSocket(this.socket);

        // this.props.fetchCommentsByPostId(this.props.post_id);
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
                { isAuthenticated ? <InputBox socket={socket} post_id={post_id} /> : '' }
                <CommentBox socket={socket} />
            </div>
        );
    }
}

export default connect(({ auth }) => ({
    auth
}))(CommentBlock);
