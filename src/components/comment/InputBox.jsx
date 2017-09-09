import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import React, { Component } from 'react';


class InputBox extends Component {
    constructor (prop) {
        super(prop);
        this.state = {
            value: ''
        };    
    }
    getStyles() {
        return {
            container: {
                display: 'inline-block'
            },
            TextField: {
                inputStyle: {
                    padding: '0 10px',
                    borderRadius: '30px',
                    border: '#D5D7DB solid 2px',
                    backgroundColor: 'white'
                },
                hintStyle: {
                    padding: '0 8px',
                    color: 'red'
                },
                textareaStyle: {
                }
            }
        };
    }
    // handleKeyDown = (event) => {
    //     // event.preventDefault();
    //     if (event.keyCode === 13 && event.shiftKey) {
    //         console.log(event.keyCode);
    //     }
    // }
    handleChange = (event) => {
        event.preventDefault();
        console.log(event.target.value);
        this.setState({ value: event.target.value });
    }
    render() {
        const styles = this.getStyles();
        return (
            <div style={styles.container}>
                <TextField
                    ref="tf_comment" 
                    inputStyle={styles.TextField.inputStyle}
                    placeholder="留言‧‧‧"
                    underlineShow={false}
                    multiLine={true}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                    value={this.state.value} 
                />
                <RaisedButton 
                    onTouchTap={this.onClick}
                    primary={true} 
                    style={styles.button} 
                    labelStyle={styles.label} 
                    label="返回列表" />
            </div>
        );
    }
}

export default InputBox;
