import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import { loginApiAdd } from './../config/config.js';
import {connect} from 'react-redux' ;
import login from './../redux/actions/authActions.js' ;

class LogIn extends Component {
    getStyles() {
        return {
            root: {
                backgroundColor: '#fff',
                boxShadow: '0 0 0 1px rgba(200, 215, 225, 0.5), 0 1px 2px #e9eff3',
                textAlign: 'center',
                padding: '0 1em 1em',
                margin: '30px 16px',
                '@media (min-width: 400px)': {
                    width: '400px',
                    margin: '30px auto'
                }
            },
            textField: {
                display: 'block',
                width: '100%',
                fontSize: '.9em'
            },
            label: {
                fontWeight: '600',
                fontSize: '1em',
                lineHeight: '40px'
            },
            button: {
                width: '130px',
                height: '40px',
                marginTop: '30px',
                marginBottom: '15px'
            },
            a: {
                fontSize: '.8em',
                textDecoration: 'none',
                color: 'gray',
                ':hover': { color: '#00bcd4' }
            }
        };
    }
    onSubmit = async (e) => {
        e.preventDefault();
        let username = this.refs.username.getValue();
        let password = this.refs.password.getValue();
        // console.log({ username, password });
        // const data = { username, password };
        // try {
        //     let response = await fetch( loginApiAdd, {
        //         method: `post`,
        //         headers: {
        //             "Content-Type": `application/json`
        //         },
        //         body: JSON.stringify(data)
        //     });
        //     let data = await response.json();
        //     console.log(data);
        // } catch (e) {
        //     console.log("error...", e);
        // }
        this.props.login({username, password});
    }
    render() {
        let styles = this.getStyles();
        return (
            <div style={styles.root}>
                <form onSubmit={this.onSubmit}>
                    <TextField style={styles.textField} floatingLabelText="帳號" ref="username" />
                    <TextField style={styles.textField} floatingLabelText="密碼" type="password" ref="password" />
                    <RaisedButton primary={true} style={styles.button} labelStyle={styles.label} type="submit" label="登入" />
                </form>
            </div>
        );
    }
}

LogIn.propTypes = {
    login: React.PropTypes.func.isRequired
}

export default connect(null, {login})(Radium(LogIn));

