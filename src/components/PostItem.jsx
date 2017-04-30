import React, { Component } from 'react';
import Radium from 'radium';
import PostActionList from './PostActionList.jsx';
import { connect } from 'react-redux';
import { Link } from 'react-router'

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
                position: 'relative'
            },
            content: {
                padding: '16px 24px 12px',
                lineHeight: '1.3em'
            },
            name: {
                textAlign: 'center',
                color: '#2e4453',
                fontWeight: '600',
                fontSize: '1.2em',
                textDecoration: 'none'
            }
        }
    }
    render() {
        const styles = this.getStyles();
        const { isAuthenticated, currentUser } = this.props.auth;
        return (
            <div style={styles.root}>
                <div style={styles.content}>
                    <Link to={`posts/${this.props.post._id}`} >
                        <div style={styles.name}>
                            {this.props.post.name}
                        </div>
                    </Link>
                </div>
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