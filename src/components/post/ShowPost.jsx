import React, { Component } from 'react';
import { connect } from 'react-redux' ;
import { getPost, clearPost } from './../../redux/actions/postActions.js' ;
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';

class ShowPost extends Component {
    componentWillMount = () => {               // params is from the setting of react router
        this.props.getPost( this.props.params.post_id );
    }
    componentWillUnmount = () => {
        this.props.clearPost();
    }
    onClick = (e) => {
        browserHistory.push('/');
    }
    getStyles() {
        return {
            label: {
                fontWeight: '600',
                fontSize: '1em',
                lineHeight: '40px'
            },
            button: {
                // width: '80px',
                height: '40px',
                marginTop: '30px',
                marginBottom: '15px'
            },

            container: {
                maxWidth: '960px',
                minWidth: '780px',
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
        return (
            <div style={styles.container}>
                <div style={styles.name}>{post_.name}</div>
                <div style={styles.content}>{post_.content}</div>
                <RaisedButton 
                    onTouchTap={this.onClick}
                    primary={true} 
                    style={styles.button} 
                    labelStyle={styles.label} 
                    label="返回列表" />
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