import React, { Component } from 'react';
import { connect } from 'react-redux' ;
import { getPost, clearPost } from './../../redux/actions/postActions.js' ;
import { clearComments } from '../../redux/actions/commentActions';
import RaisedButton from 'material-ui/RaisedButton';
import { browserHistory } from 'react-router';
import CommentBlock from '../comment/CommentBlock.jsx';

class ShowPost extends Component {
    componentWillMount = () => {               // params is from the setting of react router
        this.props.getPost( this.props.params.post_id );
    }
    componentWillUnmount = () => {
        this.props.clearPost();
        this.props.clearComments();
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
                // border: 'red solid 2px',
                padding: '30px',
                maxWidth: '960px',
                minWidth: '400px',
                margin: '56px auto 0',
                textAlign: 'center',
            },
            name: {
                fontSize: '28px',
                lineHeight: '28px',
                color: '#2e4453',
                marginBottom: '28px',
                // border: 'solid green 2px',
                padding: '10px 0',
                // textAlign: 'center',
            },
            content: {
                color: '#666'
            },
            articleContentBlock: {
                // border: 'solid 2px #CCE0FE',
                // border: '1px solid rgba(200, 215, 225, 0.5)',
                border: 'solid 1px #CCE0FE',
                borderRadius: '3px',
                maxWidth: '600px',
                margin: '0 auto',
                textAlign: 'left',
                padding: '10px',

                boxShadow: 'rgb(233, 239, 243) 0px 1px 2px',

                fontSize: '18px',
                lineHeight: '24px',
                color: 'rgb(46, 68, 83)',
            }
        };
    }
    
    render() {
        const styles = this.getStyles(); 
        const { post_ } = this.props;
        
        return (
            <div style={styles.container}>
                <div style={styles.name}>{post_.name}</div>
                <div style={styles.articleContentBlock}>
                    { Object.keys(post_).length !== 0 ? post_.content.split(/\r\n|[\r\n]/).map((content, index)=>(<span key={index} style={styles.content}>{content}<br/></span>)) : '' }
                </div>
                <RaisedButton 
                    onTouchTap={this.onClick}
                    style={styles.button} 
                    labelStyle={styles.label} 
                    label="返回列表"
                    primary={true}
                />
                <CommentBlock
                    post_id={this.props.params.post_id}
                />
            </div>
        );
    }
}

ShowPost.propTypes = {
    post_: React.PropTypes.object.isRequired
};

export default connect(({ post_ }) => ({
    post_
}), { getPost, clearPost, clearComments })(ShowPost);
