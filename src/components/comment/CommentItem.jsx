import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class CommentItem extends Component {
    getStyles = () => {
        return {
            container: {
                border: 'yellow solid 5px'
            },
            top: {
                display: 'flex',
                justifyContent: 'space-between'
            }
        };
    }
    render() {
        const styles = this.getStyles();
        // name time msg
        // const testMsg = `sdfsdfsdfsdfsdfdfsdf\n
        //     sdfsdfsdf\n
        //     sdfsdf`;

        const { name, when, comment } = this.props;

        return (
            <div style={styles.container}>
                <div style={styles.top}>
                    <span>{name}</span>
                    <span>{when}</span>
                </div>
                <TextField 
                    value={comment}
                    multiLine={true}
                    underlineShow={false}
                    readOnly
                />
            </div>
        );
    }
}

export default CommentItem;
