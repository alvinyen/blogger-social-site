import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Radium from 'radium';
import { loginApiAdd } from './../config/config.js';
import { connect } from 'react-redux';
import login, { setAuthErrorEmpty } from './../redux/actions/authActions.js';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containSpaceConfirm: false,
            lengthNotEnoughConfirm: false,
            clearErrorMsg: false
        };
    }
    componentWillUnmount() {
        this.props.setAuthErrorEmpty();
    }
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
        this.props.setAuthErrorEmpty();
        let username = this.refs.username.getValue().trim();
        let password = this.refs.password.getValue().trim();
        if( username.match('[^A-Za-z0-9]') !== null ||  password.match('[^A-Za-z0-9]') !== null ){
            this.setState({ containSpaceConfirm: true });
            this.setState({ lengthNotEnoughConfirm: false });
            return ;
        }
        if(username.length<5 || password.length<5){
            this.setState({ lengthNotEnoughConfirm: true });
            this.setState({ containSpaceConfirm: false });
            return ;
        }
        this.setState({ containSpaceConfirm: false });
        this.setState({ lengthNotEnoughConfirm: false });
        this.props.login({ username, password });
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
                <div style={{color: 'red'}}>
                    { this.state.containSpaceConfirm ? '輸入的內容中不能含有特殊字元或空白喔~':'' }
                    { this.state.lengthNotEnoughConfirm ? '請輸入正確的帳號密碼~':'' }
                    { this.props.auth.errorMsg } 
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    login: React.PropTypes.func.isRequired,
    setAuthErrorEmpty: React.PropTypes.func.isRequired
}

export default connect(({ auth }) => ({
    auth
}), { login, setAuthErrorEmpty })(Radium(Login));

