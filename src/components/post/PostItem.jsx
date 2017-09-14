import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Radium from 'radium';
import PostActionList from './PostActionList.jsx';

class PostItem extends Component {
    getStyles() {
        return {
            root: {
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: '#fff',
                border: '1px solid rgba(200, 215, 225, 0.5)',
                boxShadow: ' 0 1px 2px #e9eff3',
                marginBottom: '24px',
                position: 'relative',
                maxWidth: '80%',
            },
            content: {
                padding: '16px 24px 12px',
                lineHeight: '1.3em',
                textAlign: 'center' ,
                // color: '#2e4453',
                // fontWeight: '600',
                // fontSize: '1.2em'
            },
            name: {
                textAlign: 'center',
                color: '#2e4453',
                fontWeight: '600',
                fontSize: '1.2em',
                textDecoration: 'none',
                ':hover': {color: '#29b6f6'},
            }
        }
    }
    truncatePostName = (postName) => {
        if (postName && postName.length > 15) {
            return `${postName.slice(0, 14)}...`;
        }
        return postName;
    }
    render() {
        const RadiumLink = Radium(Link);
        const styles = this.getStyles();
        const { isAuthenticated, currentUser } = this.props.auth;
        const postName = this.truncatePostName(this.props.post.name);
        return (
            <div style={styles.root}>
                <RadiumLink 
                        to={`posts/${this.props.post._id}`} 
                        style={styles.name}
                        activeStyle={{ backgroundColor: 'blue' }} 
                >
                    <div style={styles.content} >
                        {postName}
                    </div>
                </RadiumLink>
                {isAuthenticated && currentUser.admin
                    ? <PostActionList post={this.props.post} /> : ''}
            </div>
        );
    }
}

PostItem.propTypes = {
    auth: React.PropTypes.object.isRequired
};

export default connect(({ auth }) => ({
    auth
}))(Radium(PostItem));
