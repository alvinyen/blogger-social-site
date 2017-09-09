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
        dispatch(loadInitialComments(null, 2));
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
        console.log(comments.commentsArray);
        const commentItems = comments.commentsArray.map(({ id, name, when, comment }) => {
          return (
              <CommentItem 
                key={id}
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
