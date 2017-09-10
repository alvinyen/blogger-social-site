import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentItem from './CommentItem.jsx';

import { loadInitialComments } from '../../redux/actions/commentActions';

class CommentBox extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        const { dispatch } = this.props;
        dispatch(loadInitialComments(null, 3));
    }
    getStyles = () => {
        return {
            container: {
                border: 'blue 2px solid'
            }
        };
    }
    render() {
        const styles = this.getStyles();
        const { comments } = this.props;

        const commentItems = comments.commentsList.map(({ name, when, comment }, index) => {
          return (
              <CommentItem 
                key={index}
                id={index}
                name={name}
                when={when}
                comment={comment}
              />
          );  
        });

        return (
            <div style={styles.container}>
                {commentItems}
            </div>
        );
    }
}

const mapStateToProps = ({ comments }) => ({ comments, });

export default connect(mapStateToProps)(CommentBox);
