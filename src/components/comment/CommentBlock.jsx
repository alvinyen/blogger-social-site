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
import { socketIoServerAdd } from '../../../../config/blogger-social-site/config';

let socket;

class CommentBlock extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            feedback: '',
        };

        const { dispatch } = this.props;

        socket = io.connect(`http://api.alvinyen.me?post_id=${this.props.post_id}`); // 後面跟要連接的位址
        // dispatch(loadInitialCommentsSocket(socket, this.props.post_id));

        socket.on('initialComments', ({ comments }) => {
            dispatch(initialComments(comments));
        });

        socket.on('commentAdded', (responseData) => {
            this.setState({ feedback: '' });
            dispatch({ type: ADD_COMMENT, comment: responseData.comment });
        });

        socket.on('news', function (data) {
            console.log(data);
            socket.emit('my other event', { my: 'data' });
        });

        socket.on('typing', (handle, post_id) => {
            if (post_id === this.props.post_id) {
                this.setState({ feedback: <p><em>{ `${handle} is typing message...` }</em></p> });
            }
        });

        socket.on('clearIsTyping', (post_id) => {
            if (post_id === this.props.post_id) {
                this.setState({ feedback: '' });
            }
        });
    }
    componentWillMount = () => { 
        // console.log(this.props.post_id);
        
        // this.socket.emit('loadInitialComments', { 'post_id': this.props.post_id });
        // loadInitialCommentsSocket(this.socket);

        // this.props.fetchCommentsByPostId(this.props.post_id);
    }

    componentWillUnmount = () => {
        // 下面這行拔掉
        socket.emit('clearIsTyping', this.props.post_id); 
        socket.disconnect();
    }

    getStyles() {
        return {
            container: {
                // border: 'red solid 2px',
                // border: 'solid 2px #CCE0FE',
                // borderRadius: '3px',
                display: 'inline-box',
                maxWidth: 600,
                margin: '0 auto',
                // color: '#1d2129',
                // backgroundColor: '#F4F5F7'
            },
            feedback: {
                color: '#aaa',
                padding: '10px 0px',
                margin: '0 10px',
            },
        };
    }

    render() {
        const styles = this.getStyles();
        const { isAuthenticated } = this.props.auth;
        const { post_id } = this.props;

        
        return (
            <div style={styles.container}>
                <div style={styles.feedback}>{this.state.feedback}</div>
                { isAuthenticated ? <InputBox socket={socket} post_id={post_id} /> : '' }
                <CommentBox socket={socket} />
            </div>
        );
    }
}

export default connect(({ auth }) => ({
    auth
}))(CommentBlock);
