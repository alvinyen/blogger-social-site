import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import BasicForm from './../BasicForm.jsx';
import { connect } from 'react-redux';
import { getPost, clearPost, editPost } from './../../redux/actions/postActions.js';
import isEmpty from 'lodash/fp/isEmpty';

class EditPost extends Component {
    componentDidMount() {
        this.props.getPost(this.props.params.post_id);
    }
    componentWillUnmount(){
        this.props.clearPost();
    }

    handleSubmit = (e) => {
        e.preventDefault() ;
        const basic = this.refs.basic.getBasicFormInputValue() ;
        this.props.editPost(basic, this.props.params.post_id);
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
                <form onSubmit={this.handleSubmit.bind(this)}>
                    { !isEmpty( post_ ) ? <BasicForm ref='basic' post_ ={ post_ } /> : ''}
                    < div style={styles.submit}>
                        <RaisedButton type="submit" label="更新" primary={true} />
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