import { connect } from 'react-redux';
import React, { Component } from 'react';
import InputBox from './InputBox.jsx';
import CommentBox from './CommentBox.jsx';


class CommentBlock extends Component {
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
        return (
            <div style={styles.container}>
                { isAuthenticated ? <InputBox /> : '' }
                <CommentBox />
            </div>
        );
    }
}

export default connect(({ auth }) => ({
    auth
}))(CommentBlock);
