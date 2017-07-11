import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

class BasicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containSpaceConfirm: false,
            lengthNotEnoughConfirm: false,
        };
    }
    getBasicFormInputValue() {
        const name = this.refs.name.getValue().trim();
        const content = this.refs.content.getValue().trim();

        const test = '';
        console.log(`test validate： ${test.match('[^A-Za-z0-9]')}`);

        if (name.match('[^A-Za-z0-9]') !== null || content.match('[^A-Za-z0-9]') !== null) {
            this.setState({ containSpaceConfirm: true });
            this.setState({ lengthNotEnoughConfirm: false });
            return null;
        } else if (name.length < 1 || content.length < 1) {
            this.setState({ containSpaceConfirm: false });
            this.setState({ lengthNotEnoughConfirm: true });
            return null;
        }

        this.setState({ containSpaceConfirm: false });
        this.setState({ lengthNotEnoughConfirm: false });
        return { name, content };
    }
    getStyles() {
        return {
            root: {
                padding: '20px',
                marginTop: '32px',
                backgroundColor: '#fff',
                boxShadow: '0 0 0 1px rgba(200, 215, 225, 0.5), 0 1px 2px #e9eff3'
            },
            textField: {
                display: 'block',
                fontSize: '.85em',
                width: '100%'
            }
        };
    }
    render() {
        const styles = this.getStyles();
        const { post_ } = this.props;
        return (
            <div style={styles.root}>
                <div style={{ color: 'red', 'text-align': 'center' }}>
                    { this.state.containSpaceConfirm ? '輸入的內容中不能含有特殊字元或空白喔~' : '' }
                    { this.state.lengthNotEnoughConfirm ? '欄位內容不可以空白喔~' : '' }
                </div>
                <TextField
                    ref='name'
                    floatingLabelText='標題'
                    style={styles.textField}
                    defaultValue={ post_ ? post_.name : '' } />
                <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                    <TextField
                        ref='content'
                        floatingLabelText="內容"
                        multiLine={true}
                        rows={3}
                        style={styles.textField}
                        defaultValue={ post_ ? post_.content : '' }  />
                </div>
            </div>
        );
    }

}
export default BasicForm;