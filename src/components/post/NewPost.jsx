import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BasicForm from '../BasicForm.jsx';
import { connect } from 'react-redux' ;
import { newPost } from '../../redux/actions/postActions.js' ;

class NewPost extends Component {
    getStyles() {
        return {
            root: {
                maxWidth: '720px',
                margin: '32px auto 0',
            },
            title: {
                textAlign: 'center',
                color: '#2e4453',
                fontSize: '1.3em'
            },
            submit: {
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
    render() {
        const styles = this.getStyles();
        return (
            <div style={styles.root}>
                <p style={styles.title}>添加新文章</p>
                <form onSubmit={this.handleSubmit}>
                    <BasicForm ref="basic" />
                    <div style={styles.submit}>
                        <RaisedButton type="submit" label="送出" primary={true} />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, {newPost})(NewPost);