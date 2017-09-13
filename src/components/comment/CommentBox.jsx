import React, { Component } from 'react';
import { connect } from 'react-redux';
import CommentItem from './CommentItem.jsx';
import { ADD_COMMENT } from '../../redux/actions/commentActions';

// import { loadInitialComments } from '../../redux/actions/commentActions';

class CommentBox extends Component {
    constructor(props) {
        super(props);
        
    }
    componentDidMount = () => {
        
        // dispatch(loadInitialComments(null, 3));
    }
    getStyles = () => {
        return {
            container: {
                // border: 'blue 2px solid',
                border: 'solid 1px #CCE0FE',
                borderBottom: 'none',
                boxShadow: 'rgb(233, 239, 243) 0px 1px 2px',
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
