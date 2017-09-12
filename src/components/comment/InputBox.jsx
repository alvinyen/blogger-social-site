import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';
import { 
        //  addComment, 
        //  newComment,
         addNewCommentSocket } from '../../redux/actions/commentActions';


class InputBox extends Component {
    constructor(prop) {
        super(prop);
        this.state = {
            message: ''
        };    
    }
    getStyles() {
        return {
            container: {
                display: 'inline-block'
            },
            TextField: {
                inputStyle: {
                    padding: '0 10px',
                    borderRadius: '30px',
                    border: '#D5D7DB solid 2px',
                    backgroundColor: 'white'
                },
                hintStyle: {
                    padding: '0 8px',
                    color: 'red'
                },
                textareaStyle: {
                }
            }
        };
    }
    // handleKeyDown = (event) => {
    //     // event.preventDefault();
    //     if (event.keyCode === 13 && event.shiftKey) {
    //         console.log(event.keyCode);
    //     }
    // }

    componentDidUpdate = () => {
        // console.log(this.state.message);
        if (this.state.message.length === 0) {
            this.props.socket.emit('clearIsTyping', this.props.post_id);
        } else if (this.state.message.length !== 0) {
            this.props.socket.emit('typing', this.props.auth.currentUser.name, this.props.post_id);    
        }
    }

    componentWillUnmount = () => {
        if (this.state.message.length !== 0) {
            this.props.socket.emit('clearIsTyping', this.props.post_id);
        }
    }

    getUserSpan = (name) => {
        return <span>{name}</span>;
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({ message: event.target.value });
        // console.log(event.target.value, this.state.message);
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        // console.log(this.state.message);
        // console.log(this.props.post_id);

        this.props.addNewCommentSocket(
            this.props.socket,
            {
                post_id: this.props.post_id,
                name: this.props.auth.currentUser.name, 
                when: new Date().valueOf(), 
                comment: this.state.message,
            }
        );

        // this.props.newComment({
        //     post_id: this.props.post_id,
        //     name: this.props.auth.currentUser.name, 
        //     when: new Date().valueOf(), 
        //     comment: this.state.message,
        // });

        // this.props.dispatch(addComment({
        //     post_id: this.props.post_id,
        //     name: this.props.auth.currentUser.name, 
        //     when: new Date().valueOf(), 
        //     comment: this.state.message,
        // }));

        this.setState({ message: '' });
    }

    render() {
        const styles = this.getStyles();
        const { currentUser } = this.props.auth;
        return (
            <div style={styles.container}>
                {this.getUserSpan(currentUser.name)}
                <TextField
                    name="tf_comment"
                    ref="tf_comment" 
                    inputStyle={styles.TextField.inputStyle}
                    placeholder="留言‧‧‧"
                    underlineShow={false}
                    multiLine={true}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    value={this.state.message} 
                />
                <RaisedButton 
                    onTouchTap={this.handleSubmit}
                    primary={true} 
                    style={styles.button} 
                    labelStyle={styles.label} 
                    label="送出留言" />
            </div>
        );
    }
}

export default connect(({ auth, comments }) => ({
    auth,
    comments,
}), { addNewCommentSocket })(InputBox);
