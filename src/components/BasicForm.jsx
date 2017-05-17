import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

class BasicForm extends Component {
    getBasicFormInputValue() {
        const name = this.refs.name.getValue();
        const content = this.refs.content.getValue();
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
        const styles = this.getStyles() ;
        const { post_ } = this.props ;
        return (
            <div style={styles.root}>
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