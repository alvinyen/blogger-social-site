import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BasicForm from '../BasicForm.jsx';
import { connect } from 'react-redux' ;
import { newPost } from '../../redux/actions/postActions.js' ;
import { browserHistory } from 'react-router';

class NewPost extends Component {
    getStyles() {
        return {
            root: {
                maxWidth: '720px',
                margin: '32px auto 0',
                padding: '0 30px'
            },
            title: {
                textAlign: 'center',
                color: '#2e4453',
                fontSize: '1.3em'
            },
            submit: {
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'center',
                marginTop: '32px'
            }
        };
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const basic = this.refs.basic.getBasicFormInputValue();
        this.props.newPost(basic);
    }
    onReturnButtonClick = (e) => {
        browserHistory.push('/');
    }
    render() {
        const styles = this.getStyles();
        return (
            <div style={styles.root}>
                <p style={styles.title}>添加新文章</p>
                <form onSubmit={this.handleSubmit}>
                    <BasicForm ref="basic" />
                    <div style={styles.submit}>
                        <RaisedButton type="submit" label="送出" primary={true} />
                        <RaisedButton 
                            onTouchTap={this.onReturnButtonClick}
                            primary={true} 
                            style={styles.button} 
                            label="返回列表" />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {newPost})(NewPost);