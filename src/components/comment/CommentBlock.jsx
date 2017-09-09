import React, { Component } from 'react';
import InputBox from './InputBox.jsx';


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
        return (
            <div style={styles.container}>
                <InputBox />
                
                
            </div>
        );
    }
}

export default CommentBlock;
