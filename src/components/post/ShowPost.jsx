import React, { Component } from 'react';
import { connect } from 'react-redux' ;
import { getPost, clearPost } from './../../redux/actions/postActions.js'

class ShowPost extends Component {
    componentDidMount() {               // 因為跟react-router連結所以可以拿到post_id ??
        this.props.getPost( this.props.params.post_id );
    }
    componentWillUnmount(){
        this.props.clearPost();
    }

    getStyles() {
        return {
            container: {
                maxWidth: '960px',
                margin: '56px auto 0'
            },
            name: {
                fontSize: '28px',
                lineHeight: '28px',
                color: '#2e4453',
                paddingBottom: '48px'
            },
            content: {
                color: '#666'
            }
        };
    }
    render() {
        const styles = this.getStyles() ; 
        const { post_ } = this.props ;
        console.log(typeof post_);
        return (
            <div style={styles.container}>
                <div style={styles.name}>{post_.name}</div>
                <div style={styles.content}>{post_.content}</div>
            </div>
        ) ;
    }
}

ShowPost.propTypes = {
    post_: React.PropTypes.object.isRequired
};

export default connect( ({ post_ }) => ({
    post_
}), { getPost, clearPost } )(ShowPost);