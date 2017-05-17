import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BasicForm from './../BasicForm.jsx';
import { connect } from 'react-redux';
import { getPost, clearPost, editPost } from './../../redux/actions/postActions.js';
import isEmpty from 'lodash/fp/isEmpty';
import { browserHistory } from 'react-router';

class EditPost extends Component {
    componentWillMount = () => {
                                // params is from the setting of react router
        this.props.getPost(this.props.params.post_id);
    }
    componentWillUnmount = () => {
        this.props.clearPost();
    }

    handleSubmit = (e) => {
        e.preventDefault() ;
        const basic = this.refs.basic.getBasicFormInputValue() ;
        this.props.editPost(basic, this.props.params.post_id);
    }
    onReturnButtonClick = (e) => {
        browserHistory.push('/');
    }
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
                display: 'flex',
                justifyContent: 'space-around',
                textAlign: 'center',
                marginTop: '32px'
            }
        };
    }

    render() {
        const styles = this.getStyles();
        const { post_ } = this.props;
        return (
            <div style={styles.root}>
                <p style={styles.title}>編輯文章</p>
                <form onSubmit={this.handleSubmit}>
                    { !isEmpty( post_ ) ? <BasicForm ref='basic' post_ ={ post_ } /> : ''}
                    < div style={styles.submit}>
                        <RaisedButton type="submit" label="更新" primary={true} />
                        <RaisedButton 
                            onTouchTap={this.onReturnButtonClick}
                            primary={true} 
                            style={styles.button} 
                            labelStyle={styles.label} 
                            label="返回列表" />
                    </div>
                </form>
            </div>
        );
    }
}

EditPost.propTypes = {
    post_: React.PropTypes.object.isRequired
};

export default connect( ({ post_ }) => ({
    post_
}), { getPost, clearPost, editPost } )(EditPost);